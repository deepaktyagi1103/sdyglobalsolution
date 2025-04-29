import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300); // Debounce search

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div 
      className={`relative w-full md:max-w-md transition-all duration-300 ${
        isFocused ? 'md:max-w-lg' : ''
      }`}
    >
      <div 
        className={`flex items-center bg-white dark:bg-slate-800 border ${
          isFocused 
            ? 'border-primary shadow-md' 
            : 'border-slate-200 dark:border-slate-700'
        } rounded-lg px-4 py-2 transition-all duration-300`}
      >
        <Search 
          size={20} 
          className={`mr-2 transition-colors duration-300 ${
            isFocused ? 'text-primary' : 'text-slate-400'
          }`} 
        />
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles, topics, or authors..."
          className="w-full bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-200 placeholder-slate-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {query && (
          <button
            onClick={handleClear}
            className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      {isFocused && (
        <div className="absolute mt-1 text-xs text-slate-500 dark:text-slate-400 px-2">
          Press Enter to search
        </div>
      )}
    </div>
  );
};

export default SearchBar;