import React, { useCallback, useEffect, useRef, useState } from 'react';

const INITIAL_PRELOAD_COUNT = 14;
const PRELOAD_WINDOW_BEHIND = 8;
const PRELOAD_WINDOW_AHEAD = 14;
const FRAME_EASING = 0.14;
const FRAME_SETTLE_THRESHOLD = 0.02;
const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const preloadedFrameSources = new Set();
const loadedFrameSources = new Set();

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getScrollProgress = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 0;
  }

  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollRange <= 0) {
    return 0;
  }

  return clamp(window.scrollY / scrollRange, 0, 1);
};

const getFrameIndexFromScroll = (frameCount) => {
  if (frameCount <= 1) {
    return 0;
  }

  return Math.round(getScrollProgress() * (frameCount - 1));
};

const getInitialReducedMotionPreference = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(MOTION_QUERY).matches;
};

const preloadFrame = (src) => {
  if (!src || preloadedFrameSources.has(src) || typeof Image === 'undefined') {
    return;
  }

  preloadedFrameSources.add(src);

  const image = new Image();
  image.decoding = 'async';
  image.loading = 'eager';
  image.onload = () => {
    loadedFrameSources.add(src);
  };
  image.src = src;
};

const preloadFrameRange = (frames, startIndex, endIndex) => {
  for (let index = startIndex; index <= endIndex; index += 1) {
    const frameSource = frames[index];

    if (frameSource) {
      preloadFrame(frameSource);
    }
  }
};

const ScrollFrameSequence = ({ frames, className }) => {
  const frameCount = frames.length;
  const initialFrameIndex = getFrameIndexFromScroll(frameCount);

  const [isReducedMotion, setIsReducedMotion] = useState(getInitialReducedMotionPreference);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(initialFrameIndex);
  const [activeLayer, setActiveLayer] = useState(0);
  const [layerSources, setLayerSources] = useState(() => {
    const initialSource = frames[initialFrameIndex] ?? '';

    if (initialSource) {
      loadedFrameSources.add(initialSource);
      preloadedFrameSources.add(initialSource);
    }

    return [initialSource, initialSource];
  });

  const animationFrameRef = useRef(null);
  const targetIndexRef = useRef(initialFrameIndex);
  const currentValueRef = useRef(initialFrameIndex);
  const committedIndexRef = useRef(initialFrameIndex);
  const pendingIndexRef = useRef(null);
  const activeLayerRef = useRef(0);
  const latestFramesRef = useRef(frames);
  const latestReducedMotionRef = useRef(isReducedMotion);

  useEffect(() => {
    latestFramesRef.current = frames;
  }, [frames]);

  useEffect(() => {
    latestReducedMotionRef.current = isReducedMotion;
  }, [isReducedMotion]);

  const commitFrame = useCallback((nextIndex) => {
    const normalizedIndex = clamp(nextIndex, 0, frameCount - 1);
    const nextSource = frames[normalizedIndex];

    if (!nextSource) {
      return;
    }

    if (latestReducedMotionRef.current) {
      activeLayerRef.current = 0;
      pendingIndexRef.current = null;
      committedIndexRef.current = normalizedIndex;
      setLayerSources([nextSource, nextSource]);
      setActiveLayer(0);
      setCurrentFrameIndex(normalizedIndex);
      return;
    }

    const nextLayer = activeLayerRef.current === 0 ? 1 : 0;

    pendingIndexRef.current = normalizedIndex;
    setLayerSources((previousSources) => {
      if (previousSources[nextLayer] === nextSource) {
        return previousSources;
      }

      const nextSources = [...previousSources];
      nextSources[nextLayer] = nextSource;
      return nextSources;
    });

    activeLayerRef.current = nextLayer;
    committedIndexRef.current = normalizedIndex;
    setActiveLayer(nextLayer);
    setCurrentFrameIndex(normalizedIndex);
    pendingIndexRef.current = null;
  }, [frameCount, frames]);

  const requestFrameCommit = useCallback((nextIndex) => {
    if (!frameCount) {
      return;
    }

    const normalizedIndex = clamp(nextIndex, 0, frameCount - 1);

    if (normalizedIndex === committedIndexRef.current || normalizedIndex === pendingIndexRef.current) {
      return;
    }

    const nextSource = latestFramesRef.current[normalizedIndex];

    if (!nextSource) {
      return;
    }

    if (loadedFrameSources.has(nextSource) || latestReducedMotionRef.current) {
      commitFrame(normalizedIndex);
      return;
    }

    pendingIndexRef.current = normalizedIndex;

    const image = new Image();
    image.decoding = 'async';
    image.loading = 'eager';
    image.onload = () => {
      loadedFrameSources.add(nextSource);
      preloadedFrameSources.add(nextSource);

      if (pendingIndexRef.current === normalizedIndex) {
        commitFrame(normalizedIndex);
      }
    };
    image.src = nextSource;
  }, [commitFrame, frameCount]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(MOTION_QUERY);

    const handleChange = (event) => {
      setIsReducedMotion(event.matches);
    };

    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!frameCount) {
      return undefined;
    }

    const syncFrameToScroll = () => {
      const nextIndex = getFrameIndexFromScroll(frameCount);

      targetIndexRef.current = nextIndex;

      if (isReducedMotion) {
        return;
      }

      if (animationFrameRef.current !== null) {
        return;
      }

      const animate = () => {
        const delta = targetIndexRef.current - currentValueRef.current;

        if (Math.abs(delta) <= FRAME_SETTLE_THRESHOLD) {
          currentValueRef.current = targetIndexRef.current;
        } else {
          currentValueRef.current += delta * FRAME_EASING;
        }

        const roundedIndex = clamp(
          Math.round(currentValueRef.current),
          0,
          frameCount - 1
        );

        requestFrameCommit(roundedIndex);

        if (Math.abs(targetIndexRef.current - currentValueRef.current) <= FRAME_SETTLE_THRESHOLD) {
          animationFrameRef.current = null;
          return;
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const currentScrollIndex = getFrameIndexFromScroll(frameCount);

    targetIndexRef.current = currentScrollIndex;
    currentValueRef.current = currentScrollIndex;
    requestFrameCommit(currentScrollIndex);

    if (isReducedMotion) {
      return undefined;
    }

    window.addEventListener('scroll', syncFrameToScroll, { passive: true });
    window.addEventListener('resize', syncFrameToScroll);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      window.removeEventListener('scroll', syncFrameToScroll);
      window.removeEventListener('resize', syncFrameToScroll);
    };
  }, [frameCount, isReducedMotion, requestFrameCommit]);

  useEffect(() => {
    if (!frameCount) {
      return;
    }

    preloadFrame(frames[0]);
    preloadFrameRange(frames, 1, Math.min(frameCount - 1, INITIAL_PRELOAD_COUNT - 1));
  }, [frameCount, frames]);

  useEffect(() => {
    if (!frameCount) {
      return;
    }

    const startIndex = Math.max(0, currentFrameIndex - PRELOAD_WINDOW_BEHIND);
    const endIndex = Math.min(frameCount - 1, currentFrameIndex + PRELOAD_WINDOW_AHEAD);

    preloadFrameRange(frames, startIndex, endIndex);
  }, [currentFrameIndex, frameCount, frames]);

  if (!frameCount) {
    return null;
  }

  return (
    <>
      <img
        src={layerSources[0]}
        alt=""
        aria-hidden="true"
        className={`${className} transition-opacity duration-150 ease-linear ${activeLayer === 0 ? 'opacity-100' : 'opacity-0'}`}
        decoding="async"
        fetchPriority="high"
        loading="eager"
        draggable={false}
      />
      <img
        src={layerSources[1]}
        alt=""
        aria-hidden="true"
        className={`${className} transition-opacity duration-150 ease-linear ${activeLayer === 1 ? 'opacity-100' : 'opacity-0'}`}
        decoding="async"
        fetchPriority="high"
        loading="eager"
        draggable={false}
      />
    </>
  );
};

export default ScrollFrameSequence;
