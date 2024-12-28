'use client';

import React, { useEffect, useRef } from 'react';

interface StarBackgroundProps {
  starCount?: number;
  minSize?: number;
  maxSize?: number;
  animationDuration?: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({
  starCount = 100,
  minSize = 2,
  maxSize = 8,
  animationDuration = 5,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing stars
    containerRef.current.innerHTML = '';

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star: HTMLDivElement = document.createElement('div');

      // Add base styles
      star.className = 'absolute rounded-full bg-white opacity-0';
      star.style.animation = `twinkle ${animationDuration}s infinite`;

      // Random position
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;

      // Random delay
      star.style.animationDelay = `${Math.random() * animationDuration}s`;

      // Random size between minSize and maxSize
      const size: number = Math.random() * (maxSize - minSize) + minSize;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      containerRef.current.appendChild(star);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [starCount, minSize, maxSize, animationDuration]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed left-0 top-0 h-full w-full"
    ></div>
  );
};

export default StarBackground;
