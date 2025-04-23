import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import useScrollTop from '../../hooks/useScrollTop';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = useScrollTop();

  // Quick links data
  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Find a Doctor', url: '/doctors' },
    { label: 'Health Insurance', url: '/insurance' },
    { label: 'My Appointment', url: '/appointments' },
    { label: 'About Us', url: '/about' },
    { label: 'Contact Us', url: '/contact' }
  ];

  // Contact info data
  const contactInfo = [
    { icon: <FaPhone />, text: '(123) 456-7890' },
    { icon: <FaEnvelope />, text: 'info@healthcare.com' },
    { icon: <FaMapMarkerAlt />, text: '123 Medical Center Dr, City, State 12345' }
  ];

  // Social media links data
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  // Add keyboard navigation handler
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  return (
    <footer 
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Connecting patients with healthcare providers for better health outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`quick-link-${index}-${link.name}`}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                    onKeyDown={(e) => handleKeyDown(e, () => scrollToTop(link.url))}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <FaPhone className="mr-2" aria-hidden="true" />
                <a 
                  href="tel:+1234567890"
                  className="hover:text-white"
                  onKeyDown={(e) => handleKeyDown(e, () => window.location.href = 'tel:+1234567890')}
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <FaEnvelope className="mr-2" aria-hidden="true" />
                <a 
                  href="mailto:info@healthcare.com"
                  className="hover:text-white"
                  onKeyDown={(e) => handleKeyDown(e, () => window.location.href = 'mailto:info@healthcare.com')}
                >
                  info@healthcare.com
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <FaMapMarkerAlt className="mr-2" aria-hidden="true" />
                <span>123 Healthcare St, Medical City</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={`social-link-${index}-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                  onKeyDown={(e) => handleKeyDown(e, () => window.open(link.url, '_blank'))}
                  aria-label={`Follow us on ${link.label}`}
                >
                  <span className="sr-only">{link.label}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Healthcare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white text-sm"
                onKeyDown={(e) => handleKeyDown(e, () => scrollToTop('/privacy'))}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white text-sm"
                onKeyDown={(e) => handleKeyDown(e, () => scrollToTop('/terms'))}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 