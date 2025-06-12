import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  scrollReveal: boolean;
}

const FAQ: React.FC<FAQProps> = ({ scrollReveal }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is the typical timeline for obtaining BIS certification?",
      answer: "The typical timeline for BIS certification varies depending on the product category and the completeness of your documentation. Generally, it takes between 2-4 months from application to certification. Our team works to expedite this process by ensuring all documentation is properly prepared and by proactively addressing any queries from regulatory authorities."
    },
    {
      question: "How does SDY GLOBAL SOLUTION simplify the certification process?",
      answer: "We simplify the certification process by providing end-to-end support, from initial assessment to final certification. This includes documentation preparation, application submission, coordination with testing laboratories, follow-up with regulatory bodies, and post-certification compliance assistance. Our expert team navigates the complex regulatory requirements, allowing you to focus on your core business operations."
    },
    {
      question: "What types of products require certification in India?",
      answer: "In India, many product categories require mandatory certification, including electronics, telecommunications equipment, medical devices, food products, textiles, and toys, among others. Each category falls under specific regulatory bodies such as BIS, CDSCO, WPC, FSSAI, etc. We can help determine which certifications your specific products require through our comprehensive regulatory assessment."
    },
    {
      question: "Can you help with international certifications for Indian products?",
      answer: "Yes, we assist Indian manufacturers and exporters in obtaining international certifications such as CE, FCC, FDA, and others required for global market access. Our team has expertise in international regulatory requirements and can guide you through the certification process for various target markets, helping your products meet global standards."
    },
    {
      question: "What happens if our product fails testing during the certification process?",
      answer: "If a product fails testing, we provide detailed analysis of the failure points and work with you to implement necessary modifications. Our technical experts offer guidance on product improvements to meet required standards. Once modifications are completed, we coordinate re-testing and continue the certification process. Our goal is to help you achieve compliance efficiently, even when challenges arise."
    },
    {
      question: "Do you offer post-certification support?",
      answer: "Yes, we provide comprehensive post-certification support, including renewal reminders, regulatory updates affecting your certified products, assistance with label modifications, and support for market surveillance queries. We consider our relationship with clients as a long-term partnership, offering ongoing assistance to maintain compliance throughout your product's lifecycle."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
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
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about certification and our services
          </p>
        </div>
        
        <div className="space-y-4 scroll-reveal">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-8">{faq.question}</h3>
                <div className={`bg-primary/10 rounded-full p-1 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;