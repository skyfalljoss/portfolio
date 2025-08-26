import React from "react";
import Button from "../ui/Button";

// Custom SVG Icons as React components
const ArrowRightIcon = ({ size = 16, className = "" }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

const GithubIcon = ({ size = 20, className = "" }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}

          <div class="flex items-center">
            <a
              href="/portfolio"
              class="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity py-2"
            >
              <span class="ml-2 text-xl font-bold ">PN</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className=" md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === item.id
                      ? "text-primary border-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>


          {/* Social Links & CTA */}
          <div className=" md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium "
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>

            {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
            <a href="#contact-info" >
              <Button variant="primary" size="sm">
                <span>Hire Me</span>
                <ArrowRightIcon size={16} />
              </Button>
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
