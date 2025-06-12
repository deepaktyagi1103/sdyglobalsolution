import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Shield, ThumbsUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestingCard from "../components/TestingCard";
import ProcessTimeline from "../components/ProcessTimeline";
import FAQ from "../components/FAQ";

const services = [
  {
    title: "EMI-EMC Test",
    icon: "zap",
    description: "Comprehensive electromagnetic interference and compatibility testing for electronic devices."
  },
  {
    title: "RF Testing",
    icon: "radio",
    description: "Radio frequency testing services for wireless and communication devices."
  },
  {
    title: "IP Rating Test",
    icon: "shield",
    description: "Ingress Protection testing to determine water and dust resistance levels."
  },
  {
    title: "NABL Testing",
    icon: "flask",
    description: "Accredited laboratory testing services across multiple parameters and industries."
  },
  {
    title: "LM 79 & LM 80",
    icon: "lightbulb",
    description: "Standardized testing for LED lighting products and components."
  },
  {
    title: "ROHS Approval",
    icon: "check-circle",
    description: "Testing for compliance with Restriction of Hazardous Substances directives."
  },
  {
    title: "List of Equipments",
    icon: "wrench",
    description: "Comprehensive testing equipment and facilities for various industry needs."
  }
];

const Testing = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-[#1a365d] to-[#2a4365] text-white py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm font-medium uppercase tracking-wider text-blue-200 mb-2"
            >
              Professional Testing Services
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Testing & Certification
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Comprehensive testing services to ensure your products meet quality standards and regulatory requirements.
            </motion.p>
            <motion.a
              href="#services"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-[#1a365d] font-semibold transition-transform hover:translate-y-[-2px] hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
          </div>
        </div>

        {/* Abstract shape */}
        <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block overflow-hidden">
          <svg 
            viewBox="0 0 500 500" 
            className="absolute right-0 h-full opacity-10"
            preserveAspectRatio="xMinYMin slice"
          >
            <path d="M250,0C111.9,0,0,111.9,0,250s111.9,250,250,250s250-111.9,250-250S388.1,0,250,0z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">10+</p>
              <p className="text-gray-600">Testing Categories</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">5000+</p>
              <p className="text-gray-600">Tests Conducted</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">20+</p>
              <p className="text-gray-600">Testing Facilities</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">99.9%</p>
              <p className="text-gray-600">Accuracy Rate</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-3 py-1 bg-blue-50 text-[#1a365d] text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Testing Solutions
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We offer a comprehensive range of testing services to ensure your products meet all necessary standards and regulations.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <TestingCard 
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-3 py-1 bg-blue-50 text-[#1a365d] text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Process
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Testing Methodology
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our systematic approach ensures accurate and reliable testing results.
            </motion.p>
          </div>

          <ProcessTimeline />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-3 py-1 bg-blue-50 text-[#1a365d] text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Advantage
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Choose SDY Global Solution?
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our state-of-the-art facilities and expert team ensure accurate and reliable testing services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <Award className="text-[#1a365d]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accredited Labs</h3>
              <p className="text-gray-600">State-of-the-art facilities with latest testing equipment.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <Clock className="text-[#1a365d]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Fast and efficient testing process with minimal waiting time.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <Shield className="text-[#1a365d]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Results</h3>
              <p className="text-gray-600">Accurate and dependable testing results you can trust.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <ThumbsUp className="text-[#1a365d]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated team of testing professionals at your service.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block px-3 py-1 bg-blue-50 text-[#1a365d] text-sm font-semibold rounded-full mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Common Questions
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Find answers to common questions about our testing services.
            </motion.p>
          </div>

          <FAQ />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a365d] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Testing?
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to discuss your testing requirements and get started with our professional services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-[#1a365d] font-semibold transition-transform hover:translate-y-[-2px] hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Testing
                <ArrowRight className="ml-2" size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testing;