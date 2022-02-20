import {UserDTO} from "../user/UserDTO";
import {LoginRequest} from "./LoginRequest";
import {SignupRequest} from "./SignupRequest";
import {TokenDTO} from "./TokenDTO";
import {EthLoginRequest} from "./EthLoginRequest";
import {GetNonceRequest} from "./GetNonceRequest";
import {NonceDTO} from "./NonceDTO";
import {SignupEthRequest} from "./SignupEthRequest";

export interface AuthApi {
    login: (request: LoginRequest) => Promise<TokenDTO>,
    quickLogin: {
        ethLogin: (request: EthLoginRequest) => Promise<TokenDTO>,
        ethGetNonce: (request: GetNonceRequest) => Promise<NonceDTO>,
    }
    signup: (request: SignupRequest) => Promise<UserDTO>,
    signupWithEth: (request: SignupEthRequest) => Promise<UserDTO>,
}
