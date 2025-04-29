import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogPostCard from "../components/blog/BlogPostCard";
import CategoryFilter from "../components/blog/CategoryFilter";
import SearchBar from "../components/blog/SearchBar";
import Newsletter from "../components/blog/Newsletter";
import Pagination from "../components/blog/Pagination";
import PopularPosts from "../components/blog/PopularPosts";
import { blogPosts, featuredPost } from "../data/blogPosts";

const Blog = () => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Categories for filter
  const categories = ["All", "BIS Certification", "FSSAI", "ISO", "EPR", "Testing"];

  // Filter posts by category and search query
  useEffect(() => {
    let result = blogPosts;
    
    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeCategory, searchQuery]);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of posts section
    document.getElementById("posts-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <BlogHero />

      {/* Main Content */}
      <section className="py-16" id="posts-section">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange} 
            />
          </div>

          {/* Featured Post */}
          <FeaturedPost post={featuredPost} />

          {/* Popular Posts */}
          <PopularPosts />

          {/* Results Summary */}
          <div className="mb-8 text-gray-600 dark:text-gray-300">
            {filteredPosts.length === 0 ? (
              <p className="text-center py-8">No posts found matching your criteria. Try adjusting your filters.</p>
            ) : (
              <p>Showing {indexOfFirstPost + 1} - {Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles</p>
            )}
          </div>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Blog;