import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface TestimonialsProps {
  scrollReveal: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ scrollReveal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      content: "SDY GLOBAL SOLUTION's expertise in BIS certification was invaluable for our company. They handled the entire process efficiently, saving us time and resources. Their team's knowledge and attention to detail ensured a smooth certification journey.",
      author: "Ravi Mehta",
      position: "CEO, TechInnovate Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
      company: "Electronics Manufacturing"
    },
    {
      content: "We were struggling with the complex requirements of CDSCO registration until we partnered with SDY GLOBAL SOLUTION. Their expert guidance and support throughout the process made compliance straightforward and hassle-free.",
      author: "Ananya Sharma",
      position: "Operations Director, MediCare Devices",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
      company: "Medical Devices"
    },
    {
      content: "The team at SDY GLOBAL SOLUTION went above and beyond to help us obtain FSSAI registration for our products. Their thorough understanding of regulations and proactive approach significantly expedited the approval process.",
      author: "Vivek Patel",
      position: "Founder, NatureFoods India",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop",
      company: "Food Processing"
    },
    {
      content: "As a first-time importer, navigating India's regulatory landscape was daunting until we found SDY GLOBAL SOLUTION. Their comprehensive support and personalized guidance helped us achieve compliance with all necessary certifications.",
      author: "Sarah Johnson",
      position: "International Business Head, EcoProducts",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
      company: "Consumer Goods"
    },
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (!scrollReveal) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [scrollReveal]);
  
  return (
    <div className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We've helped hundreds of businesses achieve certification success. Here's what some of them have to say about working with us.
          </p>
        </div>
        
        <div className="relative scroll-reveal">
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-white/20 z-0">
            <Quote className="w-64 h-64" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl relative z-10">
            <div className="testimonials-carousel relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                      <div className="md:col-span-3">
                        <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h4 className="text-white font-bold text-lg">{testimonial.author}</h4>
                          <p className="text-white/80">{testimonial.position}</p>
                          <p className="text-white/70 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="md:col-span-2 flex justify-center md:justify-end">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;