import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo.js';
import {ArrowRightIcon, DownloadIcon} from '../icons/icons.jsx'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';


const Hero = ({ setCurrentPage }) => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isCompactLayout, setIsCompactLayout] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const handleChange = (event) => {
      setIsCompactLayout(event.matches);
    };

    setIsCompactLayout(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume.url;
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const disableParallax = prefersReducedMotion || isCompactLayout;

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    disableParallax ? [0, 0, 0, 0] : [0, 30, 120, 350]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    disableParallax ? [0, 0, 0, 0] : [0, -120, -220, -300]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    disableParallax ? [1, 1, 1] : [1, 0.8, 0]
  );

  const textX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    disableParallax ? [0, 0, 0, 0] : [0, -30, -120, -350]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    disableParallax ? [0, 0, 0, 0] : [0, -120, -220, -300]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9],
    disableParallax ? [1, 1, 1] : [1, 0.8, 0]
  );

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center border-b border-gray-200 pt-24 pb-14 transition-colors duration-300 dark:border-white/10 sm:pb-16 md:pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-6">
        <motion.div
          className="order-2 relative z-10 space-y-6 text-center animate-fade-in md:order-1 md:text-left"
          style={{ x: textX, y: textY, opacity: textOpacity }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-5xl md:text-6xl">
              Hello, I am{' '}
              <br />
              <span className="text-primary">{personalInfo.name}</span>.
            </h1>
            <p className="text-lg font-medium text-gray-600 transition-colors duration-300 dark:text-gray-200 sm:text-xl md:text-2xl">
              {personalInfo.title}
            </p>
          </div>

          <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-lg md:mx-0">
            {personalInfo.heroDescription}
          </p>

          <div className="mb-6 flex flex-col gap-3 pt-2 sm:mb-8 sm:flex-row sm:justify-center sm:gap-4 sm:pt-4 md:justify-start">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setCurrentPage('about')}
              className="w-full sm:w-auto"
            >
              <span>Learn More</span>
              <ArrowRightIcon size={16} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleResumeDownload}
              className="w-full sm:w-auto"
            >
              <DownloadIcon size={16} />
              <span>Download Resume</span>
            </Button>
          </div>
        </motion.div>

        <div className="order-1 mx-auto w-full max-w-sm animate-fade-in-delay sm:max-w-md md:order-2">
          <motion.div
            className="relative z-10"
            style={{ x: imageX, y: imageY, opacity: imageOpacity }}
          >
            <img
              src={personalInfo.heroImage}
              alt={personalInfo.name}
              className="relative z-10 mx-auto w-full rounded-2xl object-cover shadow-2xl md:max-w-md"
            />
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl mix-blend-multiply transform scale-90 dark:mix-blend-screen"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
