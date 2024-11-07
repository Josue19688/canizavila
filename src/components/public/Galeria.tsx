import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/g.jpg",
  "/g10.png",
  "/g1.jpg",
  "/g2.jpg",
  "/g3.jpg",
  "/g11.png",
  "/g14.jpg",
  "/g13.jpg",
  "/g12.jpg",
  "/g4.jpg",
  "/g5.jpg",
  "/g6.jpg",
  "/g8.jpeg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    hover: { scale: 1.02, filter: "brightness(1.05)", transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section className="bg-white py-10 pt-28  lg:pt-48">
      <div className="max-w-6xl mx-auto px-4">
        
        <h3 className="text-3xl text-center mb-8 text-orange-500">Momentos que representan nuestra esencia y compromiso.</h3>

        {/* Masonry grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`relative rounded-lg overflow-hidden cursor-pointer shadow-lg ${
                index % 4 === 0 ? "row-span-2" : ""
              }`}
              variants={galleryItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setSelectedImage(src)}
            >
              <motion.img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
                layoutId={`image-${index}`}  // unique layoutId for each image
              />
            </motion.div>
          ))}
        </div>

        {/* Modal for selected image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Selected Image"
                className="max-w-[80vw] max-h-[80vh] rounded-lg object-cover shadow-lg"
                layoutId={`image-${images.indexOf(selectedImage)}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
