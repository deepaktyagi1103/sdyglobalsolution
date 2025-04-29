import React from "react";
import { motion } from "framer-motion";
import { Award, Globe, Cpu, Package, Flag, CheckCircle, Microscope, Shield, Train, Bookmark, Box, FlaskRound as Flask, Shovel as Shoe, PenTool as Tool, DivideIcon as LucideIcon } from "lucide-react";

interface MiscellaneousCardProps {
  service: {
    title: string;
    icon: string;
    description: string;
  };
  index: number;
}

const MiscellaneousCard: React.FC<MiscellaneousCardProps> = ({ service, index }) => {
  const iconMap: Record<string, LucideIcon> = {
    shoe: Shoe,
    toy: Box,
    tool: Tool,
    truck: Package,
    "check-square": CheckCircle,
    flag: Flag,
    "check-circle": CheckCircle,
    microscope: Microscope,
    shield: Shield,
    train: Train,
    bookmark: Bookmark,
    package: Box,
    flask: Flask,
  };

  const IconComponent = iconMap[service.icon] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 group"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 space-y-4">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-3 rounded-lg text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white transition-colors duration-300">
            <IconComponent size={24} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-[#1a365d] transition-colors duration-300">{service.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
          </div>
        </div>
        <div className="pt-2">
          <a href="#" className="inline-flex items-center text-sm font-medium text-[#1a365d] hover:text-blue-700 transition-colors">
            <span>Learn more</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MiscellaneousCard;