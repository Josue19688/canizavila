
import WorkAndFAQSection from '@/components/public/WorkAndFaq';
import {motion} from 'framer-motion'


const fadeInUp={
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0, transition:{duration:0.6}}
}

const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "Explora Nuestros Servicios Legales Recientes",
  sectionDescription:
    "Con más de 25 años de experiencia, nuestro bufete de abogados se especializa en ofrecer soluciones legales eficientes en el ámbito laboral y empresarial. 🔒✨ Explora nuestros servicios diseñados para proteger tu empresa y garantizar el cumplimiento normativo.",
  steps: [
    {
      title: "Asesoría en Reformas Laborales: Prepárate para los Cambios Legales de 2024",
      description:
        "Nuestro equipo de abogados ofrece asesoría integral para adaptar tu empresa a las recientes reformas laborales. Asegúrate de cumplir con las nuevas regulaciones y minimiza riesgos legales. Te ayudamos a tomar las medidas necesarias para proteger tu negocio.",
      imageSrc: "/g3.jpg",
      imageAlt: "Asesoría en Reformas Laborales 2024",
      url: "https://www.example.com/asesoria-reformas-laborales-2024"
    },
    {
      title: "Consultoría en Protección de Datos Personales: Cumplimiento y Seguridad",
      description:
        "Ofrecemos servicios de consultoría para garantizar que tu empresa cumpla con las regulaciones de protección de datos personales. Ayudamos a implementar políticas efectivas y a evitar sanciones por incumplimiento, protegiendo tanto a tus empleados como a tus clientes.",
      imageSrc: "/g4.jpg",
      imageAlt: "Consultoría en Protección de Datos Personales",
      url: "https://www.example.com/consultoria-proteccion-datos-personales"
    },
    {
      title: "Prevención de Riesgos Laborales: Garantiza un Entorno de Trabajo Seguro",
      description:
        "Nuestro bufete ofrece servicios de asesoría en prevención de riesgos laborales, ayudando a tu empresa a cumplir con las normativas de seguridad y salud ocupacional. Fomentamos un ambiente laboral seguro que protege tanto a los empleados como a la empresa.",
      imageSrc: "/g6.jpg",
      imageAlt: "Asesoría en Prevención de Riesgos Laborales",
      url: "https://www.example.com/prevencion-riesgos-laborales"
    },
    {
      title: "Defensa Jurídica en Conflictos Laborales: Resolución de Disputas y Litigios",
      description:
        "Si tu empresa enfrenta disputas laborales, nuestro equipo de abogados especializados en derecho laboral está listo para ofrecer defensa jurídica de alta calidad. Representamos a tu empresa en conflictos con empleados, sindicatos y autoridades laborales.",
      imageSrc: "/g6.jpg",
      imageAlt: "Defensa Jurídica en Conflictos Laborales",
      url: "https://www.example.com/defensa-juridica-conflictos-laborales"
    },
  ],
};



const HOW_IT_WORKS_CONTENT2 = {
  sectionTitle: "Explora Nuestros Articulos Recientes",
  sectionDescription:
    "Accede a artículos diseñados para mantenerte informado sobre las últimas novedades en derecho laboral y empresarial. 📚 Desde consejos legales hasta análisis de tendencias, cada publicación está pensada para brindarte herramientas útiles y actualizadas en el ámbito jurídico. ⚖️✨",
  steps: [
    {
      title: "Nuevas Reformas Laborales: Lo Que Las Empresas Deben Saber para 2024",
      description:
        "Con las recientes reformas en la legislación laboral, es esencial que las empresas estén al tanto de los cambios y sus implicaciones. Descubre cómo estas reformas pueden afectar a tu negocio y qué medidas preventivas puedes tomar.",
      imageSrc: "/g3.jpg",
      imageAlt: "Reformas Laborales 2024",
      url: "https://www.example.com/reformas-laborales-2024"
    },
    {
      title: "Protección de Datos Personales en el Ámbito Empresarial: Retos y Obligaciones",
      description:
        "La protección de datos personales se ha vuelto una prioridad para las empresas. En este artículo, exploramos las regulaciones actuales y cómo garantizar que tu empresa cumpla con los estándares legales.",
      imageSrc:  "/g4.jpg",
      imageAlt: "Protección de Datos en Empresas",
      url: "https://www.example.com/proteccion-datos-empresas"
    },
    {
      title: "Tendencias en Prevención de Riesgos Laborales en el Entorno Corporativo",
      description:
        "La prevención de riesgos laborales no solo protege a los empleados sino también a la propia empresa. Conoce las mejores prácticas para fomentar un ambiente de trabajo seguro y las tendencias que marcarán el 2024.",
      imageSrc:  "/g6.jpg",
      imageAlt: "Prevención de Riesgos Laborales",
      url: "https://www.example.com/prevencion-riesgos-laborales"
    },
    
  ],
};


export const Servicios = () => {

  const containerVariants={
    hidden:{opacity:0},
    visible:{opacity:1, transition:{stranggerChildren:0.2}}
  }
  
  return (
    <>
      <motion.section
  className="pt-28 lg:pt-48 min-h-screen bg-cover bg-center relative"
  style={{ backgroundImage: "url('/cafe.jpg')" }}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* Degradado superpuesto */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

  {/* Contenido de la sección */}
  <div className="relative z-10 text-white px-4 lg:px-8 text-center">
    <h1 className="text-4xl lg:text-6xl font-bold">Explora Nuestros Servicios</h1>
    <p className="mt-4 text-lg lg:text-xl">Encuentra soluciones ideales para tu empresa y alcanza tus objetivos.</p>
  </div>

  {/* Tarjetas */}
  <div className="grid grid-cols-2 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-4 lg:px-52">
  {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
    <div
      key={index}
      className="bg-orange-100 p-3 sm:p-4 rounded-xl shadow-lg flex flex-col justify-between text-center max-w-xs mx-auto"
    >
      <div>
        <h3 className="text-xl text-neutral-800 font-semibold mb-2">{step.title}</h3>
        <p className="text-neutral-600 mb-2">{step.description}</p>
      </div>

      {/* Imagen adaptativa */}
      <div className="flex justify-center mb-2">
        <img
          src={step.imageSrc}
          alt={step.imageAlt}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      
    </div>
  ))}
</div>


</motion.section>

      <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="pt-28 lg:pt-16">
        <motion.div  variants={fadeInUp}
        className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 ">
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-orange-500 via-neutral-300 to-orange-600 bg-clip-text text-transparent">
                    {HOW_IT_WORKS_CONTENT.sectionTitle}
                </h2>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOW_IT_WORKS_CONTENT2.steps.map((step, index) => (
                    <div key={index} className="bg-orange-100 p-6 rounded-xl shadow-lg flex flex-col justify-between text-center">
                        <div>
                            <h3 className="text-xl text-neutral-800 font-semibold mb-4">{step.title}</h3>
                            <p className="text-neutral-600 mb-4">{step.description}</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={step.imageSrc} alt={step.imageAlt} className="rounded-lg" />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex -space-x-2"></div>
                            <a href={step.url} target="_blank" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg">
                                Leer más...
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    </motion.section>
    <WorkAndFAQSection/>
    </>
  
  );
};
