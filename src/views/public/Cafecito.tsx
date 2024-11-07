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
  sectionTitle: "Cafecito Laboral!",
  sectionDescription:
    "Accede a nuestras capacitaciones especializadas diseñadas para mejorar tu conocimiento y habilidades en derecho laboral y empresarial. 📚 Desde gestión de riesgos laborales hasta protección de datos y más, cada capacitación está pensada para brindarte herramientas útiles y actualizadas. ⚖️✨",
    steps: [
        {
          title: "Capacitación en Nuevas Reformas Laborales: Lo Que Las Empresas Deben Saber para 2024",
          description:
            "Esta capacitación está enfocada en las recientes reformas en la legislación laboral. Aprende cómo estos cambios pueden afectar a tu empresa y qué medidas preventivas debes tomar para estar al día con la normativa.",
          imageSrc: "/g3.jpg",
          imageAlt: "Reformas Laborales 2024",
          url: "https://www.example.com/reformas-laborales-2024"
        },
        {
          title: "Capacitación en Protección de Datos Personales en el Ámbito Empresarial",
          description:
            "En esta capacitación exploramos la importancia de la protección de datos personales para las empresas, las regulaciones actuales y las mejores prácticas para garantizar el cumplimiento legal en este ámbito.",
          imageSrc:  "/g4.jpg",
          imageAlt: "Protección de Datos en Empresas",
          url: "https://www.example.com/proteccion-datos-empresas"
        },
        {
          title: "Capacitación en Prevención de Riesgos Laborales en el Entorno Corporativo",
          description:
            "Esta capacitación aborda la importancia de prevenir riesgos laborales para proteger tanto a los empleados como a la empresa. Aprende las mejores prácticas y las tendencias clave para mantener un ambiente de trabajo seguro.",
          imageSrc:  "/g6.jpg",
          imageAlt: "Prevención de Riesgos Laborales",
          url: "https://www.example.com/prevencion-riesgos-laborales"
        },
        {
          title: "Capacitación en Preparación para Inspecciones de Trabajo",
          description:
            "Aprende a prepararte para las inspecciones laborales. Esta capacitación te proporcionará una guía práctica para asegurar que tu empresa esté siempre lista y cumpla con la normativa vigente.",
          imageSrc:  "/g6.jpg",
          imageAlt: "Inspecciones de Trabajo",
          url: "https://www.example.com/inspecciones-trabajo"
        },
        {
          title: "Capacitación en Gestión de Conflictos Laborales: Consejos para Empresarios",
          description:
            "Los conflictos laborales pueden afectar la productividad. En esta capacitación, descubrirás estrategias efectivas para gestionar y resolver conflictos laborales de manera eficaz, promoviendo un ambiente de trabajo saludable.",
          imageSrc: "/g13.jpg",
          imageAlt: "Gestión de Conflictos Laborales",
          url: "https://www.example.com/gestion-conflictos-laborales"
        },
        {
          title: "Capacitación en Estrategias para Proteger a tu Empresa de Demandas Laborales",
          description:
            "Evita demandas laborales con esta capacitación. Te proporcionaremos estrategias clave para proteger a tu empresa y garantizar el cumplimiento de las leyes laborales, minimizando riesgos legales.",
          imageSrc: "/g14.jpg",
          imageAlt: "Protección Legal para Empresas",
          url: "https://www.example.com/proteccion-legal-empresas"
        },
      ],
};





export const Cafecito = () => {
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
