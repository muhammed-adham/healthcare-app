import React from 'react';
import { Link } from 'react-router';
import useScrollTop from '../../hooks/useScrollTop';

const HelpSection = () => {
  const scrollToTop = useScrollTop();

  return (
    <div className="flex justify-between items-center text-center bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-wrap flex-grow items-end">
        <div className="text-xl font-bold mr-2">Have questions?</div>
        <div className="text-sm text-gray-600">Get help online or contact us</div>
      </div>
      <Link 
        to="/help-center" 
        onClick={scrollToTop}
        className="flex-shrink-0 bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-black transition-colors duration-200 flex items-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16" 
          className="mr-2"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M8 14.4A6.4 6.4 0 1 0 8 1.6a6.4 6.4 0 0 0 0 12.8zm0-7.793a1.084 1.084 0 1 1 0-2.168 1.084 1.084 0 0 1 0 2.168zm1.135 4.696h-2.27a.31.31 0 0 1-.31-.31v-.619a.31.31 0 0 1 .31-.31h.31v-1.65h-.31a.31.31 0 0 1-.31-.31v-.619a.31.31 0 0 1 .31-.31h1.651a.31.31 0 0 1 .31.31v2.58h.31a.31.31 0 0 1 .31.31v.62a.31.31 0 0 1-.31.31z"
          />
        </svg>
        Visit the Help center
      </Link>
    </div>
  );
};

export default HelpSection; 