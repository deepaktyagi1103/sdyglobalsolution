import React, { useEffect } from 'react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

interface TeamMembersProps {
  scrollReveal: boolean;
}

const TeamMembers: React.FC<TeamMembersProps> = ({ scrollReveal }) => {
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
  
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop",
      bio: "20+ years of experience in regulatory compliance and certification. Rajesh has helped hundreds of businesses successfully navigate the complex certification landscape in India.",
      specialization: "BIS and CDSCO regulations",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@sdyglobalsolution.com"
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
      bio: "15+ years of expertise in streamlining certification processes. Priya is dedicated to ensuring seamless operations and exceptional client service at every touchpoint.",
      specialization: "Process optimization and client relations",
      linkedin: "#",
      twitter: "#",
      email: "priya@sdyglobalsolution.com"
    },
    {
      name: "Amit Patel",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop",
      bio: "Expert in testing procedures and technical compliance requirements. Amit leads our technical team, ensuring all certification requirements are met with precision.",
      specialization: "Product testing and technical documentation",
      linkedin: "#",
      twitter: "#",
      email: "amit@sdglobalsolution.com"
    },
    {
      name: "Sunita Reddy",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1022&auto=format&fit=crop",
      bio: "With 10+ years in client relationship management, Sunita ensures that our clients receive personalized attention and support throughout their certification journey.",
      specialization: "Client support and relationship building",
      linkedin: "#",
      twitter: "#",
      email: "sunita@sdyglobalsolution.com"
    },
    {
      name: "Vikram Singh",
      role: "Regulatory Affairs Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
      bio: "A regulatory expert with deep knowledge of Indian and international certification standards. Vikram stays ahead of regulatory changes to keep our clients compliant.",
      specialization: "International standards and compliance",
      linkedin: "#",
      twitter: "#",
      email: "vikram@sdyglobalsolution.com"
    },
    {
      name: "Neha Gupta",
      role: "Documentation Specialist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
      bio: "Specialized in preparing comprehensive documentation for certification applications. Neha's attention to detail ensures smooth approvals for our clients.",
      specialization: "Technical documentation and application processing",
      linkedin: "#",
      twitter: "#",
      email: "neha@sdyglobalsolution.com"
    }
  ];
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Our team of experienced professionals is dedicated to helping your business navigate the complex world of compliance and certification
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-bold text-xl">{member.name}</h3>
                        <p className="text-white/80">{member.role}</p>
                      </div>
                      <div className="flex gap-2">
                        <a href={member.linkedin} className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a href={member.twitter} className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                        <a href={`mailto:${member.email}`} className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="text-sm font-medium text-gray-600">
                    <span className="font-semibold">Specialization:</span> {member.specialization}
                  </div>
                </div>
                <div className="px-6 pb-5 mt-auto">
                  <a href="#" className="text-primary hover:text-accent transition-colors flex items-center text-sm font-medium">
                    View Full Profile
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;