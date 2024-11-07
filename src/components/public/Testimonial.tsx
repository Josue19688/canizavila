


import { motion} from 'framer-motion'
import user from "/c.png";


const TESTIMONIALS_CONTENT = {
  sectionTitle: "Testimonios de Nuestros Clientes",
  sectionDescription:
    "Conoce las experiencias de quienes han confiado en nuestro bufete. A través de su testimonio, podrás ver cómo hemos ayudado a resolver sus conflictos laborales, proteger sus derechos y asesorarlos de manera eficiente.",
  reviews: [
    {
      name: "María Gómez",
      title: "Directora de Recursos Humanos",
      review:
        "Gracias al equipo de Caniz, Ávila & Asociados, hemos resuelto varias disputas laborales que afectaban el ambiente en nuestra empresa. Su atención y profesionalismo nos han dado la tranquilidad de contar con un respaldo legal de confianza.",
      image: user, // Aquí debes agregar la imagen correspondiente.
    },
    {
      name: "Carlos Méndez",
      title: "Gerente General",
      review:
        "Recomiendo ampliamente a este bufete. Su equipo no solo tiene un conocimiento profundo de la ley, sino que también se asegura de que sus clientes reciban un trato personalizado y soluciones a medida para cada situación.",
      image: user, // Aquí debes agregar la imagen correspondiente.
    },
    {
      name: "Laura Sánchez",
      title: "Abogada Corporativa",
      review:
        "Caniz, Ávila & Asociados nos brindó una asesoría integral en la negociación de contratos laborales. Gracias a su enfoque estratégico, logramos una solución beneficiosa para ambas partes.",
      image: user, // Aquí debes agregar la imagen correspondiente.
    },
    {
      name: "Ricardo Herrera",
      title: "Empresario",
      review:
        "El bufete nos ayudó a resolver una complicada disputa con un empleado. Desde el principio, mostraron una gran comprensión de las leyes laborales y actuaron con rapidez para proteger nuestros intereses.",
      image: user, // Aquí debes agregar la imagen correspondiente.
    },
    {
      name: "Verónica López",
      title: "Consultora Legal",
      review:
        "La experiencia con Caniz, Ávila & Asociados fue excepcional. Su capacidad para interpretar las leyes y guiarme a través de un proceso legal complejo fue invaluable para mi negocio.",
      image: user, // Aquí debes agregar la imagen correspondiente.
    },
    {
      name: "Eduardo Rodríguez",
      title: "Director de una ONG",
      review:
        "Contamos con su apoyo legal para asegurar nuestros derechos en el ámbito laboral. Su enfoque proactivo y su atención detallada nos dieron la seguridad de que estábamos en las mejores manos.",
      image: user, // Aquí debes agregar la imagen correspondiente.
    },
  ],
};



export const Testinomial = () => {

    const testimonialVariants={
        hidden:{opacity:0, y:50},
        visible:(i:number)=>({
            opacity:1, 
            y:0,
            transition:{
                delay: i * 0.2,
                duration:0.6,
                ease:"easeOut",
            }
        })
      }
    
     
      
  return (
    <section>
        <div className='max-w-7xl mx-auto px-4 mt-20'>
            <motion.div
            className='text-center mb-12 border-t border-neutral-800 '
            initial={{opacity:0, y:-20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, ease:"easeOut"}}
            >
                <h2 className='text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-orange-500 via-neutral-300 to-orange-600 bg-clip-text text-transparent'>
                    {TESTIMONIALS_CONTENT.sectionTitle}
                </h2>
                <p className='mt-4 text-neutral-600'>
                    {TESTIMONIALS_CONTENT.sectionDescription}
                </p>
            </motion.div>
            <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible:{
              transition:{
                staggerChildren:0.2,
              }
            }
          }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
          >
            {
              TESTIMONIALS_CONTENT.reviews.map((review, index)=>(
                <motion.div
                custom={index}
                key={index}
                variants={testimonialVariants}
                className='mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-orange-200/50 border border-orange-500 p-10'
                >
                    <p className='mb-4 text-neutral-600'>
                        {review.review}
                    </p>
                    <div className='flex items-center mt-4'>
                        <img src={review.image} alt="imgen" className='w-12 h-12 rounded-full mr-4' />
                        <div>
                            <p className='text-sm font-bold text-neutral-400'>
                                {review.name}
                            </p>
                            <p className='text-sm text-gray-400'>
                                {review.title}
                            </p>
                        </div>
                    </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
    </section>
  )
}
