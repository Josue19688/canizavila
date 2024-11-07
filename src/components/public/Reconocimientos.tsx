import { motion } from "framer-motion";


const KEY_FEATURES_CONTENT = {
    sectionTitle: "Reconocidos por Chambers and Partners en Litigio Laboral y Consultoría. ",
    sectionDescription:
      "Nuestro Socio Director el Dr. Leonel Caniz, a sido reconocido en varias ocasiones por Chambers and Partners, destacando la excelencia y prestigio de nuestro bufete, asi como el liderazgo en el ámbito legal..",
      features : [
        {
          id: 1,
          icon: <img src="/r.png" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" />,
          title: "Experiencia Sobresaliente",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          icon: <img src="/r2.png" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" />,
          title: "Asesoría Confiable",
          description: "Proin ac lacus at metus ultrices ullamcorper.",
        },
        {
          id: 3,
          icon: <img src="/r3.png" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" />,
          title: "Atención Personalizada",
          description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
        },
        {
          id: 4,
          icon: <img src="/r.png" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" />,
          title: "Resultados Garantizados",
          description: "Curabitur dapibus nisi ac erat luctus, ut sodales magna.",
        },
      ]
      
  };

export const Reconocimientos = () => {

    const containerVariants={
        hidden:{opacity:0},
        visible:{
            opacity:1, 
            transition:{
                stranggerChildren:0.2,
                when:"beforeChildren",
            }
        }
      }
    
      // const featureVariants ={
      //   hidden:{opacity:0},
      //   visible:{
      //       opacity:1, 
      //       y:0,
      //       transition:{
      //           duration:0.5,
      //       }
      //   }
      // }
  return (
    <>
    <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pt-10 pb-10">
                <div className="text-center mb-5">
                    <h2 className="text-3xl lg:text-5xl mt-10 tracking-tighter bg-gradient-to-t from-orange-300 via-orange-300 to-neutral-600 bg-clip-text text-transparent">
                        {KEY_FEATURES_CONTENT.sectionTitle}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">{KEY_FEATURES_CONTENT.sectionDescription}</p>
                </div>
                <motion.div 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-1">
    {KEY_FEATURES_CONTENT.features.map((feature) => (
        <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
            key={feature.id} 
            className="flex flex-col items-center text-center p-4">
            <div className="flex justify-center items-center  mb-4">
                {feature.icon}
            </div>
        </motion.div>
    ))}
</motion.div>

            </div>
        </section>
    </>
  )
}
