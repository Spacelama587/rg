import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Rogue Cogg Mountain</title>
        <meta name="description" content="Get in touch with us at Cozy Retreat. We're here to help plan your perfect mountain getaway." />
      </Helmet>

      <div className="pt-20">
        <div className="bg-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-center font-lexend">Contact Us</h1>
            <p className="text-xl text-center max-w-2xl mx-auto font-montserrat">
              Have questions? We're here to help make your stay perfect.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-6 font-montserrat">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-montserrat mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-montserrat">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-montserrat">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-montserrat">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-red-600 mb-6 font-montserrat">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold font-montserrat">Address</h3>
                      <p className="text-gray-600">123 Forest Road<br />Nature Valley, NV 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold font-montserrat">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold font-montserrat">Email</h3>
                      <p className="text-gray-600">stay@roguecoggmountain.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold font-montserrat">Office Hours</h3>
                      <p className="text-gray-600 font-montserrat">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-red-600 mb-6 font-montserrat">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is your check-in/check-out time?",
                      a: "Check-in is at 3:00 PM and check-out is at 11:00 AM."
                    },
                    {
                      q: "Is parking available?",
                      a: "Yes, each cabin has its own dedicated parking space."
                    },
                    {
                      q: "Are pets allowed?",
                      a: "Yes, we are pet-friendly! Additional pet fee applies."
                    },
                    {
                      q: "Do you offer early check-in?",
                      a: "Early check-in may be available upon request, subject to availability."
                    }
                  ].map((faq) => (
                    <div key={faq.q}>
                      <h3 className="font-semibold text-red-600 font-montserrat">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-red-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extra-bold text-red-600 mb-8 font-lexend">Need Immediate Assistance?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-black font-montserrat">
              For urgent matters or immediate booking assistance, please don't hesitate to call us directly.
            </p>
            <a
              href="tel:5551234567"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;