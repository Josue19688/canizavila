import {motion} from 'framer-motion'


const containerVariants={
  hidden:{opacity:0},
  visible:{opacity:1, transition:{stranggerChildren:0.2}}
}

const fadeInUp={
  hidden:{opacity:0, y:20},
  visible:{opacity:1, y:0, transition:{duration:0.6}}
}

const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "🚀 Explora Nuestro Blog Jurídico!",
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
    {
      title: "Cómo Prepararse para Inspecciones de Trabajo: Guía para Empresas",
      description:
        "Las inspecciones laborales pueden ser un desafío para muchas empresas. Este artículo ofrece una guía práctica para asegurar que tu empresa esté siempre preparada y en cumplimiento de la normativa.",
      imageSrc:  "/g6.jpg",
      imageAlt: "Inspecciones de Trabajo",
      url: "https://www.example.com/inspecciones-trabajo"
    },
    {
      title: "Gestión de Conflictos Laborales: Consejos para Empresarios",
      description:
        "Los conflictos laborales pueden impactar negativamente en la moral de los empleados y en la productividad de la empresa. Descubre estrategias para resolver conflictos de manera efectiva.",
      imageSrc: "/g13.jpg",
      imageAlt: "Gestión de Conflictos Laborales",
      url: "https://www.example.com/gestion-conflictos-laborales"
    },
    {
      title: "5 Estrategias Clave para Proteger a tu Empresa de Demandas Laborales",
      description:
        "Evitar demandas laborales es fundamental para cualquier empresa. Aquí te damos cinco estrategias clave para protegerte y garantizar el cumplimiento de las leyes laborales.",
      imageSrc: "/g14.jpg",
      imageAlt: "Protección Legal para Empresas",
      url: "https://www.example.com/proteccion-legal-empresas"
    },
  ],
};




export const Blog = () => {
  return (
    <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="pt-28 lg:pt-36">
        <motion.div  variants={fadeInUp}
        className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 ">
                <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-orange-500 via-neutral-300 to-orange-600 bg-clip-text text-transparent">
                    {HOW_IT_WORKS_CONTENT.sectionTitle}
                </h2>
                <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
                    {HOW_IT_WORKS_CONTENT.sectionDescription}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
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
  )
}
