import React, { useEffect, useRef, useState } from 'react';

interface AchievementsProps {
  scrollReveal: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ scrollReveal }) => {
  const [countedStats, setCountedStats] = useState({
    certifications: 0,
    experience: 0,
    satisfaction: 0,
    experts: 0
  });
  
  const statsRef = useRef<HTMLDivElement>(null);
  const counted = useRef(false);
  
  useEffect(() => {
    if (!scrollReveal) return;
    
    const handleScroll = () => {
      if (!statsRef.current || counted.current) return;
      
      const rect = statsRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        counted.current = true;
        
        const counts = [
          { start: 0, end: 5000, key: 'certifications', duration: 2000 },
          { start: 0, end: 12, key: 'experience', duration: 1500 },
          { start: 0, end: 98, key: 'satisfaction', duration: 1800 },
          { start: 0, end: 30, key: 'experts', duration: 1600 }
        ];
        
        counts.forEach(({ start, end, key, duration }) => {
          const step = (end - start) / (duration / 16); // 16ms per frame (approx 60fps)
          let current = start;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              clearInterval(timer);
              current = end;
            }
            setCountedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
          }, 16);
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollReveal]);
  
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
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="scroll-reveal mb-12 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent mb-6">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Over the years, we've built a strong track record of helping businesses achieve compliance
          </p>
        </div>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { 
              number: countedStats.certifications, 
              suffix: "+",
              text: "Successful Certifications",
              color: "from-primary to-primary/70"
            },
            { 
              number: countedStats.experience, 
              suffix: "+",
              text: "Years of Experience",
              color: "from-accent to-accent/70"
            },
            { 
              number: countedStats.satisfaction, 
              suffix: "%",
              text: "Client Satisfaction",
              color: "from-green-500 to-green-400"
            },
            { 
              number: countedStats.experts, 
              suffix: "+",
              text: "Industry Experts",
              color: "from-blue-500 to-blue-400"
            },
          ].map((stat, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-full">
                <div className="inline-block mb-4 p-4 rounded-full bg-gradient-to-tr group-hover:scale-110 transition-transform duration-300 bg-opacity-10 relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-r ${stat.color}`}></div>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                    <span className="text-2xl font-bold">{stat.number < 10 ? stat.number : Math.floor(stat.number / 100)}</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {stat.number}
                    <span className="ml-1">{stat.suffix}</span>
                  </div>
                </div>
                <p className="text-gray-700 font-medium mt-2">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="scroll-reveal">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-10 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">Our Recognition</h3>
                <p className="text-gray-700 mb-6">
                  We're proud to be recognized for our commitment to excellence in regulatory compliance services. Our dedication to client success has earned us several accolades in the industry.
                </p>
                <ul className="space-y-4">
                  {[
                    "Best Certification Consultant - Business Excellence Awards 2022",
                    "Top 10 Compliance Services Providers - Industry Today 2021",
                    "Quality Excellence Award - Chamber of Commerce 2020",
                    "Customer Service Excellence - Service Awards 2019"
                  ].map((award, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 p-1 bg-primary/10 rounded-full text-primary mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-first md:order-last mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1170&auto=format&fit=crop" 
                  alt="Award ceremony" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;