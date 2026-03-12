import React, { useEffect, useState, useRef } from 'react';

// Use Vite's glob import to get all frames
const frameModules = import.meta.glob('../../assets/images/dark-bg/*.jpg', { eager: true, query: '?url', import: 'default' });
const frameUrls = Object.keys(frameModules)
  .sort()
  .map(key => frameModules[key]);

const DarkBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload frames
  useEffect(() => {
    if (theme !== 'dark') return;

    let loadedCount = 0;
    const images = [];

    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        // Allow rendering even if a frame fails, but we ideally wait for all
        if (loadedCount === frameUrls.length) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameUrls.length) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images[i] = img;
    });
  }, [theme]);

  // Handle scroll and render
  useEffect(() => {
    if (theme !== 'dark' || !imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    // WillReadFrequently is often recommended for these types of scrubbing canvases to reduce memory overhead
    const context = canvas.getContext('2d', { willReadFrequently: true });

    const render = (index) => {
      const img = imagesRef.current[index];
      if (!img || !img.width) return;

      // Ensure canvas internal resolution matches device pixel ratio for sharpness
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      // Calculate object-cover scale
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;
      
      const frameIndex = Math.min(
        Math.max(Math.floor(scrollFraction * frameUrls.length), 0),
        frameUrls.length - 1
      );
      
      requestAnimationFrame(() => render(frameIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial render
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [theme, imagesLoaded]);

  if (theme !== 'dark') return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
      {!imagesLoaded ? (
        <div className="absolute inset-0 w-full h-full bg-slate-900 transition-colors duration-500" />
      ) : (
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full animate-fade-in"
          style={{ objectFit: 'cover' }}
        />
      )}
      {/* Overlay to ensure text legibility without blurring the animation */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default DarkBackground;
