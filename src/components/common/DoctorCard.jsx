import React, { useState } from "react";
import { FaStar, FaRegStar, FaMapMarkerAlt, FaGraduationCap, FaClock, FaCalendarAlt } from "react-icons/fa";
import AppointmentModal from "./AppointmentModal";

const DoctorCard = ({ doctor, onBookAppointment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmAppointment = (doctor, time) => {
    onBookAppointment(doctor, time);
  };

  const getTodayAvailability = () => {
    const today = new Date().toLocaleLowerCase().slice(0, 3);
    return doctor.availability[today] || [];
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={`star-${i}-filled`} className="text-yellow-400" />
        ) : (
          <FaRegStar key={`star-${i}-empty`} className="text-gray-300" />
        )
      );
    }
    return stars;
  };

  // Add keyboard navigation handler
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      role="article"
      aria-label={`Doctor profile: ${doctor.name}`}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <img
              className="h-16 w-16 rounded-full"
              src={doctor.image}
              alt={`${doctor.name}'s profile picture`}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-4 w-4" aria-hidden="true" />
              <p>{doctor.location}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <FaStar className="flex-shrink-0 mr-1.5 h-4 w-4 text-yellow-400" aria-hidden="true" />
            <p>{doctor.rating} ({doctor.reviews} reviews)</p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <FaClock className="flex-shrink-0 mr-1.5 h-4 w-4" aria-hidden="true" />
            <p>Available on {Object.keys(doctor.availability).map(day => day.charAt(0).toUpperCase() + day.slice(1)).join(', ')}</p>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => onBookAppointment(doctor)}
            onKeyDown={(e) => handleKeyDown(e, () => onBookAppointment(doctor))}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label={`Book appointment with ${doctor.name}`}
          >
            <FaCalendarAlt className="mr-2 h-4 w-4" aria-hidden="true" />
            Book Appointment
          </button>
        </div>
      </div>

      <AppointmentModal
        doctor={doctor}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAppointment}
      />
    </div>
  );
};

export default DoctorCard;
