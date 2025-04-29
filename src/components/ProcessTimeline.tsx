import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Search, CheckCircle, PhoneCall } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: <PhoneCall size={24} />,
      title: "Initial Consultation",
      description: "We discuss your certification needs, requirements, and timeline."
    },
    {
      icon: <FileText size={24} />,
      title: "Documentation",
      description: "We prepare and organize all necessary documentation for submission."
    },
    {
      icon: <Search size={24} />,
      title: "Application Review",
      description: "Your application undergoes thorough review by certification authorities."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Testing & Inspection",
      description: "Products undergo testing and inspection to ensure compliance with standards."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Certification Approval",
      description: "Upon successful completion, your certification is granted and delivered."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {steps.map((step, index) => (
        <motion.div 
          key={index}
          className="flex items-start mb-8 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="relative">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a365d] text-white z-10">
              {step.icon}
            </div>
            {index !== steps.length - 1 && (
              <div className="absolute top-12 left-6 w-0.5 h-16 bg-gray-200"></div>
            )}
          </div>
          <div className="ml-8">
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessTimeline;