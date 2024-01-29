import {
    API_PROTOCOL,
    BASE_URL_API_SERVER,
    PORT_API_SERVER,
    PATH_URL_REFRESH_TOKEN
} from './../../general/constants/request-constants';
import type {Methods} from "./types";
import User from "./user";

const apiUrl: string = `${API_PROTOCOL}://${BASE_URL_API_SERVER}:${PORT_API_SERVER}`;

type Options = { [key: string]: string } | undefined;


type authOptions = { email: string, password: string };


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

    const token = localStorage.getItem('token');
    if (token)
        headers.append('Authorization', `Bearer ${token}`);

    return headers;
};


async function fetchData<T>(url: string, method: Methods, requestData?: authOptions,
                            headerOptions?: Options, requestOptions?: RequestInit): Promise<T> {
    const isRetry = true;
    let response: T;
    try {
        response = await fetchDataExtended<T>(url, method, isRetry, requestData, headerOptions, requestOptions);
        return response;

    } catch (error) {
        throw Error(`OPS!!!!! ${error}`)
    }
}


async function fetchDataExtended<T>(url: string, method: Methods, isRetry: boolean,
                                    requestData?: authOptions, headerOptions?: Options,
                                    requestOptions?: RequestInit): Promise<T>  {
    const apiUrl: string = `${API_PROTOCOL}://${BASE_URL_API_SERVER}:${PORT_API_SERVER}`;

    const defaultRequestOptions: RequestInit = {
        method: method,
        headers: createRequestHeaders(headerOptions),
        credentials: 'include',
        mode: "cors",
        body: JSON.stringify(requestData),
    };
    if (requestOptions)
        requestOptions = {
            ...defaultRequestOptions,
            ...requestOptions,
        }

    // Проверка успешности запроса
    const response = await fetch(`${apiUrl}${url}`, requestOptions);

    // Проверка успешности запроса
    if (!response.ok) {
        if (response.status === 401 && isRetry) {
            const token: Response = await fetch(`${apiUrl}${PATH_URL_REFRESH_TOKEN}`, requestOptions);
            localStorage.setItem('token', JSON.stringify(token.json()));
            return fetchDataExtended<T>(url, method, !isRetry, requestData, headerOptions, requestOptions);
        }

        if (response.status === 401 && !isRetry)
            throw new RequestError(TypeError.AUTHORIZATION_ERROR, response.status);

    }

    // Преобразование ответа в JSON и возвращение данных
    const data: T = await response.json();
    return data;
}

enum TypeError {
    AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
    AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
}

type ErrorName = 'AUTHENTICATION_ERROR' | 'AUTHORIZATION_ERROR';

class RequestError extends Error {
    name: ErrorName;
    cause?: any;
    status: number;
    body: any;

    constructor(name: ErrorName, status: number, body?: any, message?: string, cause?: any) {
        super(message);
        this.name = name;
        this.status = status;
        this.cause = cause;
        this.body = body;
    }
}

const setJwtTokenToLocalStorage = (jwtRefreshToken: string): void => {
    localStorage.setItem('jwtRefreshToken', jwtRefreshToken);
};


// Функция для отправки запроса
// function createFetchRequest(baseUrl: string): (method: Methods, path: string) => Promise<void> {
//     const options: RequestInit = createRequestOptions();
//
//     async function func(method: Methods, path: string, options: RequestInit): Promise<void> {
//         async function fetchWithRefresh(method: Methods, isRetry: boolean) {
//             try {
//                 options.method = method;
//                 const response = await fetch(`${baseUrl}\/${path}`, options);
//
//                 // Проверяем успешность запроса (код ответа 200-299)
//                 if (!response.ok) {
//                     if (response.status === 401) {
//                         if (isRetry) {
//                             // Попытка обновить токен
//                             await refreshToken(); // Ваша функция для обновления токена
//                             try {
//                                 const response: Response = await fetch(`${baseUrl}\/${PATH_URL_REFRESH_TOKEN}`, options);//<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
//                                 if (!response.ok) {
//                                     if (response.status === 401) {
//                                         console.log('NOT AUTHENTICATED.');
//                                     }
//                                 }
//                                 localStorage.setItem('token', response.json());
//                                 return $api.request(originalRequest);
//                             } catch (e) {
//                                 console.log('I CAN\'T GET A NEW ACCESS TOKEN.');
//                             }
//                             // Повторная отправка запроса с обновленным токеном
//                             await fetchWithRefresh(url, false);
//                         } else {
//                             // Ошибка аутентификации
//                             throw new Error('Ошибка аутентификации: Пользователь не авторизован');
//                         }
//                     } else if (response.status === 403) {
//                         // Ошибка авторизации
//                         throw new Error('Ошибка авторизации: У пользователя нет прав доступа');
//                     } else {
//                         // Другие ошибки HTTP
//                         throw new Error(`Ошибка HTTP: ${response.status}`);
//                     }
//                 }
//
//                 // Преобразуем ответ в JSON
//                 const data = await response.json();
//
//                 return data;
//             } catch (error) {
//                 // Обрабатываем ошибки
//                 console.error('Ошибка при выполнении запроса:', error);
//             }
//         }
//
//         const res = await fetchWithRefresh(method, true);
//
//         return res;
//     }
//
//     return func;
// };


// async function refreshAccessToken() {
//     console.log("RefreshToken")
//     const headers = {
//         'RefreshToken': sessionStorage.getItem('refreshToken'),
//     };
//
//     try {
//         const appFetch = createFetchRequest(apiUrl);
//         const response = await appFetch('GET', '/refresh_token');
//         const newToken = response.data.accessToken;
//
//         // Update the stored access token
//         sessionStorage.setItem('token', newToken);
//
//         return newToken;
//     } catch (error: any) {
//         console.error('Error refreshing token:', error);
//         // Handle token refresh error
//         return null;
//     }
// }
//
// export const appFetch = createFetchRequest(apiUrl);
