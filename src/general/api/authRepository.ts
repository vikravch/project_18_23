import {AuthResponse} from "./AuthResponse";
import {IUser} from "./IUser";
import User from "./user";
import {
    BASE_URL_API_SERVER,
    API_PROTOCOL,
    PORT_API_SERVER,
    PATH_URL_REFRESH_TOKEN
} from './../constants/request-constants'

type authOptions = { email: string, password: string };
export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Options = { [key: string]: string } | undefined;

function createRequestOptions(): RequestInit {
    let requestOptions: RequestInit = {};
    requestOptions.headers = new Headers();
    requestOptions.credentials = "include";
    requestOptions.mode = "cors";
    // Дополнительные параметры запроса, например, для передачи данных или установки таймаута
    // body: JSON.stringify({ key: 'value' }),
    // timeout: 5000,
    return requestOptions;
};

function createRequestHeaders(headerOptions?: Options): HeadersInit {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    if (headerOptions)
        Object.keys(headerOptions).forEach((key) => {
            headers.append(key, headerOptions[key]);
        })

    const jwtRefreshToken = localStorage.getItem('jwtRefreshToken');
    if (jwtRefreshToken)
        headers.append('Authorization', `Bearer ${jwtRefreshToken}`);

    return headers;
};

export default class AuthRepository {
    private static async fetchData<T>(url: string, method: Methods, requestData?: authOptions, headerOptions?: Options, requestOptions?: RequestInit): Promise<T> {
        const apiUrl: string = `${API_PROTOCOL}://${BASE_URL_API_SERVER}:${PORT_API_SERVER}`;
        console.log('[AuthRepository fetchData: ]', requestData);
        let defaultRequestOptions: RequestInit = {
            method: method,
            headers: createRequestHeaders(headerOptions),
            credentials: 'include',
            mode: "cors",
            body: JSON.stringify(requestData),
        };

        if (requestOptions)
            defaultRequestOptions = {
                ...defaultRequestOptions,
                ...requestOptions,
            }

        console.log('[authRepository]  requestOptions: ', defaultRequestOptions);
        const response = await fetch(`${apiUrl}${url}`, defaultRequestOptions);

        // Проверка успешности запроса
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        // Преобразование ответа в JSON и возвращение данных
        const data: T = await response.json();
        return data;
    }

    static async login(email: string, password: string): Promise<AuthResponse> {
        const base64 = `Basic ${btoa(`${email}:${password}`)}`;
        const requestData = undefined; // {email, password}
        return await AuthRepository.fetchData<AuthResponse>('/login', 'POST', requestData, {'authorization': base64});
        // return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AuthResponse> {
        const base64 = `Basic ${btoa(`${email}:${password}`)}`;
        const requestData = {email, password};
        console.log('[AuthRepository registration] e-mail: ', email);
        console.log('[AuthRepository registration] password: ', password);
        console.log('[AuthRepository registration] requestData:', requestData);
        //                                                      http://localhost:5000/api/registration
        return await AuthRepository.fetchData<AuthResponse>('/api/registration', 'POST',
            requestData, {email, password});
        // return await AuthRepository.fetchData<AuthResponse>('/api/registration', 'POST', requestData,{'authorization': base64, email, password});
        // return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return await AuthRepository.fetchData<void>('/logout', 'POST');
        // return $api.post('/logout')
    }

}

