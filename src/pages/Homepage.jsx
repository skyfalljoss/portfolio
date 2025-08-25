import React from 'react';
import Hero from '../components/features/Hero';
import LatestWork from '../components/features/LatestWork';
import BlogPreview from '../components/features/BlogPreview';
import ContactSection from '../components/features/ContactSection';

const HomePage = ({ setCurrentPage, setSelectedPost }) => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <Hero setCurrentPage={setCurrentPage} />
      
      {/* Latest Work Section */}
      <LatestWork setCurrentPage={setCurrentPage} />
      
      {/* Blog Preview Section */}
      <BlogPreview 
        setCurrentPage={setCurrentPage} 
        setSelectedPost={setSelectedPost} 
      />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;