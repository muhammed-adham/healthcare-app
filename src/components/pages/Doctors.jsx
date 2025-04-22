import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import {
  FaStar,
  FaRegStar,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
} from "react-icons/fa";
import doctorsData from "../../data/doctors.json";
import DoctorCard from "../common/DoctorCard";
import Banner from '../common/Banner';
import SearchSuggestions from '../common/SearchSuggestions';
import useScrollTop from '../../hooks/useScrollTop';

const Doctors = () => {
  const [doctors, setDoctors] = useState(doctorsData.doctors);
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const specialtiesContainerRef = useRef(null);
  const availabilityContainerRef = useRef(null);
  const doctorsPerPage = 12;
  const location = useLocation();
  const isTodayPage = location.pathname === "/doctors/today";
  const scrollToTop = useScrollTop();

  // Read URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const specialty = params.get('specialty');
    const availability = params.get('availability');

    if (specialty) {
      setSelectedSpecialty(specialty);
    }
    if (availability) {
      setSelectedAvailability(availability.charAt(0).toUpperCase() + availability.slice(1).replace('-', ' '));
    }
  }, [location.search]);

  const specialties = [
    "All",
    ...new Set(doctorsData.doctors.map((doc) => doc.specialty)),
  ];

  const availabilityOptions = [
    "All",
    "Today",
    "Tomorrow",
    "This Week",
    "Next Week",
  ];

  useEffect(() => {
    if (isTodayPage) {
      const today = new Date().toLocaleLowerCase().slice(0, 3);
      const availableToday = doctorsData.doctors.filter(
        (doctor) => doctor.availability[today]?.length > 0
      );
      setDoctors(availableToday);
    } else {
      filterDoctors();
    }
    setCurrentPage(1);
  }, [isTodayPage, selectedSpecialty, selectedAvailability]);

  const filterDoctors = () => {
    let filtered = [...doctorsData.doctors];

    // Filter by specialty
    if (selectedSpecialty !== "All") {
      filtered = filtered.filter((doctor) => doctor.specialty === selectedSpecialty);
    }

    // Filter by availability
    if (selectedAvailability !== "All") {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Helper function to get full day name
      const getFullDayName = (date) => {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[date.getDay()];
      };

      filtered = filtered.filter((doctor) => {
        const doctorAvailability = doctor.availability || {};
        
        switch (selectedAvailability) {
          case "Today":
            const todayDay = getFullDayName(today);
            return doctorAvailability[todayDay]?.length > 0;
          case "Tomorrow":
            const tomorrowDay = getFullDayName(tomorrow);
            return doctorAvailability[tomorrowDay]?.length > 0;
          case "This Week":
            const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            const currentDayIndex = daysOfWeek.indexOf(getFullDayName(today));
            const remainingDays = daysOfWeek.slice(currentDayIndex);
            return remainingDays.some(day => doctorAvailability[day]?.length > 0);
          case "Next Week":
            const nextWeekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            return nextWeekDays.some(day => doctorAvailability[day]?.length > 0);
          default:
            return true;
        }
      });
    }

    setDoctors(filtered);
  };

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const handleAvailabilityChange = (availability) => {
    setSelectedAvailability(availability);
  };

  const handleBookAppointment = (doctor, time) => {
    const newAppointment = {
      id: Date.now(),
      doctor,
      time,
      date: new Date().toLocaleDateString(),
    };
    setAppointments([...appointments, newAppointment]);
  };

  // Calculate pagination
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const scrollLeft = () => {
    if (specialtiesContainerRef.current) {
      specialtiesContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (specialtiesContainerRef.current) {
      specialtiesContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner 
        title="Find a Doctor"
        subtitle="Search and book appointments with healthcare professionals"
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {isTodayPage ? "Doctors Available Today" : "Our Doctors"}
          </h1>
          
          {/* Filters Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <FaFilter className="text-primary" />
              <h2 className="text-lg font-semibold text-gray-700">Filters</h2>
            </div>
            
            {/* Specialties Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Specialty</h3>
              <div className="relative">
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Scroll specialties left"
                >
                  <FaChevronLeft className="text-gray-600" />
                </button>

                <div
                  ref={specialtiesContainerRef}
                  className="flex space-x-4 overflow-x-hidden px-8"
                >
                  {specialties.map((specialty) => (
                    <button
                      key={specialty}
                      onClick={() => handleSpecialtyChange(specialty)}
                      className={`px-4 py-2 rounded-md whitespace-nowrap flex-shrink-0 ${
                        selectedSpecialty === specialty
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {specialty}
                    </button>
                  ))}
                </div>

                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Scroll specialties right"
                >
                  <FaChevronRight className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Availability Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Availability</h3>
              <div className="relative">
                <div
                  ref={availabilityContainerRef}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
                >
                  {availabilityOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAvailabilityChange(option)}
                      className={`
                        px-4 py-3 rounded-lg flex items-center justify-center
                        transition-all duration-200
                        ${
                          selectedAvailability === option
                            ? "bg-primary text-white shadow-md transform scale-105"
                            : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary hover:shadow-sm"
                        }
                      `}
                    >
                      <FaCalendarAlt className="mr-2" />
                      <span className="text-sm font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* No Results Message */}
          {doctors.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <FaCalendarAlt className="mx-auto text-4xl text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Doctors Found
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedSpecialty !== "All" && selectedAvailability !== "All"
                  ? `No ${selectedSpecialty} doctors available ${selectedAvailability.toLowerCase()}.`
                  : selectedSpecialty !== "All"
                  ? `No ${selectedSpecialty} doctors found.`
                  : `No doctors available ${selectedAvailability.toLowerCase()}.`}
              </p>
              <button
                onClick={() => {
                  setSelectedSpecialty("All");
                  setSelectedAvailability("All");
                }}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Doctors Grid */}
          {doctors.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={handleBookAppointment}
                />
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {doctors.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>

        {/* My Appointments Section */}
        {appointments.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              My Appointments
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between py-4 border-b last:border-b-0"
                >
                  <div>
                    <h3 className="font-semibold">{appointment.doctor.name}</h3>
                    <p className="text-gray-600">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      setAppointments(
                        appointments.filter((a) => a.id !== appointment.id)
                      )
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
