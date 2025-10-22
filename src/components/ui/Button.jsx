import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center space-x-2 font-medium rounded-lg transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-600',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    outline: 'border border-gray-300 text-gray-700 hover:border-primary hover:text-primary focus:ring-primary',
    ghost: 'text-gray-600 hover:text-primary hover:bg-gray-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : '';

  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${disabledClasses} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;