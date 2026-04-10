import React from 'react';
import Hero from '../components/features/Hero';
import LatestWork from '../components/features/LatestWork';
import BlogPreview from '../components/features/BlogPreview';
import ContactSection from '../components/features/ContactSection';

const HomePage = ({ setCurrentPage, setSelectedPost }) => {
  return (
    <div className="pt-0">
      <Hero setCurrentPage={setCurrentPage} />
      <LatestWork setCurrentPage={setCurrentPage} />
      <BlogPreview
        setCurrentPage={setCurrentPage}
        setSelectedPost={setSelectedPost}
      />
      <ContactSection />
    </div>
  );
};

export default HomePage;
