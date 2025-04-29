import React, { useEffect, useState, useRef } from 'react';
import { Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from './NotFound/NotFoundStyles';
import SearchForm from './NotFound/SearchForm';
import AnimatedBackground from './NotFound/AnimatedBackground';

const NotFoundPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSearch, setShowSearch] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Log the 404 error for tracking
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Apply parallax effect to content
  useEffect(() => {
    if (contentRef.current && backgroundRef.current) {
      const moveX = mousePosition.x / window.innerWidth - 0.5;
      const moveY = mousePosition.y / window.innerHeight - 0.5;
      
      contentRef.current.style.transform = `translate(${moveX * -20}px, ${moveY * -20}px)`;
      backgroundRef.current.style.transform = `translate(${moveX * 40}px, ${moveY * 40}px)`;
    }
  }, [mousePosition]);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 text-white">
      <AnimatedBackground ref={backgroundRef} />
      
      <div 
        ref={contentRef}
        className="relative z-10 max-w-2xl w-full px-6 py-12 transition-all duration-300 ease-out"
      >
        <div className="text-center mb-8">
          <h1 className="text-9xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-50">
            404
          </h1>
          <div className="h-2 w-24 mx-auto mb-6 bg-indigo-400 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-100">
            Oops! This page has gone exploring
          </h2>
          <p className="text-lg text-indigo-200 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
        </div>
        
        {showSearch ? (
          <SearchForm onClose={() => setShowSearch(false)} />
        ) : (
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/" className="primary-button">
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
            <Link href="#" onClick={() => window.history.back()} className="secondary-button">
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </Link>
            <Link href="#" onClick={() => setShowSearch(true)} className="secondary-button">
              <Search size={18} />
              <span>Search</span>
            </Link>
            <Link href="#" onClick={() => window.location.reload()} className="text-button">
              <RefreshCw size={18} />
              <span>Refresh Page</span>
            </Link>
          </div>
        )}
        
        <div className="absolute bottom-6 left-0 right-0 text-center text-indigo-300 text-sm">
          <p>Lost? Try our <button onClick={() => setShowSearch(true)} className="text-white underline hover:text-indigo-200 transition-colors">site search</button> or <Link href="/" className="text-white underline hover:text-indigo-200 transition-colors">view our sitemap</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;