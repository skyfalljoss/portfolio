import React from 'react';
import Card from '../ui/Card';
import {CalendarIcon, ClockIcon, ArrowRightIcon} from '../icons/icons';

const BlogCard = ({ post, onClick, isSmall = false, showExcerpt = true }) => {
  if (isSmall) {
    return (
      <Card
        hover={true}
        padding="md"
        onClick={onClick}
        className="group cursor-pointer"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <img
            src={post.image}
            alt={post.title}
            className="h-40 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24 sm:flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex flex-wrap items-center gap-2 text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:mb-2 sm:text-sm">
              <CalendarIcon size={12} />
              <span>{post.date}</span>
              <span aria-hidden="true">&middot;</span>
              <ClockIcon size={12} />
              <span>{post.readTime}</span>
            </div>
            <h3 className="mb-1.5 text-[15px] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary-light sm:mb-2 sm:text-lg">
              {post.title}
            </h3>
            {showExcerpt && (
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-200">
                {post.excerpt}
              </p>
            )}
          </div>
          <ArrowRightIcon
            size={16}
            className="mt-1 self-end text-gray-400 transition-colors group-hover:text-primary sm:self-auto"
          />
        </div>
      </Card>
    );
  }

  return (
    <Card hover={true} padding="none" onClick={onClick} className="group cursor-pointer flex flex-col h-full">
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
        />
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm transition-colors duration-300 dark:bg-black/60 dark:text-gray-200 sm:px-3 sm:text-sm">
            {post.category || 'Development'}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <Card.Header className="mb-2 sm:mb-3">
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:mb-2 sm:text-sm">
              <CalendarIcon size={14} />
              <span>{post.date}</span>
              <span aria-hidden="true">&middot;</span>
              <ClockIcon size={14} />
              <span>{post.readTime}</span>
            </div>

            <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary-light sm:mb-2 sm:text-[18px] leading-tight">
              {post.title}
            </h3>
          </Card.Header>

          <Card.Body className="mb-4">
            {showExcerpt && (
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
                {post.excerpt}
              </p>
            )}
          </Card.Body>
        </div>

        <Card.Footer className="mt-auto">
          <div className="flex flex-row items-center justify-between gap-4 w-full">
            <div className="flex flex-wrap items-center gap-1.5 min-w-0">
              {post.tags && post.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 dark:bg-white/10 dark:text-gray-200 sm:px-3 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 px-4 py-1.5 border-2 border-primary text-primary rounded-lg font-medium text-sm transition-all duration-200 group-hover:bg-primary group-hover:text-white whitespace-nowrap flex-shrink-0">
              <span>Read More</span>
              <ArrowRightIcon size={13} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default BlogCard;
