import React from 'react';
import { Link } from 'react-router';
import { HiSpeakerphone } from 'react-icons/hi';
import useScrollTop from '../../hooks/useScrollTop';

const AnnouncementBanner = () => {
  const scrollToTop = useScrollTop();

  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2">
        <HiSpeakerphone />
          <span className='pe-1'>Skip the Rush, See Your Doctor </span>
        </div>
        <Link
          to="/doctors/today" 
          onClick={scrollToTop}
          className="text-secondary hover:text-white font-medium transition-colors duration-200"
        >
          Today.
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBanner; 