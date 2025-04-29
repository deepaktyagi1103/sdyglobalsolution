import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/95 to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                SD GLOBAL SOLUTION PVT. LTD
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for all BIS certification, registration, and compliance services across India.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/services", text: "Our Services" },
                { to: "/blog", text: "Blog" },
                { to: "/contact", text: "Contact Us" },
              ].map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-200" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "BIS Certification",
                "ISO Certification",
                "FSSAI Registration",
                "MSME Registration",
                "EPR Registration",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-accent transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-accent group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">SD GLOBAL SOLUTION PVT.LTD
                  <br />H-689,KHN-146,Ground Floor Burari,
                    Delhi, Delhi 110084,
                    India
                    </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent group-hover:text-white transition-colors" />
                <a href="mailto:info@sdglobalsolution.com" className="text-gray-300 group-hover:text-white transition-colors">
                info@sdglobalsolution.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent group-hover:text-white transition-colors" />
                <a href="tel:+9205081326" className="text-gray-300 group-hover:text-white transition-colors">
                  +91 9205081326
                </a>
              </li>
            </ul>
            <div className="mt-8 space-y-4">
              <h4 className="font-semibold">Subscribe to Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2 text-gray-900 placeholder-gray-500 bg-white/90 border-0 rounded-l-md focus:ring-2 focus:ring-accent focus:outline-none"
                  required
                />
              <a href="/contact">
              <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2 bg-accent text-white rounded-r-md hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                >
                  Subscribe
                </button>
              </a>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} SD GLOBAL SOLUTION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;