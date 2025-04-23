import React, { useState } from 'react';
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const DoctorAppointment = ({ buttonLabel = "Book Appointment" }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            About Our <span className='text-secondary font-bold relative'>
              Doctors
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-10 6 C10 0, 50 -6, 1000 0" stroke="#BFF205" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Book an Appointment <span className='text-secondary font-bold'>Today</span> Online
              </h3>
              <p className="text-gray-600 text-lg">
              Your Health, Simplified. Find the right doctor, read trusted reviews from verified patients, and book your preferred doctor – instantly with <span className='text-primary font-bold'>DocNow</span>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <p className="text-gray-700">Appointment book & enjoy service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <p className="text-gray-700">24/7 consultation emergency service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <p className="text-gray-700">Daily health tips & free life insurance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <FaCheck className="text-primary" />
                </div>
                <p className="text-gray-700">Trustcare is health care, but easy</p>
              </div>
            </div>

            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary hover:text-black transition-colors duration-200">
              {buttonLabel}
            </button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dph1b3jla/image/upload/v1745202496/therapist-with-her-patient_bb83bv.jpg"
              alt="Doctor and patient consultation"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 -left-28 w-80 h-60 bg-white rounded-lg shadow-lg p-4 transform translate-x-24 translate-y-16 opacity-90">
              <div className="flex items-center justify-between mb-2">
                <button 
                  onClick={handlePrevMonth}
                  className="text-primary hover:text-primary-600 transition-colors duration-200"
                >
                  <FaChevronLeft />
                </button>
                <h4 className="text-lg font-semibold text-primary">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h4>
                <button 
                  onClick={handleNextMonth}
                  className="text-primary hover:text-primary transition-colors duration-200"
                >
                  <FaChevronRight />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={`day-${index}`} className="text-center text-sm font-medium text-primary">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }).map((_, index) => {
                  const day = index + 1;
                  const isSelected = day >= 15 && day <= 19;
                  return (
                    <div
                      key={`${currentMonth.getFullYear()}-${currentMonth.getMonth()}-${day}`}
                      className={`text-center text-sm p-1 ${
                        isSelected ? 'bg-secondary text-primary' : 'text-gray-600'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAppointment; 