import { useArticuloStore } from "@/stores/articulo/articulo.store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagenComponent from "./Imagen";
import { ArticulosAside } from "./ArticulosAside";


export const ArticuloDetails = () => {
    const { id } = useParams();
    const articulo = useArticuloStore((state) => state.articulo);
    const fetchArticulo = useArticuloStore((state) => state.getArticulo);
    const clearArticulo = useArticuloStore((state) => state.clearArticulo);

    useEffect(() => {
      // Si `id` es `undefined`, asignamos un valor predeterminado vacío o mostramos un mensaje de error.
      clearArticulo();
      if (id) {
        fetchArticulo(id);
      }
    }, [fetchArticulo, id,clearArticulo]);

  return (
   <>
  {articulo ? (
    <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                            <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos"/>
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                                <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                <p className="text-base text-gray-500 dark:text-gray-400">
                                    Feb. 8, 2022</p>
                            </div>
                        </div>
                    </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                        {articulo.titulo}
                        </h1>
                </header>
                <p className="lead">
                    {articulo.descripcion}
                </p>
                <figure>
                    <ImagenComponent url={articulo.imagen} />
                    <figcaption>{articulo.titulo}</figcaption>
                </figure>
                {articulo.contenido.split('\n').map((linea, index) => (
                    <div key={index}  dangerouslySetInnerHTML={{ __html: linea }}>
                    
                 
                    </div>
                ))}
            </article>
        </div>
        </main> 
        <ArticulosAside/>
        
    </div>
        
        
      ) : (
        <p>Cargando articulo.</p>
      )}

      
       



      
   </>
  )
}


