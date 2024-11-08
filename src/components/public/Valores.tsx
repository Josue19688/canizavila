import { RiCheckboxCircleLine } from "@remixicon/react"

const checklistItems = [
    {
      title: "Asesoría Legal Integral y Personalizada",
      description:
        "Contamos con más de 30 años de experiencia brindando soluciones a medida, desde la prevención hasta la resolución de conflictos laborales, adaptándonos a las necesidades específicas de cada empresa. 🏛️💼",
    },
    {
      title: "Compromiso con la Resolución Eficaz de Conflictos Laborales",
      description:
        "Nuestro enfoque es la defensa de los intereses de tu empresa con profesionalismo, buscando siempre soluciones rápidas y efectivas para evitar complicaciones a largo plazo. ⚖️🤝",
    },
    {
      title: "Capacitación Continua y de Alta Calidad para tu Equipo",
      description:
        "Nos especializamos en la formación profesional continua, capacitando a tu equipo para gestionar el talento humano de manera eficiente y conforme a la legislación, creando un entorno laboral armónico. 🎓💼",
    },
    {
      title: "Experiencia en Seguridad Social y Cumplimiento Legal",
      description:
        "Ofrecemos consultoría en temas de seguridad social, asegurando que tu empresa cumpla con las normativas vigentes, optimizando procesos y protegiendo los derechos de tus colaboradores. 🏥📑",
    },
  ];
  
  
export const Valores = () => {
  return (
    <>
    <section>
        <div className='max-w-7xl mx-auto px-4 mt-20'>
            <div className="mt-20">
                
                <div className="flex flex-wrap justify-center pt-4 ">
                    
                    <div className='pt-2 w-full lg:w-1/2'>
                        <h5 className="text-3xl sm:text-3xl text-neutral-500 lg:text-md text-center tracking-wide">
                        Valores que Respaldan Cada Decisión Legal {""}
                        <span className="bg-gradient-to-r from-orange-500 to-neutral-800 text-transparent bg-clip-text">
                            Integridad, Compromiso, Experiencia y Excelencia Profesional
                        </span>
                        </h5>

                        {
                            checklistItems.map((item, index)=>(
                                <div key={index} className='flex mb-2'>
                                    <div className='text-orange-400 mx-6  h-10 w-10 p-2 justify-center items-center rounded-full'>
                                        <RiCheckboxCircleLine/>
                                    </div>
                                    <div>
                                        <h5 className='mt-1 mb-2 text-xl text-orange-400'>
                                            {item.title}
                                        </h5>
                                        <p className='text-md text-neutral-700'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-2 w-full lg:w-1/2  ">
                        <img src="/labor.png" className="rounded-md"  alt="code" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
