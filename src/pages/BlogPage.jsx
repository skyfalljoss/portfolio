import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import BlogCard from "../components/common/BlogCard";
import Button from "../components/ui/Button";
import { SearchIcon } from "../components/icons/icons";
import { blogPosts } from "../data/blogPosts";
import ContactSection from "../components/features/ContactSection";

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

  const hasActiveFilters =
    searchTerm || selectedCategory !== "all" || sortBy !== "newest";

  const activeFilters = [
    searchTerm ? `Search: ${searchTerm}` : null,
    selectedCategory !== "all" ? `Category: ${selectedCategory}` : null,
    sortBy !== "newest" ? `Sort: ${sortBy}` : null,
  ].filter(Boolean);

  return (
    <div className="pt-20 min-h-screen bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <SectionTitle
          title="Blog"
          subtitle="Thoughts, tutorials, and insights about web development, technology, and design"
        />

        {/* Search and Filter Section */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/75 p-5 shadow-lg backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/55 dark:shadow-2xl dark:shadow-slate-950/30 mb-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />

          <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_auto] lg:items-center">
            {/* Search Input */}
            <div className="relative">
              <SearchIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-gray-200/80 bg-white/80 py-3.5 pr-4 pl-11 text-gray-900 shadow-sm shadow-slate-200/50 transition-colors duration-300 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:shadow-none dark:placeholder:text-gray-500"
              />
            </div>

            {/* Filter Summary */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
              <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-200">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </span>

                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary transition-colors duration-300 dark:border-primary/30 dark:bg-primary/10 dark:text-primary-light"
                  >
                    {filter}
                  </span>
                ))}
              </div>

              {hasActiveFilters && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleClearFilters}
                  className="self-start rounded-xl border-primary/70 bg-primary/5 px-5 dark:bg-transparent lg:self-auto lg:shrink-0"
                >
                  Clear Filters
                </Button>
              )}
            </div>
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
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <Button variant="primary" onClick={handleClearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Featured Categories */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Browse by Category
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Explore articles by topic</p>
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
                  className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-lg p-6 text-center border border-gray-100 dark:border-white/10 cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {category}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {categoryPosts.length} article
                    {categoryPosts.length !== 1 ? "s" : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-white/10 p-8 md:p-12 shadow-lg transition-colors duration-300">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
