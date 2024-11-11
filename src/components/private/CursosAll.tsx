import { useArticuloStore } from "@/stores/articulo/articulo.store";
import { formatearFecha } from "@/utils/formaterDate";
import { useEffect } from "react";


export const CursosAll = () => {
  const articulos = useArticuloStore((state) => state.articulos);
  const fetchArticulos = useArticuloStore((state) => state.fetchArticulos);

    useEffect(() => {
        // Llama a la función para obtener los artículos
        fetchArticulos();
    }, [fetchArticulos]);

  return (
    <>
    <div>
    <h1 className="text-2xl font-bold mb-4">Artículos Disponibles</h1>
    <table className="min-w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b">Título</th>
                <th className="px-4 py-2 border-b">Descripción</th>
                <th className="px-4 py-2 border-b">Fecha de Creación</th>
            </tr>
        </thead>
        <tbody>
            {articulos.map((articulo) => (
                <tr key={articulo.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{articulo.titulo}</td>
                    <td className="px-4 py-2 border-b truncate max-w-xs overflow-hidden text-ellipsis">{articulo.descripcion}</td>
                    <td className="px-4 py-2 border-b">{formatearFecha(articulo.createdAt)}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    </>
  )
}
