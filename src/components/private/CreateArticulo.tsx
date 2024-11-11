import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useArticuloStore } from '@/stores/articulo/articulo.store';
import { useNavigate } from 'react-router-dom';

type FormErrors = {
  titulo?: string;
  descripcion?: string;
  contenido?: string;
  files?: string;
};

export const CreateArticulo = () => {
  const navigate = useNavigate();
  const createArticulo = useArticuloStore((state) => state.createArticulo);
  
  const [titulo, setTitulo] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [contenido, setContenido] = useState<string>('');
  const [files, setFiles] = useState<File | null>(null);
  const [errores, setErrores] = useState<FormErrors>({});

  // Extiende el tipo de referencia para permitir propiedades personalizadas
  const quillRef = useRef<HTMLDivElement & { __quill?: Quill }>(null);

  useEffect(() => {
    if (quillRef.current && !quillRef.current.__quill) {
      // Instanciar Quill solo si no está ya inicializado
      const quill = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': [] }],
            ['image'],
            ['blockquote'],
            ['code-block']
          ]
        }
      });

      // Almacenar la instancia de Quill en el contenedor para evitar re-crearla
      quillRef.current.__quill = quill;

      // Registrar el cambio de contenido en el estado
      quill.on('text-change', () => {
        setContenido(quill.root.innerHTML);
      });
    }
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'titulo') setTitulo(value);
    if (name === 'descripcion') setDescripcion(value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(e.target.files[0]);
    }
  };

  const validarFormulario = (): boolean => {
    const newErrores: FormErrors = {};
    if (!titulo) newErrores.titulo = 'El título es obligatorio';
    if (!descripcion) newErrores.descripcion = 'La descripcion es obligatorio';
    if (!contenido) newErrores.contenido = 'El contenido es obligatorio';
    if (files && !['image/jpeg', 'image/png', 'image/gif'].includes(files.type)) {
      newErrores.files = 'El archivo debe ser una imagen (JPEG, PNG o GIF)';
    }
    setErrores(newErrores);
    return Object.keys(newErrores).length === 0;
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
        // Crear una instancia de FormData y agregar los datos
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('contenido', contenido);
        formData.append('modelo','articulo');
        
        if (files) {
            formData.append('files', files); // Solo agregamos si existe una imagen seleccionada
        }

        try {
           // Llamamos a la función de creación de artículo desde la tienda
           await createArticulo(formData);
           navigate('/private/articulosAll')
        } catch (error) {
          throw new Error('Error al crear el articulo!')
          console.log(`Error al crear el registro : ${error}`)
        }
       

      alert('Formulario enviado correctamente');
      console.log({ titulo, descripcion, contenido, files });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="titulo" className="block text-sm font-semibold text-gray-700">Título</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={titulo}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errores.titulo && <p className="text-red-500 text-xs mt-1">{errores.titulo}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-700">Descripción</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errores.descripcion && <p className="text-red-500 text-xs mt-1">{errores.descripcion}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="contenido" className="block text-sm font-semibold text-gray-700">Contenido</label>
        <div className="mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          {/* Contenedor para Quill */}
          <div ref={quillRef} className="h-60"></div>
        </div>
        {errores.contenido && <p className="text-red-500 text-xs mt-1">{errores.contenido}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="imagen" className="block text-sm font-semibold text-gray-700">Imagen</label>
        <input
          type="file"
          id="imagen"
          name="files"
          accept="image/jpeg, image/png, image/gif"
          onChange={handleImageChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errores.files && <p className="text-red-500 text-xs mt-1">{errores.files}</p>}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
