import React from 'react'
import { useState, useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PostBlogPage from './pages/PostBlogPage';
import ProjectsPage from './pages/ProjectsPage';
import './styles/globals.css';



const App = () => {

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
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:text-gray-20">
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