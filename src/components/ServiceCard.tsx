import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <motion.div
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
      whileHover={{ y: -8 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group-hover:translate-x-2 duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;