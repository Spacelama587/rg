import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

const ParallaxSection = ({ image, title, description, alignment = 'left' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
      <motion.div 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: imageY
        }}
        className="absolute inset-0 z-0 bg-red-900/30"
      />
      <div className={`container mx-auto px-4 relative z-10 ${
        alignment === 'right' 
          ? 'flex justify-end' 
          : 'flex justify-start'
      }`}>
        <motion.div 
          style={{ 
            opacity: textOpacity,
            y: textY,
            ...(alignment === 'right' ? { transform: 'translateX(50px)' } : { transform: 'translateX(-50px)' })
          }}
          className={`max-w-xl bg-white/75 backdrop-blur-sm p-8 rounded-xl shadow-2xl ${
            alignment === 'right' ? 'text-right' : 'text-left'
          }`}
        >
          <h2 className="text-4xl sm:text-6xl md:text-6xl  font-black font-lexend text-red-900 mb-4">{title}</h2>
          <p className="text-gray-800 text-lg font-montserrat">{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogue Cobb Mountain</title>
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section 
          className="h-screen flex items-center bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl font-lexend font-black text-white mb-6 drop-shadow-lg"
            >
              ROGUE
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl font-lexend text-white mb-8 drop-shadow-md"
            >
              Escape to Cozy Comfort: Your Rustic Retreat.
            </motion.p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Explore Retreat
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
          </div>
        </section>

        <ParallaxSection 
          image="scene_one.webp"
          title="Scenic Location"
          description="Breathtaking mountain landscapes that inspire and rejuvenate, offering a sanctuary of natural beauty and tranquility."
        />

        <ParallaxSection 
          image="scene_two.avif"
          title="Sunrise Views"
          description="Wake up to golden rays painting the mountain peaks, transforming the landscape into a canvas of warm, vibrant colors."
          alignment="right"
        />

        <ParallaxSection 
          image="scene_three.avif"
          title="Cozy Comfort"
          description="Warm interiors perfect for relaxing during mountain showers, blending rustic charm with modern luxury."
        />

<section 
          className="relative py-16 text-center bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("homecta.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-extra-bold text-white mb-8 font-lexend">Your Journey Begins Here</h2>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg"
            >
              Book Your Experience
              <ArrowRight className="ml-3" size={24} />
            </motion.a>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;