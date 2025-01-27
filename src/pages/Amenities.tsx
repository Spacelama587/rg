import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Wifi, Tv, Coffee, UtensilsCrossed, Car, Hotel as Hot, Trees, Mountain, Waves, Dumbbell, Gamepad as GamepadTwo, Sun } from 'lucide-react';

const amenities = [
  {
    category: "Indoor Comfort",
    items: [
      { icon: <Wifi />, name: "High-Speed WiFi", description: "Stay connected with complimentary high-speed internet" },
      { icon: <Tv />, name: "Smart TV", description: "Enjoy your favorite shows on our smart TVs with streaming services" },
      { icon: <Coffee />, name: "Coffee Station", description: "Start your day with freshly brewed coffee" },
      { icon: <UtensilsCrossed />, name: "Full Kitchen", description: "Fully equipped kitchen with modern appliances" }
    ]
  },
  {
    category: "Outdoor Living",
    items: [
      { icon: <Hot />, name: "Hot Tub", description: "Relax under the stars in our private hot tubs" },
      { icon: <Trees />, name: "Private Deck", description: "Spacious deck with outdoor seating and mountain views" },
      { icon: <Car />, name: "Parking", description: "Convenient private parking for all guests" },
      { icon: <Mountain />, name: "Hiking Trails", description: "Direct access to scenic hiking trails" }
    ]
  },
  {
    category: "Recreation",
    items: [
      { icon: <Waves />, name: "Lake Access", description: "Easy access to nearby lake activities" },
      { icon: <Dumbbell />, name: "Fitness Area", description: "Stay active with our basic fitness equipment" },
      { icon: <GamepadTwo />, name: "Game Room", description: "Family fun with board games and entertainment" },
      { icon: <Sun />, name: "Sun Deck", description: "Perfect spot for sunbathing and outdoor relaxation" }
    ]
  }
];

const Amenities = () => {
  return (
    <>
      <Helmet>
        <title>Amenities - Rogue Cobb Mountain</title>
        <meta name="description" content="Discover all the amenities available at Cozy Retreat, from indoor comforts to outdoor adventures." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-black mb-6 text-center font-lexend">Our Amenities</h1>
            <p className="text-xl text-center max-w-2xl mx-auto font-montserrat">
              Everything you need for a comfortable and memorable stay in nature.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {amenities.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl font-bold text-red-600 mb-8 text-center font-montserrat">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-red-600 mb-2 text-center font-montserrat">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-center font-montserrat">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-red-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-lexend font-black">
              We're happy to help arrange additional services to make your stay even more special. Contact us for:
            </p>
            <ul className="max-w-lg mx-auto text-left space-y-4">
              {[
                "Grocery delivery before arrival",
                "Local activity bookings and recommendations",
                "Special occasion decorations",
                "Private chef experiences",
                "Massage therapy sessions"
              ].map((service) => (
                <li key={service} className="flex items-center text-gray-700 font-montserrat font-black">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities;