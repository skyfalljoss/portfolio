import React from 'react';
import BlogCard from '../components/common/BlogCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { blogPosts } from '../data/blogPosts';
import ContactSection from '../components/features/ContactSection';

// Custom SVG Icons as React components
const ArrowLeftIcon = ({ size = 16, className = "" }) => (
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
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

const CalendarIcon = ({ size = 14, className = "" }) => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ClockIcon = ({ size = 14, className = "" }) => (
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
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const Share2Icon = ({ size = 16, className = "" }) => (
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
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);

const BookmarkIcon = ({ size = 16, className = "" }) => (
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
    <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);

const TwitterIcon = ({ size = 14, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const FacebookIcon = ({ size = 14, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = ({ size = 14, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const PostBlogPage = ({ selectedPost, setSelectedPost, setCurrentPage }) => {
  if (!selectedPost) {
    return (
      <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No post selected</h2>
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

  // Get other posts excluding the current one
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

  const handleBookmark = () => {
    // Add bookmark functionality
    console.log('Bookmark added');
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Article Header */}
      <div className="bg-white border-b border-gray-200">
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

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {selectedPost.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {selectedPost.excerpt}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* <Button
                variant="outline"
                size="sm"
                onClick={handleBookmark}
              >
                <BookmarkIcon size={16} />
                <span>Bookmark</span>
              </Button> */}
            </div>

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
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200" >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {selectedPost.tags && selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Share2Icon size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Share this article</span>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <Card padding="md">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#introduction" className="text-gray-600 hover:text-primary transition-colors">
                      Introduction
                    </a>
                  </li>
                  {/* <li>
                    <a href="#getting-started" className="text-gray-600 hover:text-primary transition-colors">
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a href="#best-practices" className="text-gray-600 hover:text-primary transition-colors">
                      Best Practices
                    </a>
                  </li>
                  <li>
                    <a href="#conclusion" className="text-gray-600 hover:text-primary transition-colors">
                      Conclusion
                    </a>
                  </li> */}
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
                  <h4 className="font-semibold text-gray-900 mb-2">Phong Nguyen</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A software engineer based in Tampa Florida.
                  </p>
                  {/* <Button variant="outline" size="sm" className="w-full">
                    Follow
                  </Button> */}
                </div>
              </Card>

              {/* Newsletter */}
              {/* <Card padding="md" className="bg-primary/5">
                <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="primary" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card> */}
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
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
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>
          <Card padding="lg">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2Icon size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join the Discussion</h3>
              <p className="text-gray-600 mb-6">
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
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default PostBlogPage;
