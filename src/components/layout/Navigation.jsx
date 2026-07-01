import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import logo from '../../assets/images/logo.png';
import ThemeSwitcher from "../ui/ThemeSwitcher";
import {ArrowRightIcon, GithubIcon, LinkedinIcon, MenuIcon, XIcon} from "../icons/icons"


const Navigation = ({ currentPage, setCurrentPage, theme, toggleTheme}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "blog", label: "Blog" },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event) => {
      setIsDesktop(event.matches);
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    setIsDesktop(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-slate-50/80 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/72">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {isDesktop ? (
            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
              <div className="flex items-center">
                <a
                  href="#"
                  onClick={() => handleNavClick('home')}
                  className="flex items-center py-2 transition-opacity hover:opacity-80"
                >
                  <img
                    src={logo}
                    alt="PN Logo"
                    className="h-10 w-auto sm:h-12 md:ml-2"
                  />
                </a>
              </div>

              <div className="flex items-center justify-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                      currentPage === item.id
                        ? "text-primary"
                        : "text-gray-900 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-end space-x-2">
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                <a
                  href="https://github.com/skyfalljoss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-900 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/phong-nguyen-3467a5207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-900 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary"
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
            </div>
          ) : (
            <div className="flex w-full items-center justify-between">
              <a
                href="#"
                onClick={() => handleNavClick('home')}
                className="flex items-center py-2 transition-opacity hover:opacity-80"
              >
                <img
                  src={logo}
                  alt="PN Logo"
                  className="h-10 w-auto"
                />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-900 transition-colors hover:text-primary focus:outline-none dark:text-gray-200 dark:hover:text-primary"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          )}
        </div>
      </div>

      {!isDesktop && isMenuOpen && (
        <div className="px-4 pb-4" id="mobile-menu">
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-slate-50/90 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/82">
            <div className="space-y-1 border-t border-gray-200 px-3 pt-2 pb-3 dark:border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    currentPage === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-gray-900 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 py-4 dark:border-white/10">
              <div className="flex items-center justify-center gap-4">
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                <a
                  href="https://github.com/skyfalljoss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-900 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/phong-nguyen-3467a5207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-900 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={24} />
                </a>
              </div>
              <div className="mt-4">
                <a href="#contact-info" onClick={() => setIsMenuOpen(false)} className="block">
                  <Button variant="primary" size="md" className="w-full">
                    <span>Hire Me</span>
                    <ArrowRightIcon size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
