
import { motion } from "framer-motion";


export const Hero = () => {

    
  return (
    <>
       <section
  className="pt-28 lg:pt-48 min-h-screen bg-cover bg-center relative"
  style={{ backgroundImage: "url('/c.png')" }}
>
  {/* Degradado superpuesto */}
  <div className="absolute inset-0 bg-gradient-to-b from-orange-100/80 to-black/20"></div>

  {/* Contenido de la sección */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      src="/logo.png"
      alt=""
      className="w-48 h-48"
    />

    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-5xl lg:text-8xl my-1 font-semibold tracking-tighter bg-gradient-to-r from-neutral-500 to-orange-500 hover:from-orange-500 hover:to-neutral-500 bg-clip-text text-transparent"
    >
      <span>Abogados Laboristas Empresariales</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-6 text-neutral-500 max-w-4xl"
    >
      Brindamos asesoría legal especializada en derecho laboral, asegurando
      soluciones eficaces y estrategias de prevención de conflictos que protegen
      y optimizan el entorno laboral de su empresa.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-6 space-x-4"
    >
      <a
        href="#"
        className="inline-block bg-gradient-to-r from-orange-400 to-neutral-500 hover:from-orange-500 hover:to-neutral-500 text-white py-2 px-6 rounded-lg font-medium"
      >
        Contactar
      </a>
      <a
        href="#"
        className="inline-block border border-gray-500 text-black hover:border-gray-400 py-2 px-6 rounded-lg font-medium"
      >
        Agendar una cita!
      </a>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-10"
    >
      <p className="text-gray-500 text-center mb-8">
        ⚖️ Con más de 25 años en solución y prevención del conflicto laboral
      </p>
    </motion.div>
  </div>
</section>

        
    </>
  )
}