export const a= 10;
// import apiClient;
// import User from "./user";
//
// export default class AuthRepositoryOld {
//
//    static async signIn(email: string, pass: string): Promise<any> {
//         console.log(`Basic ${btoa(`${email}:`+`${pass}`)}`)
//         const headers = {
//             'AUTHORIZATION': `Basic ${btoa(`${email}:`+`${pass}`)}`,
//             'Content-Type': 'application/json',
//         };
//
//         try {
//             const response = await apiClient.post<any>('/auth/login', {}, {headers});
//             console.log("signIn");
//             console.log(response.data);
//             console.log(response.headers);
//             const AccessToken = response.headers.accesstoken
//             console.log(AccessToken)
//             // dispatch({type: LOGIN_SUCCESS, payload: data})
//             // setter
//             return new User(response.headers.accesstoken, response.headers.refreshtoken, response.data.email,
//                 response.data.role);
//         }
//         catch (error: any) {
//             console.log("ERROR: ");
//             console.log(error.message);
//             throw error;
//         }
//     }
//
//     static async signUp(email: string, pass: string, dateOfBirth: string, name: string, surname: string): Promise<any> {
//         const data = JSON.stringify({
//             "birthDate": dateOfBirth,
//             "name": name,
//             "surname": surname
//         });
//
//         const headers = {
//             'User-Password': `Basic ${btoa(`${email}:`+`${pass}`)}`,
//             'Content-Type': 'application/json',
//         };
//
//         try {
//             console.log("signUp starts");
//             console.log(headers)
//             console.log(data)
//             const response = await apiClient.post<any>('/auth/registration', data, {headers});
//             console.log("signUp after axios");
//             console.log(response);
//             // setter
//             return response.data;
//         } catch (error: any) {
//             console.log("ERROR: ");
//             console.log(error.message);
//             throw error;
//         }
//     }
//
//     static async refreshAccessToken() {
//         console.log("RefreshToken")
//         const headers = {
//             'RefreshToken': sessionStorage.getItem('refreshToken'),
//         };
//
//         try {
//             const response = await apiClient.get('/auth/token/refresh_token', {headers});
//             const newToken = response.data.accessToken;
//
//             // Update the stored access token
//             sessionStorage.setItem('token', newToken);
//
//             return newToken;
//         } catch (error: any) {
//             console.error('Error refreshing token:', error);
//             // Handle token refresh error
//             return null;
//         }
//     }
// }