import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Wifi, Tv, Coffee, UtensilsCrossed } from 'lucide-react';

const cabins = [
  {
    name: "Pine Haven",
    description: "A cozy 2-bedroom cabin perfect for small families",
    image: "/cabin1.avif",
    features: ["2 Bedrooms", "1 Bathroom", "Mountain View", "Full Kitchen"],
    maxGuests: 4,
    price: "$200/night"
  },
  {
    name: "Cedar Lodge",
    description: "Spacious 3-bedroom retreat with panoramic views",
    image: "/cabin2.avif",
    features: ["3 Bedrooms", "2 Bathrooms", "Lake View", "Hot Tub"],
    maxGuests: 6,
    price: "$300/night"
  },
  {
    name: "Birch Cottage",
    description: "Intimate 1-bedroom escape for couples",
    image: "/cabin3.avif",
    features: ["1 Bedroom", "1 Bathroom", "Private Deck", "Fireplace"],
    maxGuests: 2,
    price: "$150/night"
  }
];

const Cabins = () => {
  return (
    <>
      <Helmet>
        <title>Our Cabins - Cozy Retreat</title>
        <meta name="description" content="Discover our selection of beautiful mountain cabins, each offering unique amenities and stunning views." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-8xl font-bold mb-6 text-center font-lexend">Our Cabins</h1>
            <p className="text-xl text-center max-w-2xl mx-auto font-montserrat">
              Choose from our selection of carefully maintained cabins, each offering a unique mountain experience.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-12">
            {cabins.map((cabin, index) => (
              <motion.div
                key={cabin.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="md:grid md:grid-cols-2">
                  <div className="h-64 md:h-full">
                    <img
                      src={cabin.image}
                      alt={cabin.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-red-600 mb-4 font-montserrat">{cabin.name}</h2>
                    <p className="text-gray-600 mb-6 font-montserrat">{cabin.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-2 font-montserrat">Features:</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {cabin.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600">
                            <Coffee className="w-4 h-4 mr-2 text-red-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="block text-gray-500 font-montserrat">Max Guests</span>
                        <span className="text-xl font-semibold text-red-600">{cabin.maxGuests} People</span>
                      </div>
                      <div>
                        <span className="block text-gray-500">Starting at</span>
                        <span className="text-xl font-semibold text-red-600">{cabin.price}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Wifi className="text-red-600" />
                        <Tv className="text-red-600" />
                        <UtensilsCrossed className="text-red-600" />
                      </div>
                      <a
                        href="https://airbnb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        Book Now
                        <ArrowRight className="ml-2" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-6 font-montserrat">Common Amenities in All Cabins</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: <Wifi size={24} />, name: "Free Wi-Fi" },
                { icon: <Tv size={24} />, name: "Smart TV" },
                { icon: <Coffee size={24} />, name: "Coffee Maker" },
                { icon: <UtensilsCrossed size={24} />, name: "Full Kitchen" },
              ].map((amenity) => (
                <div key={amenity.name} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-2">
                    {amenity.icon}
                  </div>
                  <span className="text-gray-700 font-montserrat">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cabins;