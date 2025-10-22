import React from 'react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo.js';
import {ArrowRightIcon, DownloadIcon} from '../icons/icons.jsx'


const Hero = ({ setCurrentPage }) => {
  const handleResumeDownload = () => {
    // Add resume download logic here
    // Create a temporary link element
    const link = document.createElement('a');
    // Set the path to your resume PDF file
    link.href = personalInfo.resume.url; // Update this path to your actual resume file
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`; // Optional: custom filename
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
    console.log('Downloading resume...');
  };
 

  return (
    <section className="min-h-screen flex items-center pt-20 border-b border-gray-200 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hello, I am{' '}
              <br />
              <span className="text-primary">{personalInfo.name}</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            {personalInfo.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => setCurrentPage('about')}
            >
              <span>Learn More</span>
              <ArrowRightIcon size={16} />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
            >
              <DownloadIcon size={16} />
              <span>Download Resume</span>
            </Button>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div> */}
        </div>

        {/* Image Side */}
        <div className="relative animate-fade-in-delay">
          <div className="relative z-10">
            <img 
              src={personalInfo.heroImage}
              alt={personalInfo.name}
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
