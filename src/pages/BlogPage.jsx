import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import BlogCard from "../components/common/BlogCard";
import Button from "../components/ui/Button";
import { blogPosts } from "../data/blogPosts";
import ContactSection from "../components/features/ContactSection";

// Custom SVG Icons as React components
const SearchIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const FilterIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
  </svg>
);

const CalendarIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BlogPage = ({ setSelectedPost, setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Get unique categories from blog posts
  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category || "Development")),
  ];

  // Filter and sort blog posts
  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" ||
        (post.category || "Development") === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const handleBlogClick = (post) => {
    setSelectedPost(post);
    setCurrentPage("postblog");
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("newest");
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <SectionTitle
          title="Blog"
          subtitle="Thoughts, tutorials, and insights about web development, technology, and design"
        />

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4 ">
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <SearchIcon
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filter Summary */}
            {(searchTerm ||
              selectedCategory !== "all" ||
              sortBy !== "newest") && (
              <div className="flex items-center justify-between relative md:col-span-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mx-4">
                    Showing {filteredPosts.length} of {blogPosts.length}{" "}
                    articles
                  </span>
                  {searchTerm && <span>•Searching for "{searchTerm}"</span>}
                  {selectedCategory !== "all" && (
                    <span className="mx-4">• Category: {selectedCategory}</span>
                  )}
                  <Button className="mx-4" variant="secondary" size="sm" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
                </div>
                
              </div>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="animate-fade-in-up">
                <BlogCard post={post} onClick={() => handleBlogClick(post)} />
              </div>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-16">
            {/* <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon size={32} className="text-gray-400" />
            </div> */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <Button variant="primary" onClick={handleClearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Browse by Category
            </h3>
            <p className="text-gray-600">Explore articles by topic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => {
              const categoryPosts = blogPosts.filter(
                (post) => (post.category || "Development") === category
              );
              return (
                <div
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="bg-white rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {category}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {categoryPosts.length} article
                    {categoryPosts.length !== 1 ? "s" : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Article
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to get the latest articles about web development and technology 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div> */}
        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
