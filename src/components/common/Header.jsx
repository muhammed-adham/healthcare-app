import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { FaBars, FaTimes, FaUser, FaCalendarAlt, FaUserMd } from "react-icons/fa";
import useScrollTop from '../../hooks/useScrollTop';

const navLinks = [
  { label: 'Home', url: '/' },
  { label: 'Find a Doctor', url: '/doctors' },
  { label: 'Health Insurance', url: '/insurance' },
  { label: 'About Us', url: '/about' },
  { label: 'Contact', url: '/contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const scrollToTop = useScrollTop();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
          <Link 
                to="/" 
                className="text-2xl font-bold text-primary"
                onClick={scrollToTop}
              >
                DocNow
              </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden min-[900px]:ml-6 min-[900px]:flex min-[900px]:space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  location.pathname === item.url
                    ? "border-b-2 border-primary text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
                onClick={scrollToTop}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden min-[900px]:flex min-[900px]:items-center min-[900px]:space-x-4">
            <Link
              to="/appointments"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20"
              onClick={scrollToTop}
            >
              <FaCalendarAlt className="mr-2" />
              My Appointments
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary hover:text-black"
              onClick={scrollToTop}
            >
              <FaUser className="mr-2" />
              Login
            </Link>
            <Link
              to="/health-professional"
              className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-primary/10"
              onClick={scrollToTop}
            >
              <FaUserMd className="mr-2" />
              Are you a Health Professional?
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center min-[900px]:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="min-[900px]:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={`block pl-3 pr-4 py-2 text-base font-medium ${
                  location.pathname === item.url
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 space-y-2">
            <Link
              to="/appointments"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={() => {
                scrollToTop();
                setIsMenuOpen(false);
              }}
            >
              <FaCalendarAlt className="inline-block mr-2" />
              My Appointments
            </Link>
            <Link
              to="/login"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={() => {
                scrollToTop();
                setIsMenuOpen(false);
              }}
            >
              <FaUser className="inline-block mr-2" />
              Login
            </Link>
            <Link
              to="/health-professional"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              onClick={() => {
                scrollToTop();
                setIsMenuOpen(false);
              }}
            >
              <FaUserMd className="inline-block mr-2" />
              Are you a Health Professional?
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
