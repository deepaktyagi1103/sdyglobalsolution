import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Award, ArrowRight } from 'lucide-react';

const FeaturedPost = ({ post }) => {
  const postRef = useRef(null);

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

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={postRef}
      className="mb-16 transform translate-y-10 opacity-0 transition-all duration-700 ease-out"
    >
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-accent text-white rounded-full px-4 py-1 flex items-center text-sm font-semibold">
              <Award size={16} className="mr-1" />
              Featured
            </div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-primary" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <Link to={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-primary">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-slate-800 dark:text-white">{post.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{post.authorTitle}</p>
              </div>
            </div>
            
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300 group"
            >
              Read Full Article
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;