import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Shield, Award, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Services = () => {
  const [activeTab, setActiveTab] = useState("certification");

  const services = {
    certification: [
      {
        title: "BIS Certification for Plywood",
        description: "Complete assistance for BIS certification process for plywood products.",
        image: "/lovable-uploads/576537b0-39e5-4231-959a-c977216f0f2f.png",
        features: ["Documentation preparation", "Factory inspection support", "Testing coordination"]
      },
      {
        title: "BIS Certification for Furniture",
        description: "End-to-end support for furniture manufacturers to obtain BIS certification.",
        image: "/lovable-uploads/fdcfa613-789c-421e-864c-df882e596454.png",
        features: ["Application processing", "Regulatory compliance", "Quality management setup"]
      },
      {
        title: "BIS Certification for LED Lights",
        description: "Comprehensive assistance for LED manufacturers.",
        image: "https://images.unsplash.com/photo-1633297362872-4db726695b3f",
        features: ["Technical file preparation", "Performance testing", "Safety verification"]
      }
    ],
    registration: [
      {
        title: "FSSAI Registration",
        description: "Complete assistance for food businesses to obtain FSSAI licenses.",
        features: ["Basic Registration", "State License", "Central License", "Product Approval"]
      },
      {
        title: "MSME Registration",
        description: "Support for small and medium enterprises to obtain MSME registration.",
        features: ["Udyam Registration", "NSIC Registration", "Subsidy Scheme Guidance", "Credit Facilitation"]
      }
    ],
    additional: [
      {
        title: "ISO Certification",
        description: "Assistance for obtaining various ISO certifications.",
        icon: Shield
      },
      {
        title: "EPR Registration",
        description: "Support for Extended Producer Responsibility compliance.",
        icon: Award
      },
      {
        title: "Laboratory Testing",
        description: "Access to accredited laboratories for product testing.",
        icon: Users
      }
    ]
  };

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We understand your specific needs and requirements",
      icon: Phone
    },
    {
      title: "Documentation",
      description: "Complete assistance with all necessary paperwork",
      icon: Mail
    },
    {
      title: "Application Process",
      description: "Expert handling of the certification application",
      icon: MapPin
    },
    {
      title: "Successful Certification",
      description: "Obtaining and delivering your certification",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <HeroSection
        title="Our Services"
        subtitle="Comprehensive certification and compliance solutions tailored to your needs"
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      {/* Services Overview */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-lg text-gray-600">
              At SDY Global Solution, we offer a full spectrum of certification and compliance services 
              designed to meet the diverse needs of businesses across industries.
            </p>
          </motion.div>

          {/* Service Categories Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["certification", "registration", "additional"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Services
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "certification" && services.certification.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}

            {activeTab === "registration" && services.registration.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}

            {activeTab === "additional" && services.additional.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-blue-100">
              A streamlined approach to ensure successful certification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-white/20 transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-white/40" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Contact us today for a free consultation and let our experts guide you through the certification process
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;