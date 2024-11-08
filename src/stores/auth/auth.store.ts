import { AuthStatus } from "interfaces/auth-status.interface";
import { User } from "interfaces/usuario.interface";
import { StateCreator } from "zustand";


export interface AuthState{
    status:AuthStatus;
    token?:string;
    usuario?:User
}


export const storeApi: StateCreator<AuthState> = (set)=>({
    status:'unautorized',
    token:undefined,
    usuario: undefined
})