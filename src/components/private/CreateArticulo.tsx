import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

type FormErrors = {
  titulo?: string;
  subtitulo?: string;
  contenido?: string;
  imagen?: string;
};

export const CreateArticulo = () => {
  const [titulo, setTitulo] = useState<string>('');
  const [subtitulo, setSubtitulo] = useState<string>('');
  const [contenido, setContenido] = useState<string>('');
  const [imagen, setImagen] = useState<File | null>(null);
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
    if (name === 'subtitulo') setSubtitulo(value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagen(e.target.files[0]);
    }
  };

  const validarFormulario = (): boolean => {
    const newErrores: FormErrors = {};
    if (!titulo) newErrores.titulo = 'El título es obligatorio';
    if (!subtitulo) newErrores.subtitulo = 'El subtítulo es obligatorio';
    if (!contenido) newErrores.contenido = 'El contenido es obligatorio';
    if (imagen && !['image/jpeg', 'image/png', 'image/gif'].includes(imagen.type)) {
      newErrores.imagen = 'El archivo debe ser una imagen (JPEG, PNG o GIF)';
    }
    setErrores(newErrores);
    return Object.keys(newErrores).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert('Formulario enviado correctamente');
      console.log({ titulo, subtitulo, contenido, imagen });
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
        <label htmlFor="subtitulo" className="block text-sm font-semibold text-gray-700">Subtítulo</label>
        <input
          type="text"
          id="subtitulo"
          name="subtitulo"
          value={subtitulo}
          onChange={handleChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errores.subtitulo && <p className="text-red-500 text-xs mt-1">{errores.subtitulo}</p>}
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
          name="imagen"
          accept="image/jpeg, image/png, image/gif"
          onChange={handleImageChange}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errores.imagen && <p className="text-red-500 text-xs mt-1">{errores.imagen}</p>}
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
