import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const sections: Section[] = [
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'journey', label: 'Our Journey' },
    { id: 'achievements', label: 'Achievements' },
    // { id: 'team', label: 'Our Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      // Determine active section
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-2 mb-4 transform transition-transform duration-300 hover:scale-105">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm flex items-center whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary text-white font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={scrollToTop}
        className={`p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default FloatingNav;