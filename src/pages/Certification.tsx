import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Award, Clock, Shield, ThumbsUp, HelpCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CertificationCard from "../components/CertificationCard";
import ProcessTimeline from "../components/ProcessTimeline";
import FAQ from "../components/FAQ";

const services = [
  {
    title: "BIS (ISI Mark) for Domestic Manufacturers",
    icon: "award",
    description: "Certification ensuring that domestic products meet Indian standards (IS) for safety, quality, and reliability."
  },
  {
    title: "BIS (ISI Mark) for Foreign Manufacturers",
    icon: "globe",
    description: "Certification mandatory for foreign companies selling products in India to guarantee standard compliance."
  },
  {
    title: "BIS CRS Certification for Electronic Products",
    icon: "cpu",
    description: "Compulsory Registration Scheme for electronics to ensure their safe performance and energy efficiency."
  },
  {
    title: "EPR Registration for E-Waste",
    icon: "trash",
    description: "Extended Producer Responsibility for managing and recycling electronic waste responsibly."
  },
  {
    title: "EPR Registration for Plastic Waste",
    icon: "recycle",
    description: "Mandatory for producers and brand owners to manage plastic waste under government regulations."
  },
  {
    title: "EPR Registration for Battery Waste",
    icon: "battery",
    description: "Ensures proper collection, recycling, and disposal of used batteries by producers."
  },
  {
    title: "EPR Registration for Tyre Waste",
    icon: "circle",
    description: "Mandate for tyre manufacturers and importers to collect and recycle old tyres sustainably."
  },
  {
    title: "EPR Registration for Used Oil",
    icon: "droplet",
    description: "Regulation for producers to manage and recycle used lubricating oil effectively."
  },
  {
    title: "BIS ECO Mark Scheme",
    icon: "leaf",
    description: "Eco-label awarded to products meeting environmental safety standards."
  },
  {
    title: "WMI Registration",
    icon: "truck",
    description: "World Manufacturer Identifier required for issuing Vehicle Identification Numbers (VINs)."
  },
  {
    title: "BIS Scheme-X Certification",
    icon: "check-square",
    description: "Special certification scheme under BIS for certain priority products."
  },
  {
    title: "BIS Certificate of Conformity",
    icon: "file-text",
    description: "Certificate ensuring that products comply with the relevant Indian Standard specifications."
  },
];

const Certification = () => {
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
              Your Trusted Partner In
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Certification Services
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              SD Global Solution provides comprehensive certification and registration solutions to ensure your business complies with all government and industry regulations with ease and professionalism.
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
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">500+</p>
              <p className="text-gray-600">Certifications Completed</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">98%</p>
              <p className="text-gray-600">Success Rate</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">12+</p>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
            <motion.div 
              className="text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-[#1a365d]">300+</p>
              <p className="text-gray-600">Satisfied Clients</p>
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
              Our Expertise
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive Certification Services
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At SD Global Solution, we offer a wide range of certifications and registrations to help your business thrive in compliance with all regulatory requirements.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CertificationCard 
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
              How We Work
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Certification Process
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We follow a streamlined process to ensure your certification journey is smooth and successful.
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
              We pride ourselves on delivering exceptional certification services that set us apart from the competition.
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
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Our team has extensive knowledge and hands-on experience in certification processes across industries.</p>
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
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">We ensure your certifications are completed swiftly and efficiently, saving your valuable time.</p>
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
              <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
              <p className="text-gray-600">From documentation to final approval, we assist you at every stage of the process.</p>
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
              <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">We have a 98% success rate in securing certifications for our clients across all industries.</p>
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
              Find answers to commonly asked questions about our certification services.
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
              Ready to Get Started with Your Certification?
            </motion.h2>
            <motion.p 
              className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today for a free consultation and let our experts guide you through the certification process.
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
                Schedule a Consultation
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

export default Certification;