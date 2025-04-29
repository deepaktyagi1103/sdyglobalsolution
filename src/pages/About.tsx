import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animations.css';

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MissionVision from "../components/about/MissionVision";
import CompanyJourney from "../components/about/CompanyJourney";
import Achievements from "../components/about/Achievements";
import TeamMembers from "../components/about/TeamMembers";
import Testimonials from "../components/about/Testimonials";
import FAQ from "../components/about/FAQ";
import FloatingNav from "../components/FloatingNav";

const About = () => {
  const [scrollReveal, setScrollReveal] = useState(false);
  
  useEffect(() => {
    // Enable scroll reveal animations after initial load
    const timer = setTimeout(() => {
      setScrollReveal(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="About SD GLOBAL SOLUTION"
        subtitle="Your trusted partner in regulatory compliance and certification services across India"
        imageUrl="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Mission & Vision */}
      <section id="mission" className="bg-white">
        <MissionVision scrollReveal={scrollReveal} />
      </section>

      {/* Company Journey */}
      <section id="journey">
        <CompanyJourney scrollReveal={scrollReveal} />
      </section>

      {/* Achievements */}
      <section id="achievements" className="bg-white">
        <Achievements scrollReveal={scrollReveal} />
      </section>

      {/* Team Members */}
      {/* <section id="team">
        <TeamMembers scrollReveal={scrollReveal} />
      </section> */}

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials scrollReveal={scrollReveal} />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white">
        <FAQ scrollReveal={scrollReveal} />
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
         }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-reveal">
              Partner with SD GLOBAL SOLUTION PVT. LTD for Your Certification Needs
            </h2>
            <p className="text-xl text-white/90 mb-8 scroll-reveal">
              Let our expert team guide you through the certification process with ease and confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;