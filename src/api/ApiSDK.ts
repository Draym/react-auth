import {UserApi} from "./user/UserApi";
import {AuthApi} from "./auth/AuthApi";
import {UserDTO} from "./user/UserDTO";
import HttpUtils from "../utils/http/HttpUtils";
import {ApiEndpoint} from "./ApiEndpoint";
import {TokenDTO} from "./auth/TokenDTO";
import {LoginRequest} from "./auth/LoginRequest";
import {SignupRequest} from "./auth/SignupRequest";
import {SignupEthRequest} from "./auth/SignupEthRequest";
import {EthLoginRequest} from "./auth/EthLoginRequest";
import {GetNonceRequest} from "./auth/GetNonceRequest";
import {NonceDTO} from "./auth/NonceDTO";

const domain: string | null = process.env.REACT_APP_API_ENDPOINT || null;

export default class ApiSDK {

    static auth: AuthApi = {
        login: function (request: LoginRequest): Promise<TokenDTO> {
            return new Promise<TokenDTO>(function (resolve, reject) {
                HttpUtils.post(domain, ApiEndpoint.AUTH_Login, request, resolve, reject);
            });
        },
        quickLogin: {
            ethLogin: function (request: EthLoginRequest): Promise<TokenDTO> {
                return new Promise<TokenDTO>(function (resolve, reject) {
                    HttpUtils.post(domain, ApiEndpoint.AUTH_Login_eth, request, resolve, reject);
                });
            },
            ethGetNonce: function (request: GetNonceRequest): Promise<NonceDTO> {
                return new Promise<NonceDTO>(function (resolve, reject) {
                    HttpUtils.get(domain, ApiEndpoint.AUTH_Login_eth_getNonce, request, resolve, reject);
                });
            }
        },
        signup: function (request: SignupRequest): Promise<UserDTO> {
            return new Promise<UserDTO>(function (resolve, reject) {
                HttpUtils.post(domain, ApiEndpoint.AUTH_Signup, request, resolve, reject);
            });
        },
        signupWithEth: function (request: SignupEthRequest): Promise<UserDTO> {
            return new Promise<UserDTO>(function (resolve, reject) {
                HttpUtils.post(domain, ApiEndpoint.AUTH_Signup_eth, request, resolve, reject);
            });
        }
    }

    static user: UserApi = {
        get: function (): Promise<UserDTO> {
            return new Promise<UserDTO>(function (resolve, reject) {
                HttpUtils.get(domain, ApiEndpoint.USER_get, null, resolve, reject);
            });
        }
    }
}