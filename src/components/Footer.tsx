import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white font-montserrat">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src="/logo2.png" 
                alt="Rogue Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="mb-4">Your perfect getaway in the heart of nature.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-200 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cabins" className="hover:text-red-200 transition-colors">
                  Our Cabins
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-red-200 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link to="/attractions" className="hover:text-red-200 transition-colors">
                  Local Attractions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-red-200 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-red-200" />
                <span>123 Forest Road, Nature Valley</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-red-200" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-red-200" />
                <span>stay@roguecobbmountain.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500 text-center">
          <p>&copy; {new Date().getFullYear()} Rogue Cobb Mountain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;