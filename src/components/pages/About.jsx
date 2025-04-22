import React from 'react';
import { FaHeartbeat, FaUserMd, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';
import Banner from '../common/Banner';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner 
        title="About Us"
        subtitle="Connecting patients with healthcare professionals."
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-4">
            We are dedicated to revolutionizing healthcare access by providing a seamless platform that connects patients with qualified healthcare professionals. Our mission is to make quality healthcare more accessible, efficient, and patient-centered.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaHeartbeat className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient-Centered Care</h3>
            <p className="text-gray-600">Putting patients at the heart of everything we do</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaUserMd className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Healthcare</h3>
            <p className="text-gray-600">Connecting you with qualified medical professionals</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaHandHoldingHeart className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassionate Service</h3>
            <p className="text-gray-600">Delivering care with empathy and understanding</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaShieldAlt className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600">Protecting your health information with advanced security</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">For Patients</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Easy appointment scheduling</li>
                <li>• Access to qualified healthcare providers</li>
                <li>• Secure medical record management</li>
                <li>• Insurance verification and processing</li>
                <li>• 24/7 support and assistance</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">For Healthcare Providers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Streamlined patient management</li>
                <li>• Efficient appointment scheduling</li>
                <li>• Secure communication platform</li>
                <li>• Integrated billing solutions</li>
                <li>• Professional networking opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-primary rounded-lg shadow-md p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have questions about our platform? We're here to help.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-primary transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 