import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Current page neighborhood
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    
    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    // Add ellipsis
    const result = [];
    let prevPage = null;
    
    for (const page of pages) {
      if (prevPage && page - prevPage > 1) {
        result.push('...');
      }
      result.push(page);
      prevPage = page;
    }
    
    return result;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center">
      <nav className="inline-flex items-center rounded-lg bg-white dark:bg-slate-800 shadow-md p-1" aria-label="Pagination">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-300 ${
            currentPage === 1
              ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft size={20} />
        </button>
        
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span 
              key={`ellipsis-${index}`} 
              className="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-slate-400"
            >
              &hellip;
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-md font-medium transition-all duration-300 ${
                currentPage === page
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        ))}
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-300 ${
            currentPage === totalPages
              ? 'text-slate-300 dark:text-slate-600 cursor-not-allowed'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
          aria-label="Next page"
        >
          <ChevronRight size={20} />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;