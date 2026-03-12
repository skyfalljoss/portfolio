import React from 'react'
import { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PostBlogPage from './pages/PostBlogPage';
import ProjectsPage from './pages/ProjectsPage';
import DarkBackground from './components/layout/DarkBackground';
import LightBackground from './components/layout/LightBackground';
import StartupAnimation from './components/ui/StartupAnimation';
import './styles/globals.css';

const App = () => {
  const [animationKey, setAnimationKey] = useState(0);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      setAnimationKey(prev => prev + 1);
    };



  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            setSelectedPost={setSelectedPost} 
          />
        );
      case 'about':
        return <AboutPage />;
      case 'blog':
        return (
          <BlogPage 
            setSelectedPost={setSelectedPost} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'postblog':
        return (
          <PostBlogPage 
            selectedPost={selectedPost} 
            setSelectedPost={setSelectedPost} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'projects':
        return <ProjectsPage setCurrentPage={setCurrentPage} />; 
      default:
        return (
          <HomePage 
            setCurrentPage={setCurrentPage} 
            setSelectedPost={setSelectedPost} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <StartupAnimation key={animationKey} isThemeSwitch={animationKey > 0} theme={theme} />
      <DarkBackground theme={theme} />
      <LightBackground theme={theme} />
      <Navigation
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;