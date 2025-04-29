// src/components/ClientCard.tsx

import React from "react";
import { motion } from "framer-motion";

interface ClientCardProps {
  logo: string;
  name: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ logo, name }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </motion.div>
  );
};

export default ClientCard;
