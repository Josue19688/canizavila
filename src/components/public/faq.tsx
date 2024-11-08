import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const FAQ = [
    {
      question: "¿Cómo puedo saber si mi empresa necesita asesoría legal?",
      answer:
        "Si tienes dudas sobre el cumplimiento de normativas laborales, reformas recientes, o estás enfrentando un conflicto con empleados, es recomendable que consultes con un abogado especializado.",
    },
    {
      question: "¿Qué costos implica contratar sus servicios?",
      answer:
        "Los costos varían dependiendo del servicio solicitado. Ofrecemos opciones de asesoría puntual y servicios continuos, con planes adaptados a las necesidades de tu empresa.",
    },
    {
      question: "¿Cómo puedo contactar con ustedes?",
      answer:
        "Puedes contactarnos directamente desde nuestro formulario en línea, por teléfono, o visitando nuestras oficinas en la dirección proporcionada en nuestra página de contacto.",
    },
  ];

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna la visibilidad del contenido
  };

  return (
 

         
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-center text-neutral-800">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {FAQ.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg">
                  <motion.div
                    onClick={() => toggleAccordion(index)}
                    className="cursor-pointer p-6 bg-orange-400 rounded-md hover:bg-orange-500 transition-all duration-200 ease-in-out"
                  >
                    <h3 className="text-xl font-semibold text-white rounded-lg p-2">
                      {item.question}
                    </h3>
                  </motion.div>

                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 text-neutral-600 bg-neutral-100 rounded-b-xl"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
       
  );
};

export default FAQSection;
