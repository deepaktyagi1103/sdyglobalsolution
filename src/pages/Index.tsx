import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock, CheckCircle, Quote, Star, ChevronRight, Lightbulb, Target, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ClientCard from "../components/ClientCard";
import DailyQuote from "@/components/DailyQuote";

const Index = () => {
  
  const services = [
    {
      id: 1,
      title: "BIS Certification for Plywood",
      description: "Complete assistance for BIS certification process for plywood products, ensuring compliance with Indian standards.",
      image: "https://images.pexels.com/photos/6608942/pexels-photo-6608942.jpeg",
      link: "/services/bis-certification-plywood",
    },
    {
      id: 2,
      title: "BIS Certification for Furniture",
      description: "Expert guidance for obtaining BIS certification for all types of furniture and related products.",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      link: "/services/bis-certification-furniture",
    },
    {
      id: 3,
      title: "BIS Certification for LED Lights",
      description: "Streamlined process for LED lighting products to get BIS certification with minimal hassle.",
      image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg",
      link: "/services/bis-certification-led",
    },
    {
      id: 4,
      title: "BIS Certification for Protective Textiles",
      description: "Specialized certification services for protective textiles and related safety equipment.",
      image: "https://images.pexels.com/photos/3889764/pexels-photo-3889764.jpeg",
      link: "/services/bis-certification-textiles",
    },
  ];

  const clients = [
    { id: 1, logo: "/clients/c1.png", name: "Client 1" },
    { id: 2, logo: "/clients/c2.png", name: "Client 2" },
    { id: 3, logo: "/clients/c3.jpg", name: "Client 3" },
    { id: 4, logo: "/clients/c4.png", name: "Client 4" },
    { id: 5, logo: "/clients/c5.png", name: "Client 5" },
    { id: 6, logo: "/clients/c6.jpg", name: "Client 6" },
  ];
  
  

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO, TechCraft Industries",
      content: "SDY Global Solution made our BIS certification process incredibly smooth. Their expertise and dedication are unmatched.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Director, Innovative Furniture",
      content: "Outstanding service! They helped us navigate complex certification requirements with ease and professionalism.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Operations Head, LightTech Solutions",
      content: "Their industry knowledge and prompt support made all the difference in our certification journey.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast and efficient certification process with minimal delays"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Guaranteed Compliance",
      description: "Ensure complete adherence to all regulatory requirements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated team of experienced certification professionals"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description: "Trusted by leading businesses across sectors"
    }
  ];

  const motivationalPoints = [
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
      title: "Innovation First",
      description: "Stay ahead with cutting-edge certification solutions"
    },
    {
      icon: <Target className="w-12 h-12 text-red-400" />,
      title: "Focused Approach",
      description: "Dedicated to achieving your certification goals"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-400" />,
      title: "Continuous Growth",
      description: "Supporting your business expansion journey"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <HeroSection
        title="Your Trusted Partner for BIS Certification"
        subtitle="We simplify the complex process of obtaining BIS certification and other regulatory compliances for businesses across India"
        imageUrl="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            <DailyQuote/>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Successful Certifications</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-blue-100">Expert Consultants</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-blue-100">Years Experience</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-blue-100">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Welcome to SDY Global Solution
              </h2>
              <p className="text-gray-600 mb-6">
                Since our establishment, SDY Global Solution has been at the forefront of certification and compliance services in India. We take pride in our commitment to excellence and our ability to deliver results that exceed expectations.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts brings decades of combined experience in navigating the complex landscape of regulatory requirements, ensuring your certification process is smooth and successful.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="About SDY Global Solution"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Your Success
            </h2>
            <p className="text-xl text-blue-100">
              We're committed to helping businesses achieve their certification goals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {motivationalPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="mb-4 flex justify-center">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-blue-100">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive certification solutions tailored to your industry needs
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              A streamlined approach to ensure successful certification
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Consultation",
                description: "We understand your specific needs and requirements"
              },
              {
                title: "Documentation",
                description: "Complete assistance with all necessary paperwork"
              },
              {
                title: "Application Process",
                description: "Expert handling of the certification application"
              },
              {
                title: "Successful Certification",
                description: "Obtaining and delivering your certification"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              What Our Clients Say
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Our Clients
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Trusted by leading businesses across industries
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ClientCard {...client} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-blue-100 text-lg mb-8"
            >
              Contact us today for a free consultation and let our experts guide you through the certification process
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;