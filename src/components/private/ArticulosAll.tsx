




import { useArticuloStore } from "@/stores/articulo/articulo.store";
import { formatearFecha } from "@/utils/formaterDate";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export const ArticulosAll = () => {
  const articulos = useArticuloStore((state) => state.articulos);
  const fetchArticulos = useArticuloStore((state) => state.fetchArticulos);

  useEffect(() => {
    // Llama a la función para obtener los artículos
    fetchArticulos();
  }, [fetchArticulos]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Titulo
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha Creación
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {articulos.map((articulo) => (
              <tr key={articulo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {articulo.titulo}
                </th>
                <td className="px-6 py-4 max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {articulo.descripcion}
                </td>
                <td className="px-6 py-4">
                  {formatearFecha(articulo.createdAt)}
                </td>
                
                <td className="px-6 py-4 text-right">
                  <Link to={`/private/articulo/${articulo.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</Link>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/detalle/${articulo.id}`} className="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </>
  )
}
