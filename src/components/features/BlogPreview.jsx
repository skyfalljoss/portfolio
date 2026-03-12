import React from 'react';
import SectionTitle from '../common/SectionTitle';
import BlogCard from '../common/BlogCard';
import Button from '../ui/Button';
import { blogPosts } from '../../data/blogPosts.js';
import { ArrowRightIcon } from '../icons/icons.jsx'
import { motion } from 'framer-motion';


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
    <section className="py-20 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="From The Blog"
          subtitle="Thoughts, tutorials, and insights about web development, technology, and design"
        />

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            >
              <BlogCard
                post={post}
                onClick={() => handleBlogClick(post)}
              />
            </motion.div>
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
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-16 bg-white/80 dark:bg-slate-900/60 rounded-2xl p-8 md:p-12 shadow-lg backdrop-blur-md border border-gray-100 dark:border-white/10 transition-colors duration-300"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6 transition-colors duration-300">
            Get the latest articles on web development, design, and tech insights delivered straight to your inbox.
          </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-white/20 dark:focus:border-primary dark:bg-white/5 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors duration-300">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default BlogPreview;
