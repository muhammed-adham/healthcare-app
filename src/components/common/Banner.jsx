import React from 'react';
import { Link, useLocation } from 'react-router';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import useScrollTop from '../../hooks/useScrollTop';

const Banner = ({ title, subtitle }) => {
  const location = useLocation();
  const scrollToTop = useScrollTop();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const getBreadcrumbLabel = (segment) => {
    const labels = {
      '': 'Home',
      'about': 'About',
      'doctors': 'Doctors',
      'appointments': 'Appointments',
      'contact': 'Contact',
      'help': 'Help',
      'insurance': 'Insurance',
      'resources': 'Resources',
      'health-professional': 'Health Professional',
      'login': 'Login'
    };
    return labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <div className="bg-primary text-white py-40">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-lg text-white/80">{subtitle}</p>}
          
          {/* Breadcrumbs */}
          <nav className="mt-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-white/80 hover:text-white">
                  <FaHome className="h-4 w-4" />
                </Link>
              </li>
              {pathSegments.map((segment, index) => (
                <li key={segment} className="flex items-center">
                  <FaChevronRight className="h-3 w-3 text-white/60 mx-2" />
                  {index === pathSegments.length - 1 ? (
                    <span className="text-white font-medium">
                      {getBreadcrumbLabel(segment)}
                    </span>
                  ) : (
                    <Link
                      to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                      onClick={scrollToTop}
                      className="text-white/80 hover:text-white"
                    >
                      {getBreadcrumbLabel(segment)}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Banner; 