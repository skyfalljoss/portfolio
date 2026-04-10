import React from 'react';
import BlogCard from '../components/common/BlogCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  Share2Icon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from '../components/icons/icons';
import { blogPosts } from '../data/blogPosts';
import ContactSection from '../components/features/ContactSection';

const PostBlogPage = ({ selectedPost, setSelectedPost, setCurrentPage }) => {
  if (!selectedPost) {
    return (
      <div className="pt-20 min-h-screen bg-transparent transition-colors duration-300 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">No post selected</h2>
          <Button
            variant="primary"
            onClick={() => setCurrentPage('blog')}
          >
            Go back to blog
          </Button>
        </div>
      </div>
    );
  }

  const otherPosts = blogPosts.filter(post => post.id !== selectedPost.id).slice(0, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = selectedPost.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="pt-20 bg-transparent min-h-screen transition-colors duration-300">
      {/* Article Header */}
      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={() => setCurrentPage('blog')}
            className="inline-flex items-center space-x-2 text-primary hover:text-orange-600 transition-colors mb-6"
          >
            <ArrowLeftIcon size={16} />
            <span>Back to Blog</span>
          </button>

          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <CalendarIcon size={14} />
              <span>{selectedPost.date}</span>
              <span>•</span>
              <ClockIcon size={14} />
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                {selectedPost.category || 'Development'}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-colors duration-300">
              {selectedPost.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              {selectedPost.excerpt}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 mr-2">Share:</span>
              <button
                onClick={() => handleShare('twitter')}
                className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <TwitterIcon size={14} />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FacebookIcon size={14} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <LinkedinIcon size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-12" id ="introduction">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Featured Image */}
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
            />

            {/* Article Body */}
            <div className="prose prose-lg max-w-none" id="conclusion">
              {selectedPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg transition-colors duration-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors duration-300" >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {selectedPost.tags && selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Share2Icon size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Share this article</span>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <Card padding="md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#introduction" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300">
                      Introduction
                    </a>
                  </li>
                </ul>
              </Card>

              {/* Author Info */}
              <Card padding="md">
                <div className="text-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/583231?v=4"
                    alt="Phong Nguyen"
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Phong Nguyen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                    A software engineer based in Tampa Florida.
                  </p>
                </div>
              </Card>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Comments</h2>
          <Card padding="lg">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Share2Icon size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Join the Discussion</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                Share your thoughts and connect with other developers in the comments below.
              </p>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" >
                  Add Comment
                </Button>
              </a>
              
            </div>
          </Card>
        </div>
        <div className="mt-16 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-gray-100 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-lg transition-colors duration-300">
            <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default PostBlogPage;
