import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { FaQuestionCircle, FaUser, FaCalendarAlt, FaTimes, FaHome, FaUserMd, FaBookMedical, FaPhone, FaBars } from "react-icons/fa";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const firstMenuItemRef = useRef(null);
  const lastMenuItemRef = useRef(null);
  const location = useLocation();
  const scrollToTop = useScrollTop();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isMenuOpen) return;

      // Close menu on Escape
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        return;
      }

      // Handle tab navigation within menu
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstMenuItemRef.current) {
            e.preventDefault();
            lastMenuItemRef.current?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastMenuItemRef.current) {
            e.preventDefault();
            firstMenuItemRef.current?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Focus management when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Focus first menu item when menu opens
      firstMenuItemRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add keyboard navigation handler
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  return (
    <header 
      className="bg-white shadow-sm"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold text-primary"
                aria-label="Home"
              >
                HealthCare
              </Link>
            </div>
            <nav 
              className="hidden sm:ml-6 sm:flex sm:space-x-8"
              role="navigation"
              aria-label="Main menu"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className={`
                    inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
                    ${location.pathname === item.url
                      ? 'border-primary text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }
                  `}
                  aria-current={location.pathname === item.url ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
              aria-label="Toggle search"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">View search</span>
              <FaQuestionCircle className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
                  aria-label="User menu"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open user menu</span>
                  <FaUser className="h-5 w-5 mr-1" />
                </button>
              </div>
              {isMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      scrollToTop();
                      setIsMenuOpen(false);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, () => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    })}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
        <div 
          className="sm:hidden"
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={`
                  block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                  ${location.pathname === item.url
                    ? 'bg-primary-50 border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }
                `}
                aria-current={location.pathname === item.url ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
                onKeyDown={(e) => handleKeyDown(e, () => {
                  setIsMenuOpen(false);
                  scrollToTop();
                })}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://via.placeholder.com/40"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">John Doe</div>
                <div className="text-sm font-medium text-gray-500">john.doe@example.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                to="/login"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                onKeyDown={(e) => handleKeyDown(e, () => {
                  setIsMenuOpen(false);
                  scrollToTop();
                })}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
