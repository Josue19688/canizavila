// src/stores/articulo.store.ts
import { create, StateCreator } from 'zustand';

import { ArticuloStatus } from '@/interfaces/auth-status.interface';
import { ArticuloService } from '@/services/articulo.service';

export interface Articulo {
    id: string;
    titulo: string;
    descripcion: string;
    contenido: string;
    imagen: string;
    createdAt:   Date;
    updatedAt:   Date;
    
}

interface ArticuloState {
    status:ArticuloStatus;
    articulos: Articulo[];
    articulo:Articulo | null;
    imagenUrl:string | null,
    fetchArticulos: () => Promise<void>;
    createArticulo: (data: FormData) => Promise<void>;
    fetchImagen: (imagenUrl: string) => Promise<void>;
    getArticulo:(id:string)=>Promise<void>;
    clearArticulo:()=>Promise<void>;
}

const storeArticulo: StateCreator<ArticuloState> = (set)=>({
    status:'pending',
    articulos: [],
    articulo: null,
    imagenUrl:null,
    fetchArticulos: async () => {
        try {
            const {ok, articulos} = await ArticuloService.getArticulos();
            if (ok) {
                set({ status:'completado', articulos });
            }
        } catch (error) {
            console.error('Error al obtener los artículos:', error);
        }
    },
    createArticulo: async (data: FormData) => {
        try {
            const {ok,articulos}=await ArticuloService.createArticulo(data);
            if (ok) {
                set({
                    status:'completado',
                    articulos,
                });
            }
        } catch (error) {
            set({
                status:'fallido',
                articulos:undefined,
            });
            console.error('Error al crear el artículo:', error);
        }
    },
    fetchImagen:async(url:string)=>{
        try {
            const imagenBlob = await ArticuloService.getImagen(url);
            const objectUrl = URL.createObjectURL(imagenBlob);
            set({ status: 'completado', imagenUrl: objectUrl });
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
            set({ status: 'fallido', imagenUrl: null });
        }
    },
    getArticulo: async(id:string)=>{
        try {
            const articulo = await ArticuloService.getArticulo(id);
            set({status:'completado',articulo})
        } catch (error) {
            console.error('Error al obtener el articulo:', error);
            set({ status: 'fallido', articulo: null });
        }
    },
    clearArticulo:async()=>{
        set({ status: 'pending', articulo: null });
    }

})

export const useArticuloStore = create<ArticuloState>()(storeArticulo);
