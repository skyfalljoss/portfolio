import React from 'react';
import Card from '../ui/Card';
import {CalendarIcon, ClockIcon, ArrowRightIcon}  from '../icons/icons'
// Custom SVG Icons as React components

const BlogCard = ({ post, onClick, isSmall = false, showExcerpt = true }) => {
  if (isSmall) {
    return (
      <Card 
        hover={true} 
        padding="md"
        onClick={onClick}
        className="flex items-start space-x-4 group cursor-pointer"
      >
        <img 
          src={post.image} 
          alt={post.title}
          className="w-24 h-24 object-cover rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
            <CalendarIcon size={12} />
            <span>{post.date}</span>
            <span>•</span>
            <ClockIcon size={12} />
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          {showExcerpt && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {post.excerpt}
            </p>
          )}
        </div>
        <ArrowRightIcon 
          size={16} 
          className="text-gray-400 group-hover:text-primary transition-colors flex-shrink-0 mt-1" 
        />
      </Card>
    );
  }

  return (
    <Card hover={true} padding="none" onClick={onClick} className="group cursor-pointer">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-se backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {post.category || 'Development'}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <Card.Header>
          {/* Meta Information */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
            <CalendarIcon size={14} />
            <span>{post.date}</span>
            <span>•</span>
            <ClockIcon size={14} />
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Card.Header>

        <Card.Body>
          {showExcerpt && (
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}
        </Card.Body>

        <Card.Footer className="border-t-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {post.tags && post.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-primary group-hover:text-orange-600 transition-colors">
              <span className="text-sm font-medium">Read More</span>
              <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default BlogCard;
