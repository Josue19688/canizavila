import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQSection from './faq';

const WorkAndFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const PROCESS_STEPS = [
    {
      step: "1. Consulta Inicial",
      description:
        "Comenzamos con una consulta inicial donde analizamos las necesidades específicas de tu empresa y los problemas legales que enfrentas.",
    },
    {
      step: "2. Estrategia Personalizada",
      description:
        "Desarrollamos una estrategia legal personalizada para abordar los problemas de manera eficiente y efectiva.",
    },
    {
      step: "3. Ejecución y Seguimiento",
      description:
        "Ejecutamos la estrategia diseñada, asegurándonos de que tu empresa cumpla con todas las regulaciones legales. Realizamos un seguimiento constante.",
    },
  ];

 
  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna la visibilidad del contenido
  };

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proceso de Trabajo (Acordeón) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-center text-neutral-800">
              Nuestro Proceso de Trabajo
            </h2>
            <div className="space-y-6">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg">
                  <motion.div
                    onClick={() => toggleAccordion(index)}
                    className="cursor-pointer p-6 bg-orange-400 rounded-md hover:bg-orange-500 transition-all duration-200 ease-in-out"
                  >
                    <h3 className="text-xl font-semibold text-white rounded-lg p-2">
                      {step.step}
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
                      <p>{step.description}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Preguntas Frecuentes (FAQ) (Acordeón) */}
          <FAQSection/>
        </div>
      </div>
    </section>
  );
};

export default WorkAndFAQSection;
