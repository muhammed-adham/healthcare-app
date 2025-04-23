import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router';
import doctorsData from '../../data/doctors.json';
import useScrollTop from '../../hooks/useScrollTop';
import AppointmentModal from './AppointmentModal';

const FeaturedDoctors = () => {
  const scrollToTop = useScrollTop();
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useMemo to maintain the same featured doctors until page refresh
  const featuredDoctors = useMemo(() => {
    return [...doctorsData.doctors]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, []); // Empty dependency array means this only runs once on mount

  const handleBookClick = (doctor, e) => {
    e.preventDefault(); // Prevent default link behavior
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleConfirmAppointment = (doctor, time) => {
    // Handle appointment confirmation
    console.log(`Appointment booked with ${doctor.name} at ${time}`);
    handleCloseModal();
    // Navigate to appointments page
    navigate('/appointments');
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover object-[50%_25%]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-4">{doctor.specialty}</p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(doctor.rating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({doctor.reviews} reviews)
                  </span>
                </div>
                <button
                  onClick={(e) => handleBookClick(doctor, e)}
                  className="text-primary hover:text-primary-600 font-medium"
                >
                  Book Appointment →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleCloseModal} />
          <div className="relative mx-auto w-full max-w-lg">
            <AppointmentModal
              doctor={selectedDoctor}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onConfirm={handleConfirmAppointment}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedDoctors; 