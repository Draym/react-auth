import {UserDTO} from "../user/UserDTO";
import {LoginRequest} from "./LoginRequest";
import {SignupRequest} from "./SignupRequest";
import {TokenDTO} from "./TokenDTO";

export interface AuthApi {
    login: (request: LoginRequest) => Promise<TokenDTO>,
    signup: (request: SignupRequest) => Promise<UserDTO>,
}
