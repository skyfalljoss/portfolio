import React, { useRef } from 'react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo.js';
import {ArrowRightIcon, DownloadIcon} from '../icons/icons.jsx'
import { motion, useScroll, useTransform } from 'framer-motion';


const Hero = ({ setCurrentPage }) => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume.url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 30, 120, 350]);
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -120, -220, -300]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 0.8, 0]);

  const textX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -30, -120, -350]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -120, -220, -300]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 0.8, 0]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center pt-20 border-b border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <motion.div 
          className="space-y-6 animate-fade-in relative z-10"
          style={{ x: textX, y: textY, opacity: textOpacity }}
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Hello, I am{' '}
              <br />
              <span className="text-primary">{personalInfo.name}</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 font-medium transition-colors duration-300">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg transition-colors duration-300">
            {personalInfo.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 mb-8">
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
        </motion.div>

        {/* Image Side */}
        <div className="relative animate-fade-in-delay">
          <motion.div 
            className="relative z-10"
            style={{ x: imageX, y: imageY, opacity: imageOpacity }}
          >
            <img 
              src={personalInfo.heroImage}
              alt={personalInfo.name}
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl relative z-10"
            />
            {/* Ambient glow behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full mix-blend-multiply dark:mix-blend-screen transform scale-90"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
