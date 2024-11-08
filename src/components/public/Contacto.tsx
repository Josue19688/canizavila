import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-600">
          Contacta con Nosotros
        </h2>
        <p className="mt-4 text-lg text-neutral-500">
          Estamos aquí para brindarte la asesoría que necesitas. Llena el formulario y nos pondremos en contacto contigo.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12">
        {/* Formulario de contacto */}
        <div className="w-full sm:w-1/2 px-4 sm:px-6">
          <motion.form
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-lg text-neutral-700" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 mt-2 border-2 border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg text-neutral-700" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 mt-2 border-2 border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-neutral-700" htmlFor="telefono">
                Teléfono (opcional)
              </label>
              <input
                type="number"
                id="telefono"
                className="w-full p-4 mt-2 border-2 border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ingresa tu teléfono"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg text-neutral-700" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-4 mt-2 border-2 border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-neutral-800 text-white text-lg font-semibold rounded-md hover:bg-orange-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>

        {/* Mapa de Ubicación */}
        <div className="w-full sm:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-0 pb-[56%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6482644558296!2d-90.51788512412534!3d14.619102076621953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a373e6dc6423%3A0x43e93cec41e3ca6a!2sCaniz%20Avila%20y%20Asociados!5e0!3m2!1ses!2sco!4v1731084174782!5m2!1ses!2sco"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
