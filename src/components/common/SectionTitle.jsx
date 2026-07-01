import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const subtitleAlignmentClasses = {
    left: 'mx-0',
    center: 'mx-auto',
    right: 'ml-auto'
  };

  return (
    <div className={`mb-12 sm:mb-16 ${alignmentClasses[alignment]} ${className}`}>
      <h2 className="mb-4 text-3xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-200 sm:text-lg ${subtitleAlignmentClasses[alignment]}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Variants for different use cases
SectionTitle.Large = ({ title, subtitle, alignment = 'center', className = '' }) => (
  <div className={`mb-16 sm:mb-20 ${alignment === 'center' ? 'text-center' : `text-${alignment}`} ${className}`}>
    <h1 className="mb-5 text-4xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:mb-6 sm:text-5xl md:text-6xl">
      {title}
    </h1>
    {subtitle && (
      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-200 sm:text-xl md:text-2xl">
        {subtitle}
      </p>
    )}
  </div>
);

SectionTitle.Small = ({ title, subtitle, alignment = 'center', className = '' }) => (
  <div className={`mb-10 sm:mb-12 ${alignment === 'center' ? 'text-center' : `text-${alignment}`} ${className}`}>
    <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-3xl">
      {title}
    </h3>
    {subtitle && (
      <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-200 sm:text-base">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
