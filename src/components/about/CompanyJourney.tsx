import React, { useEffect, useState } from 'react';

interface CompanyJourneyProps {
  scrollReveal: boolean;
}

const CompanyJourney: React.FC<CompanyJourneyProps> = ({ scrollReveal }) => {
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
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            From our humble beginnings to becoming a leading certification partner in India
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/50 rounded-full hidden md:block" />
          
          {/* Timeline Events */}
          <div className="space-y-12 relative">
            {[
              {
                year: "2025",
                title: "Foundation",
                description: "SDY GLOBAL SOLUTION was founded by a team of regulatory experts with a vision to transform how businesses approach certification in India.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop",
              },
              {
                year: "2025",
                title: "Expansion of Services",
                description: "Expanded our service portfolio to include various certifications, registrations, and testing services beyond BIS certification.",
                image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop",
              },
              {
                year: "2025",
                title: "Regional Growth",
                description: "Opened offices in major cities across India, enabling us to serve clients nationwide with local expertise and support.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop",
              },
              {
                year: "2025",
                title: "Digital Transformation",
                description: "Implemented digital solutions to streamline certification processes, providing clients with real-time updates and transparent tracking.",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1170&auto=format&fit=crop",
              },
              {
                year: "2025",
                title: "International Partnerships",
                description: "Formed strategic partnerships with international certification bodies to help Indian businesses access global markets with ease.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop",
              },
              {
                year: "Today",
                title: "Industry Leadership",
                description: "Today, SDY GLOBAL SOLUTION stands as a trusted partner to thousands of businesses across India, helping them navigate regulatory requirements with confidence.",
                image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1170&auto=format&fit=crop",
              },
            ].map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } scroll-reveal`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot for Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full z-10 hidden md:block" style={{ top: `${index * 140 + 70}px` }} />
                
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-xl font-bold text-primary inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="w-full md:w-5/12">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJourney;