import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, className, onClick, children }) => {
  const baseStyles = "flex items-center gap-2 font-medium transition-all duration-300 transform hover:scale-105";
  
  let combinedClassName = baseStyles;
  
  if (className === "primary-button") {
    combinedClassName += " bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:shadow-xl";
  } else if (className === "secondary-button") {
    combinedClassName += " bg-indigo-700/30 backdrop-blur-sm hover:bg-indigo-600/50 text-indigo-100 px-5 py-3 rounded-lg border border-indigo-500/30";
  } else if (className === "text-button") {
    combinedClassName += " text-indigo-300 hover:text-white";
  } else if (className) {
    combinedClassName += ` ${className}`;
  }
  
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </a>
  );
};

export default Link;