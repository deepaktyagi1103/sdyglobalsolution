import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, BookOpen } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 -top-10 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
            <BookOpen size={16} className="mr-2" />
            <span className="text-sm font-medium">Knowledge Hub</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Blog & Resources
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Stay updated with the latest insights, news, and guidance on certification 
            and compliance for your business success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            >
              Subscribe to Updates
              <ChevronRight size={18} className="ml-1" />
            </Link>
            
            <Link
              to="/resources"
              className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            >
              <Search size={18} className="mr-2" />
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-1">
        <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.67,59.43,168.55,47.18,321.39,56.44Z" className="fill-slate-50 dark:fill-slate-900"></path>
        </svg>
      </div>
    </section>
  );
};

export default BlogHero;