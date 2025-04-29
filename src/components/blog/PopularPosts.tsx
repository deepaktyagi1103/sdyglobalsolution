import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ChevronRight, ChevronLeft } from 'lucide-react';

const PopularPosts = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  // Popular posts data
  const popularPosts = [
    {
      id: 1,
      title: "5 Common Mistakes to Avoid in Your BIS Certification Application",
      category: "BIS Certification",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop",
      slug: "bis-certification-mistakes",
      readTime: 8
    },
    {
      id: 2,
      title: "How Recent Policy Changes Impact Food Product Registration",
      category: "FSSAI",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1374&auto=format&fit=crop",
      slug: "policy-changes-food-registration",
      readTime: 6
    },
    {
      id: 3,
      title: "The Complete Guide to ISO 9001:2025 Changes",
      category: "ISO",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
      slug: "iso-9001-changes",
      readTime: 10
    },
    {
      id: 4,
      title: "EPR Compliance: What You Need to Know for 2025",
      category: "EPR",
      image: "https://images.unsplash.com/photo-1532290285050-08aa443147ae?q=80&w=1374&auto=format&fit=crop",
      slug: "epr-compliance-2025",
      readTime: 7
    },
    {
      id: 5,
      title: "Understanding New Testing Requirements for Electronics",
      category: "Testing",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1374&auto=format&fit=crop",
      slug: "electronics-testing-requirements",
      readTime: 5
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-y-0', 'opacity-100');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="mb-16 transform translate-y-10 opacity-0 transition-all duration-700 ease-out"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <TrendingUp size={20} className="text-accent mr-2" />
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            Popular Articles
          </h2>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-4 scrollbar-hide snap-x gap-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {popularPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="flex-shrink-0 w-64 md:w-80 group snap-start"
          >
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="h-32 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-slate-800/90 text-xs font-medium py-1 px-2 rounded-full">
                  {post.readTime} min read
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-primary font-medium mb-2">
                  {post.category}
                </div>
                <h3 className="text-slate-800 dark:text-white font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;