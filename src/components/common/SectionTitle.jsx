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

  return (
    <div className={`mb-16 ${alignmentClasses[alignment]} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Variants for different use cases
SectionTitle.Large = ({ title, subtitle, alignment = 'center', className = '' }) => (
  <div className={`mb-20 ${alignment === 'center' ? 'text-center' : `text-${alignment}`} ${className}`}>
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
      {title}
    </h1>
    {subtitle && (
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
        {subtitle}
      </p>
    )}
  </div>
);

SectionTitle.Small = ({ title, subtitle, alignment = 'center', className = '' }) => (
  <div className={`mb-12 ${alignment === 'center' ? 'text-center' : `text-${alignment}`} ${className}`}>
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
      {title}
    </h3>
    {subtitle && (
      <p className="text-base text-gray-600 dark:text-gray-200 max-w-xl mx-auto leading-relaxed transition-colors duration-300">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;