import { useArticuloStore } from '@/stores/articulo/articulo.store';
import { useEffect } from 'react';


interface ImagenComponentProps {
    url: string;
}

const ImagenComponent: React.FC<ImagenComponentProps> = ({ url }) => {
    const { status, imagenUrl, fetchImagen } = useArticuloStore();

    const cleanUrl = url.replace(/^{"|"}$/g, '');

    useEffect(() => {
        fetchImagen(cleanUrl);
    }, [fetchImagen, cleanUrl]);

    return (
        <div>
            {status === 'pending' && <p>Cargando imagen...</p>}
            {status === 'completado' && imagenUrl && (
                <img src={imagenUrl} alt="Imagen del artículo" width="300" />
            )}
            {status === 'fallido' && <p>Error al cargar la imagen.</p>}
        </div>
    );
};

export default ImagenComponent;
