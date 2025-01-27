import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import { LocalAttraction } from '../types';

const attractions: LocalAttraction[] = [
  {
    name: "Mountain Peak Restaurant",
    category: "restaurant",
    description: "Farm-to-table dining with panoramic mountain views",
    image: "restro.avif",
    distance: "5 mins",
    link: "#"
  },
  {
    name: "Historic Mill Museum",
    category: "historical",
    description: "19th century water mill with guided tours",
    image: "museum.avif",
    distance: "15 mins",
    link: "#"
  },
  {
    name: "Valley View Trail",
    category: "outdoor",
    description: "Scenic hiking trail with waterfall views",
    image: "valley.avif",
    distance: "10 mins",
    link: "#"
  },
  {
    name: "Mountain Vista Winery",
    category: "winery",
    description: "Local wines with mountain vineyard tours",
    image: "winery.avif",
    distance: "20 mins",
    link: "#"
  }
];

const categoryColors = {
  restaurant: "bg-red-100 text-red-800",
  historical: "bg-blue-100 text-blue-800",
  outdoor: "bg-green-100 text-green-800",
  winery: "bg-purple-100 text-purple-800"
};

const Attractions = () => {
  return (
    <>
      <Helmet>
        <title>Local Attractions - Rogue Cobb Mountain</title>
        <meta name="description" content="Explore the best local attractions near Cozy Retreat, from restaurants to outdoor activities." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-lexend">Local Attractions</h1>
            <p className="text-xl text-center max-w-2xl mx-auto font-montserrat">
              Discover the best experiences our region has to offer, all within easy reach of your cabin.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[attraction.category]}`}>
                      {attraction.category.charAt(0).toUpperCase() + attraction.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-red-600 mb-2 font-montserrat">{attraction.name}</h2>
                  <p className="text-gray-600 mb-4 font-montserrat">{attraction.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <MapPin size={16} className="mr-1" />
                      <span>{attraction.distance} drive</span>
                    </div>
                    {attraction.link && (
                      <a
                        href={attraction.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        Learn More →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center font-montserrat">Seasonal Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { season: "Spring", activities: ["Wildflower Hiking", "Waterfall Tours", "Bird Watching"] },
                { season: "Summer", activities: ["Lake Swimming", "Mountain Biking", "Outdoor Concerts"] },
                { season: "Fall", activities: ["Leaf Peeping", "Apple Picking", "Harvest Festivals"] },
                { season: "Winter", activities: ["Skiing", "Snowshoeing", "Hot Springs"] }
              ].map((season) => (
                <div key={season.season} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-red-600 mb-4 font-montserrat">{season.season}</h3>
                  <ul className="space-y-2">
                    {season.activities.map((activity) => (
                      <li key={activity} className="text-gray-600 font-montserrat">• {activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attractions;