



import axios from 'axios'


const backendApi = axios.create({
    baseURL:'https://backend-csirt-production.up.railway.app'
})


//TODO: Interceptors



export {
    backendApi
}