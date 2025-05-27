'use client';

import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - windowHeight;
      const scrollPercentage = (scrollTop / totalScrollable) * 100;
      
      setScrollProgress(scrollPercentage);
      setIsVisible(scrollTop > 300); // Show button after scrolling down 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-6 lg:right-6 cursor-pointer bg-secondary w-12 h-12 rounded-full  //shadow-md flex items-center justify-center transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      style={{
        //background: 'transparent',
        //boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">

        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="2"
            className="dark:stroke-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#4ade80"
            strokeWidth="3"
            strokeDasharray="289.02652413026095"
            strokeDashoffset={289.02652413026095 - (289.02652413026095 * scrollProgress) / 100}
            className="transition-all duration-200"
          />
        </svg>
        <FiArrowUp className="text-green-500 w-5 h-5 z-10" />
      </div>
    </button>
  );
};

export default ScrollToTop;