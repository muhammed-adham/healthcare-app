import React from 'react';
import { FaUserMd, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className='text-secondary font-bold relative'>
            Our Services
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-10 6 C10 0, 50 -6, 1000 0" stroke="#BFF205" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaUserMd className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">
              Access to highly qualified and experienced healthcare professionals
              across various specialties.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaCalendarAlt className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Simple and convenient appointment scheduling at your fingertips.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaStethoscope className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
            <p className="text-gray-600">
              Complete healthcare solutions for all your medical needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 