import React, {Context,createContext} from 'react';
import LoginContainer from "./LoginContainer";
import {IUser} from "./IUser";
import AuthService from "../../api/authService";
import {
    API_PROTOCOL,
    BASE_URL_API_SERVER,
    PATH_URL_REFRESH_TOKEN,
    PORT_API_SERVER
} from "../../constants/request-constants";
import {AuthResponse} from "../../api/AuthResponse";
// import LoginForm from "./LoginForm";

interface State {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    users: IUser[];
    email:string;
    password:string;
}

interface Props {

}


type Options = { [key: string]: string } | undefined;
class Wrapper extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            user: {} as IUser,
            isAuth: false,
            isLoading: false,
            users: [],
            email:'shlufman@mail.ru',
            password:'123456',
        }
        if (localStorage.getItem('token')) {
            this.checkAuth()
        }
        // makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.setState(prev => ({...prev, isAuth: bool}));
    }

    setUser(user: IUser) {
        this.setState(prev => ({...prev, user}));
    }

    setLoading(bool: boolean) {
        this.setState(prev => ({...prev, isLoading: bool}));
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.accessToken);
            this.setAuth(true);
            this.setUser(response.user);
        } catch (e) {
            console.log(e);
        }
    }

    async registration(email: string, password: string) {
        try {
            console.log('e-mail: ', email);
            console.log('password: ', password);
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.accessToken);
            this.setAuth(true);
            this.setUser(response.user);
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }
    }

    createRequestHeaders(headerOptions?: Options): HeadersInit {
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        if (headerOptions)
            Object.keys(headerOptions).forEach((key) => {
                headers.append(key, headerOptions[key]);
            })

        const token = localStorage.getItem('token');
        if (token)
            headers.append('Authorization', `Bearer ${token}`);

        return headers;
    };
    async checkAuth() {
        const apiUrl: string = `${API_PROTOCOL}://${BASE_URL_API_SERVER}:${PORT_API_SERVER}`;
        this.setLoading(true);
        try {
            // const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            let response:AuthResponse;
            await fetch(`${apiUrl}${PATH_URL_REFRESH_TOKEN}`, {
                method: 'GET',
                headers: this.createRequestHeaders(),
                credentials: 'include',
                mode: "cors",}
            ).then(res=>res.json()).then((data:AuthResponse)=>{
                console.log(data);
                localStorage.setItem('token', data.accessToken);
                this.setAuth(true);
                this.setUser(data.user);
            });

        } catch (e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }
    async  getUsers() {
        try {
            // const response = await UserService.fetchUsers();
            // setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }



    render() {
        if (this.state.isLoading) {
            return <div>Загрузка...</div>
        }

        if (!this.state.isAuth) {
            return (
                <div>
                    <div>
                        <input
                            onChange={e =>
                                this.setState(prev=>({...prev, email:e.target.value}))}
                            value={this.state.email}
                            type="text"
                            placeholder='Email'
                        />
                        <input
                            onChange={e =>
                                this.setState(prev=>({...prev, password:e.target.value}))}
                            value={this.state.password}
                            type="password"
                            placeholder='Пароль'
                        />
                        <button onClick={() => this.login(this.state.email, this.state.password)}>
                            Логин
                        </button>
                        <button onClick={() => this.registration(this.state.email, this.state.password)}>
                            Регистрация
                        </button>
                    </div>
                    <button onClick={this.getUsers}>Получить пользователей</button>
                </div>
            );
        }
        return (
            <div>
                <h1>{this.state.isAuth ? `Пользователь авторизован ${this.state.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
                <h1>{this.state.user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
                <button onClick={() => this.logout()}>Выйти</button>
                <div>
                    <button onClick={this.getUsers}>Получить пользователей</button>
                </div>
                {this.state.users.map(user =>
                    <div key={user.email}>{user.email}</div>
                )}
            </div>
        );
    }
}

export default Wrapper;