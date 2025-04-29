import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface SearchFormProps {
  onClose: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Handle escape key to close search
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, this would redirect to search results
      console.log('Searching for:', query);
      alert(`Search functionality would redirect to results for: "${query}"`);
    }
  };
  
  return (
    <div className="relative z-10 w-full max-w-md mx-auto rounded-xl overflow-hidden backdrop-blur-md bg-indigo-900/60 border border-indigo-500/30 shadow-2xl animate-fadeIn">
      <div className="flex justify-between items-center px-4 py-3 border-b border-indigo-700/30">
        <h3 className="text-lg font-medium text-indigo-100">Search our site</h3>
        <button 
          onClick={onClose}
          className="text-indigo-300 hover:text-white transition-colors p-1"
          aria-label="Close search"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="p-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-indigo-400" />
          </div>
          <input
            ref={inputRef}
            type="search"
            className="block w-full p-3 pl-10 text-base text-white bg-indigo-800/50 rounded-lg border border-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-indigo-400"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2 bottom-2 top-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm transition-colors"
          >
            Search
          </button>
        </div>
        
        <div className="mt-4 text-sm text-indigo-300">
          <p>Try searching for: <span className="text-indigo-200">home</span>, <span className="text-indigo-200">about</span>, <span className="text-indigo-200">contact</span></p>
        </div>
      </form>
      
      <div className="px-4 py-3 bg-indigo-800/30 text-xs text-indigo-300">
        Press ESC to close
      </div>
    </div>
  );
};

export default SearchForm;