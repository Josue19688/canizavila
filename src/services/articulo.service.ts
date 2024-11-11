import { backendApi } from "@/api/backend-api";
import { AxiosError } from "axios";


export interface ArticuloResponse {
    ok:        boolean;
    articulos: Articulo[];
}

export interface Articulo {
    id:          string;
    titulo:      string;
    descripcion: string;
    contenido:   string;
    imagen:      string;
    createdAt:   Date;
    updatedAt:   Date;
    usuario:     Usuario;
}

export interface Usuario {
    id:                 string;
    correo:             string;
    nombre:             string;
    activo:             boolean;
    roles:              string[];
    token:              null;
    resetPasswordToken: string;
    createdAt:          Date;
    updatedAt:          Date;
    imagenes:           string[];
}


export class ArticuloService{
    static createArticulo = async(data:FormData):Promise<ArticuloResponse>=>{
        try {
            const respuesta = await backendApi.post(
                '/files/uploads/private',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log(respuesta.data)
            return respuesta.data
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
                throw new Error(error.response?.data)
            }

            console.log(error)
            throw new Error('Error en la peticion')
        }
    }

    static getArticulos = async():Promise<ArticuloResponse>=>{
        try {
            const {data} = await backendApi.get('/articulo');
            return data;
        } catch (error) {
            console.log(error)
            throw new Error('Error en la peticion')
        }
    }

    static getImagen = async (imagenUrl: string): Promise<Blob> => {
        try {
            const { data } = await backendApi.get(imagenUrl, { responseType: 'blob' });
            return data;
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            throw new Error('Error en la petición de imagen');
        }
    };

    static getArticulo = async(id:string):Promise<Articulo> =>{
        try {
            const {data}= await backendApi.get(`/articulo/${id}`);
            return data;
        } catch (error) {
            console.error('Error al obtener el articulo:', error);
            throw new Error('Error no se realizo la peticion');
        }
    }

   
}