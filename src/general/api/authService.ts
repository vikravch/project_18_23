import {AuthResponse} from "./AuthResponse";
import AuthRepository from "./authRepository";
import {IUser} from "./IUser";
import User from "./user";


type authOptions = { email: string, password: string };
export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Options = { [key: string]: string } | undefined;



export default class AuthService {
    private static authRepository = AuthRepository;

    static async login(email: string, password: string): Promise<AuthResponse> {

        return await AuthService.authRepository.login(email, password);

    }

    static async registration(email: string, password: string): Promise<AuthResponse> {

        return await AuthService.authRepository.registration(email, password);
    }

    static async logout(): Promise<void> {

        return await AuthService.authRepository.logout();

    }

}

