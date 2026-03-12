import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const StartupAnimation = ({ theme, onComplete, isThemeSwitch }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only play animation once per session, UNLESS it's a theme switch
    const hasPlayed = sessionStorage.getItem('startupAnimationPlayed');
    
    if (hasPlayed && !isThemeSwitch) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    sessionStorage.setItem('startupAnimationPlayed', 'true');

    if (theme === 'dark') {
      // Fireworks for dark mode
      const duration = 1.5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
      }, 250);

      // Hide overlay after fireworks
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, duration + 500);

    } else {
      // Sunrise for light mode - timing handled by Framer Motion in the JSX, 
      // but we need to unmount the overlay.
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 10000); // 10 seconds total for sunrise
    }
  }, [theme, onComplete, isThemeSwitch]);

  if (!isVisible && theme === 'dark') return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="startup-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden`}
        >
          {theme === 'light' && (
            <>
              {/* Sun */}
              <motion.div
                initial={{ y: "100vh", scale: 0.5, opacity: 0 }}
                animate={{ 
                  y: ["100vh", "0vh", "0vh", "0vh"], 
                  scale: [0.5, 1.5, 1.5, 1.5], 
                  opacity: [0, 1, 1, 0],
                  backgroundColor: ["#ff7e5f", "#feb47b", "#ffdd00", "#ffdd00"]
                }}
                transition={{ 
                  duration: 10, 
                  times: [0, 0.3, 0.8, 1],
                  ease: "easeOut"
                }}
                className="w-48 h-48 rounded-full shadow-[0_0_100px_40px_rgba(255,165,0,0.6)]"
              />
              
              {/* Ground / Horizon Line to make sunrise look better */}
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: ["100%", "50%", "50%", "50%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 10, times: [0, 0.3, 0.8, 1], ease: "easeOut" }}
                className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-400/20 to-transparent"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartupAnimation;
