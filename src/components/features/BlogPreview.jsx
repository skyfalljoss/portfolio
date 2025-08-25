import React from 'react';
import SectionTitle from '../common/SectionTitle';
import BlogCard from '../common/BlogCard';
import Button from '../ui/Button';
import { blogPosts } from '../../data/BlogPosts.js';

// Custom SVG Icon as React component
const ArrowRightIcon = ({ size = 16, className = "" }) => (
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
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const BlogPreview = ({ setCurrentPage, setSelectedPost }) => {
  // Show only the first 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  const handleBlogClick = (post) => {
    setSelectedPost(post);
    setCurrentPage('postblog');
  };

  const handleViewAllPosts = () => {
    setCurrentPage('blog');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="From The Blog"
          subtitle="Thoughts, tutorials, and insights about web development, technology, and design"
        />

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <div key={post.id} className="animate-fade-in-up">
              <BlogCard
                post={post}
                onClick={() => handleBlogClick(post)}
              />
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleViewAllPosts}
          >
            <span>View All Posts</span>
            <ArrowRightIcon size={16} />
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Get notified when I publish new articles about web development, 
              design trends, and technology insights.
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
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
