import React, {createContext} from 'react';
import LoginContainer from "./LoginContainer";
import {IUser} from "./IUser";
import AuthService from "../../api/authService";

interface State {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
}

interface Props {

}

class Wrapper extends React.Component<Props, State> {


    constructor(props: Props) {
        super(props);
        this.state = {
            user: {} as IUser,
            isAuth: false,
            isLoading: false,
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
        this.isLoading = bool;
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

    // async checkAuth() {
    //     this.setLoading(true);
    //     try {
    //         const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
    //         console.log(response);
    //         localStorage.setItem('token', response.data.accessToken);
    //         this.setAuth(true);
    //         this.setUser(response.data.user);
    //     } catch (e) {
    //         console.log(e.response?.data?.message);
    //     } finally {
    //         this.setLoading(false);
    //     }
    // }


    render() {
        return (
            <Context.Provider value={{
                store
            }}>
                <LoginContainer/>
            </Context.Provider>
        );
    }
}

export default Wrapper;