import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'md',
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300';
  
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' 
    : '';
    
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const cardClasses = `
    ${baseClasses} 
    ${hoverClasses} 
    ${paddingClasses[padding]} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div 
      className={cardClasses} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header Component
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

// Card Body Component
Card.Body = ({ children, className = '' }) => (
  <div className={`flex-1 ${className}`}>
    {children}
  </div>
);

// Card Footer Component
Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

// Card Image Component
Card.Image = ({ src, alt, className = '' }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-full h-48 object-cover ${className}`}
  />
);

export default Card;