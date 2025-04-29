import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Award, Clock, Shield, ThumbsUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MiscellaneousCard from "../components/MiscellaneousCard";
import ProcessTimeline from "../components/ProcessTimeline";
import FAQ from "../components/FAQ";

const services = [
  {
    title: "BIS Certification for Footwear",
    icon: "shoe",
    description: "Comprehensive certification process ensuring footwear meets Indian safety and quality standards."
  },
  {
    title: "BIS Certification for Toys",
    icon: "toy",
    description: "Safety certification for toys to ensure compliance with Indian standards and regulations."
  },
  {
    title: "NOC for Steel",
    icon: "tool",
    description: "No Objection Certificate services for steel products import and manufacturing."
  },
  {
    title: "Import Export License",
    icon: "truck",
    description: "Assistance in obtaining and managing import-export licenses for international trade."
  },
  {
    title: "ISO Certification",
    icon: "check-square",
    description: "International Organization for Standardization certifications for various business processes."
  },
  {
    title: "Make in India Mark",
    icon: "flag",
    description: "Certification for products manufactured under the Make in India initiative."
  },
  {
    title: "CE Certification",
    icon: "check-circle",
    description: "European Conformity certification for products to be sold in the European market."
  },
  {
    title: "Lab Setup and Lab Equipment",
    icon: "microscope",
    description: "Complete solutions for laboratory establishment and equipment certification."
  },
  {
    title: "Custom Compliance",
    icon: "shield",
    description: "Tailored compliance solutions for specific industry requirements."
  },
  {
    title: "RDSO",
    icon: "train",
    description: "Research Design and Standards Organization certification for railway equipment."
  },
  {
    title: "Trademark",
    icon: "bookmark",
    description: "Trademark registration and protection services for your brand."
  },
  {
    title: "EPCG Scheme",
    icon: "package",
    description: "Export Promotion Capital Goods scheme registration and compliance."
  },
  {
    title: "Laboratory Recognition Scheme",
    icon: "flask",
    description: "Official recognition and certification for testing laboratories."
  }
];

const Miscellaneous = () => {
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
              Comprehensive Solutions For
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Miscellaneous Services
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              From specialized certifications to comprehensive compliance solutions, we offer a wide range of services to support your business needs across various industries.
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
              Explore Our Services
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
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">15+</p>
              <p className="text-gray-600">Service Categories</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">1000+</p>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">50+</p>
              <p className="text-gray-600">Industry Experts</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">99%</p>
              <p className="text-gray-600">Client Satisfaction</p>
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
              Specialized Industry Solutions
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We provide comprehensive solutions across various industries, ensuring compliance and certification needs are met with expertise and efficiency.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MiscellaneousCard 
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
              Our Approach
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              How We Work
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our streamlined process ensures efficient handling of your certification and compliance needs.
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
              Why Choose SD Global Solution?
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our expertise and dedication set us apart in providing comprehensive certification solutions.
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
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Specialized knowledge across multiple industries and certification types.</p>
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
              <h3 className="text-xl font-semibold mb-2">Quick Processing</h3>
              <p className="text-gray-600">Efficient handling of applications with minimal processing time.</p>
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
              <h3 className="text-xl font-semibold mb-2">Complete Support</h3>
              <p className="text-gray-600">Comprehensive assistance throughout the certification process.</p>
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
              <h3 className="text-xl font-semibold mb-2">Proven Success</h3>
              <p className="text-gray-600">High success rate in obtaining certifications across all categories.</p>
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
              Find answers to common questions about our miscellaneous services.
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
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today for a consultation and let our experts guide you through the certification process.
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
                Get in Touch
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

export default Miscellaneous;