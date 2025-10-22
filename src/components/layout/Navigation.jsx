import React, { useState } from "react";
import Button from "../ui/Button";
import logo from '../../assets/images/logo.png';
import ThemeSwitcher from "../ui/ThemeSwitcher";
import {ArrowRightIcon, GithubIcon, LinkedinIcon, MenuIcon, XIcon} from "../icons/icons"


const Navigation = ({ currentPage, setCurrentPage, theme, toggleTheme}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-700 dark:bg-primary ">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={() => handleNavClick('home')}
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity py-2"
            >
              {/* <span className="ml-2 text-xl font-bold">PN</span> */}
              <img 
                src={logo}
                alt="PN Logo"
                className="h-12 w-auto ml-2"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:!block md:items-center ml-10">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-semibold ${
                    currentPage === item.id
                      ? "text-primary border-primary"
                      : " hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="hidden md:!flex items-center space-x-2">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>
            <a href="#contact-info">
              <Button variant="primary" size="sm">
                <span>Hire Me</span>
                <ArrowRightIcon size={16} />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? "bg-primary/10 text-primary"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t dark:border-gray-700">
            <div className="flex items-center justify-center px-5 space-x-4">
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
            <div className="mt-3 px-2">
                <a href="http://localhost:5173/portfolio#contact-info" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="primary" size="md" className="w-full">
                        <span>Hire Me</span>
                        <ArrowRightIcon size={16} />
                    </Button>
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;