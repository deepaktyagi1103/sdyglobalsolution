import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "How long does the certification process typically take?",
    answer: "The certification timeline varies depending on the specific certification and your readiness. Typically, the process can take anywhere from 3 weeks to 3 months. Our experts work efficiently to minimize delays and expedite the process wherever possible."
  },
  {
    question: "What documents are required for BIS certification?",
    answer: "For BIS certification, you'll need to provide technical documents including product specifications, test reports, manufacturing process details, quality control procedures, and legal documentation such as business registration. Our team will guide you through the specific requirements for your product category."
  },
  {
    question: "Can you help with international certifications?",
    answer: "Yes, SDY Global Solution specializes in both domestic and international certifications. We have experience with certifications required for exporting to various countries and can help you navigate the complex requirements of global markets."
  },
  {
    question: "Do you provide assistance after certification is obtained?",
    answer: "Absolutely! We offer comprehensive post-certification support including renewal reminders, compliance updates, and assistance with any regulatory changes that might affect your certification status."
  },
  {
    question: "What happens if my certification application is rejected?",
    answer: "If your application faces rejection, our team immediately addresses the reasons for rejection and works on rectifying the issues. We'll prepare a revised application and guide you through any necessary product modifications or documentation updates to ensure success in subsequent submissions."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <motion.div 
          key={index}
          className="mb-4 border-b border-gray-200 pb-4 last:border-b-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            className="flex justify-between items-center w-full text-left py-3 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
            <span className="text-[#1a365d]">
              {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 py-3">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;