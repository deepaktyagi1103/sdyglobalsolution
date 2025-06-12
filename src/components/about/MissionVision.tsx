import React, { useEffect } from 'react';
import { Check, Award, Users, Star } from 'lucide-react';

interface MissionVisionProps {
  scrollReveal: boolean;
}

const MissionVision: React.FC<MissionVisionProps> = ({ scrollReveal }) => {
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
    <div className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At SDY GLOBAL SOLUTION, our mission is to simplify the complex world of regulatory compliance and certification for businesses across India. We strive to provide expert guidance, efficient processes, and reliable support to help our clients navigate regulatory requirements with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="group scroll-reveal">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-primary transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <div className="mr-4 p-3 bg-primary/10 rounded-full">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted partner in regulatory compliance, known for our integrity, expertise, and client-centric approach. We envision a future where businesses can navigate complex regulatory requirements seamlessly, allowing them to focus on growth and innovation.
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Why clients choose us:</h4>
                <div className="space-y-2">
                  {["Comprehensive expertise", "End-to-end support", "Customized solutions", "Client-focused approach"].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="mr-2 text-green-500">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-accent transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center">
                <div className="mr-4 p-3 bg-accent/10 rounded-full">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                Our Values
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Check, title: "Integrity", desc: "We maintain the highest ethical standards in all our dealings, ensuring transparency, honesty, and fairness in every interaction with our clients, regulatory bodies, and partners." },
                  { icon: Award, title: "Excellence", desc: "We pursue excellence in everything we do, from the quality of our services to the expertise of our team. We continuously strive to exceed expectations and deliver outstanding results." },
                  { icon: Users, title: "Client-first", desc: "Our clients' success is our top priority. We are committed to understanding their unique needs, providing personalized solutions, and supporting them throughout their regulatory journey." },
                  { icon: Star, title: "Innovation", desc: "We continuously seek better ways to serve our clients by staying ahead of regulatory changes, implementing efficient processes, and leveraging technology to streamline certification procedures." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="mr-4 p-2 bg-accent/5 rounded-lg group-hover/item:bg-accent/10 transition-colors">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="font-semibold text-accent">{item.title}:</span>
                      <span className="ml-1 text-gray-700">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;