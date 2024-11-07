import { RiCheckboxCircleLine } from "@remixicon/react"

const checklistItems = [
    {
      title: "Asesoría Legal Integral en Derecho Laboral",
      description:
        "Ofrecemos soluciones completas en Derecho Laboral para empresas, abarcando desde la prevención hasta la resolución de conflictos. ⚖️💼",
    },
    {
      title: "Defensa y Resolución de Conflictos Laborales",
      description:
        "Nuestro equipo está preparado para defender los intereses de tu empresa y resolver cualquier disputa laboral con eficiencia y experiencia. ⚖️🛡️",
    },
    {
      title: "Capacitación Especializada para tu Empresa",
      description:
        "Capacitamos a tu equipo en la correcta gestión del talento humano, asegurando un ambiente laboral saludable y conforme a la ley. 🎓💼",
    },
    {
      title: "Consultoría en Seguridad Social",
      description:
        "Brindamos asesoría experta en seguridad social, garantizando que tu empresa cumpla con todas las normativas y optimice sus procesos. 🏥📑",
    },
  ];
  
export const Destacados = () => {
  return (
    <>
    <section>
        <div className='max-w-7xl mx-auto px-4 mt-20'>
            <div className="mt-20">
                
                <div className="flex flex-wrap justify-center pt-4 ">
                    <div className="p-2 w-full lg:w-1/2  ">
                        <img src="/cafe.jpg" className="rounded-md"  alt="code" />
                    </div>
                    <div className='pt-2 w-full lg:w-1/2'>
                    <h5 className="text-3xl sm:text-3xl text-neutral-500 lg:text-md text-center  tracking-wide">
                Agiliza la Gestión de Conflictos Laborales y Asesoría Jurídica {""}
                    <span className="bg-gradient-to-r from-orange-500 to-neutral-800 text-transparent bg-clip-text">
                    y Asesoría Jurídica
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
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
