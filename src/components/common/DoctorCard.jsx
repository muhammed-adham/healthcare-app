import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaStar, FaRegStar, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AppointmentModal from "./AppointmentModal";

const DoctorCard = ({ doctor, onBookAppointment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmAppointment = (doctor, time, day) => {
    // Store appointment details in localStorage or state management
    const appointment = {
      doctor,
      time,
      day,
      date: new Date().toISOString(),
      status: 'pending'
    };

    // You might want to use a proper state management solution here
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    localStorage.setItem('appointments', JSON.stringify([...existingAppointments, appointment]));

    // Close modal and navigate to appointments page
    handleCloseModal();
    navigate('/appointments');
  };

  // Add keyboard navigation handler
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
        role="article"
        aria-label={`Doctor profile: ${doctor.name}`}
      >
        {/* Full-width image */}
        <div className="w-full h-48">
          <img
            src={doctor.image}
            alt={`${doctor.name}'s profile picture`}
            className="w-full h-full object-cover object-[50%_25%]"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <div className="p-6">

            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-medium text-primary border border-primary rounded-md">
                {doctor.specialty}
              </span>
              <div className="flex items-center">
                <FaStar className="text-secondary" />
                <span className="ml-1 text-sm text-gray-600">
                  {doctor.rating} ({doctor.reviews})
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">{doctor.name}</h3>

            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaGraduationCap className="mr-2" />
              <p>{doctor.postgraduate}</p>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaBriefcase className="mr-2" />
              <p>{doctor.experience} years of experience</p>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <p>{doctor.location}</p>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <FaClock className="mr-2" />
              <p>Available on {Object.keys(doctor.availability).map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(', ')}</p>
            </div>
          </div>

          <div className="mt-auto">
            <button
              type="button"
              onClick={handleBookClick}
              onKeyDown={(e) => handleKeyDown(e, handleBookClick)}
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-none text-sm font-medium text-white bg-primary hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label={`Book appointment with ${doctor.name}`}
            >
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleCloseModal} />
          <div className="relative mx-auto w-full max-w-lg">
            <AppointmentModal
              doctor={doctor}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onConfirm={handleConfirmAppointment}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorCard;
