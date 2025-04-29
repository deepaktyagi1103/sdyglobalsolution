import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Share2, Bookmark, BookmarkCheck } from 'lucide-react';

const BlogPostCard = ({ post }) => {
  const [saved, setSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const cardRef = useRef(null);
  const shareRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-y-0', 'opacity-100');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Close share menu when clicking outside
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSaved = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  const toggleShareMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowShareMenu(!showShareMenu);
  };

  const sharePost = (platform, e) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement actual sharing functionality here
    console.log(`Sharing to ${platform}: ${post.title}`);
    setShowShareMenu(false);
  };

  const getRandomDelay = () => {
    return Math.floor(Math.random() * 5) * 100; // 0, 100, 200, 300, or 400ms
  };

  return (
    <div
      ref={cardRef}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform translate-y-12 opacity-0"
      style={{ transitionDelay: `${getRandomDelay()}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={toggleSaved}
            className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors duration-300"
            aria-label={saved ? "Unsave post" : "Save post"}
          >
            {saved ? <BookmarkCheck size={18} className="text-primary" /> : <Bookmark size={18} />}
          </button>
          
          <div ref={shareRef} className="relative">
            <button
              onClick={toggleShareMenu}
              className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              aria-label="Share post"
            >
              <Share2 size={18} />
            </button>
            
            {showShareMenu && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-10 overflow-hidden">
                {['Twitter', 'Facebook', 'LinkedIn', 'Email'].map((platform) => (
                  <button
                    key={platform}
                    onClick={(e) => sharePost(platform, e)}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {post.isPopular && (
          <div className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-3">
          <span className="bg-primary-light text-primary dark:bg-primary-dark/30 dark:text-primary-light px-3 py-1 rounded-full">
            {post.category}
          </span>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{post.date.split(' ')[0]}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime} min</span>
            </div>
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-8 h-8 rounded-full mr-2 object-cover border border-slate-200 dark:border-slate-700"
            />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {post.author}
            </span>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="text-primary font-semibold text-sm hover:underline flex items-center"
          >
            Read More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;