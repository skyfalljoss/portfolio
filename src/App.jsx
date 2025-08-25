import React from 'react'
import { useState } from 'react';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import PostBlogPage from './pages/PostBlogPage';
import './styles/globals.css';

// const App = () => {
//   return (
//     <div class ="flex justify-center items-center h-screen">
//        <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//     </div>
//   )
// }

// export default App

const App = () => {
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
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;