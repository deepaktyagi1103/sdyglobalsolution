import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // Number of categories to show before "More" button
  const visibleCategories = 4;
  
  // Categories to display based on screen size and showAllCategories state
  const displayedCategories = !showAllCategories 
    ? categories.slice(0, visibleCategories)
    : categories;

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.category-filter-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle screen resize to update visible categories
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowAllCategories(true);
      } else {
        setShowAllCategories(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative category-filter-container">
      {/* Mobile dropdown */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
        >
          <span className="flex items-center">
            <Filter size={16} className="mr-2" />
            <span>{activeCategory}</span>
          </span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                  category === activeCategory
                    ? 'bg-primary-light text-primary dark:bg-primary-dark/20 dark:text-primary-light font-medium'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop horizontal buttons */}
      <div className="hidden lg:flex flex-wrap items-center gap-2">
        {displayedCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              category === activeCategory
                ? 'bg-primary text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
        
        {!showAllCategories && categories.length > visibleCategories && (
          <button
            onClick={() => setShowAllCategories(true)}
            className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
          >
            More +
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;