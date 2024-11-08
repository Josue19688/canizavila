import { backendApi } from "api/backend-api";
import { AxiosError } from "axios";
import { AuthResponse } from "interfaces/usuario.interface";




export class AuthService{
    static login = async(correo:string, password:string)=>{
        try {
            const respuesta = backendApi.post<AuthResponse>('/auth/login',{correo, password});
            console.log(respuesta)
            return respuesta
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
                throw new Error(error.response?.data)
            }

            console.log(error)
            throw new Error('Unable to login')
        }
    }
}