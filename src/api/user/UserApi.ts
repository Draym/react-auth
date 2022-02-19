import {UserDTO} from "./UserDTO";

export interface UserApi {
    get: () => Promise<UserDTO>,
}
