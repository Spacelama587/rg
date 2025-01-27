import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const images = [
  { url: "/cabin1.avif", caption: "Exterior View" },
  { url: "/lvroom.avif", caption: "Cozy Living Room" },
  {
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Master Bedroom",
  },
  { url: "view.avif", caption: "Mountain View" },
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Sunrise View",
  },
  {
    url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Kitchen Area",
  },
  {
    url: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Bathroom",
  },
  {
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    caption: "Deck View",
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null });

  const openLightbox = (image) => {
    setLightbox({ isOpen: true, image });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, image: null });
  };

  return (
    <>
      <Helmet>
        <title>Photo Gallery - Cozy Retreat</title>
        <meta
          name="description"
          content="Browse through our photo gallery to see the beautiful cabins and stunning views at Cozy Retreat."
        />
      </Helmet>

      <div className="pt-20">
        {/* Header Section */}
        <div className="bg-amber-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Photo Gallery
            </h1>
            <p className="text-xl text-center max-w-2xl mx-auto">
              Take a visual journey through our beautiful property and
              surroundings.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-lg font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightbox.isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              />
              <motion.div
                className="relative max-w-4xl mx-auto p-4"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <img
                  src={lightbox.image.url}
                  alt={lightbox.image.caption}
                  className="rounded-lg"
                />
                <p className="text-white text-center mt-4">
                  {lightbox.image.caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
