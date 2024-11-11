



import { userAuthStore } from '@/stores/auth/auth.store'
import axios from 'axios'


const backendApi = axios.create({
    baseURL:'https://backend-csirt-production.up.railway.app'
})


//TODO: Interceptors
backendApi.interceptors.request.use(
    (config)=>{
        const token = userAuthStore.getState().token;

        
        if(token){
            config.headers['Authorization'] =`Bearer ${token}`
        }

        return config;
    }
)


export {
    backendApi
}