import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaCalendarAlt, FaClock, FaUserMd, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import Banner from '../common/Banner';

const Appointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Sample appointment data
  const appointments = {
    upcoming: [
      {
        id: 1,
        doctor: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        date: 'March 25, 2024',
        time: '10:00 AM',
        location: 'Main Hospital - Room 304',
        status: 'confirmed',
      },
      {
        id: 2,
        doctor: 'Dr. Michael Chen',
        specialty: 'Dermatology',
        date: 'March 28, 2024',
        time: '2:30 PM',
        location: 'Downtown Clinic - Room 102',
        status: 'pending',
      },
    ],
    past: [
      {
        id: 3,
        doctor: 'Dr. Emily Rodriguez',
        specialty: 'General Medicine',
        date: 'March 15, 2024',
        time: '9:00 AM',
        location: 'Main Hospital - Room 201',
        status: 'completed',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner 
        title="Appointments"
        subtitle="Schedule and manage your healthcare appointments"
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Appointments</h1>
          <p className="text-xl text-gray-600">
            Manage your appointments and schedule new ones
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`${
                  activeTab === 'upcoming'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Upcoming Appointments
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`${
                  activeTab === 'past'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Past Appointments
              </button>
            </nav>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-6">
          {appointments[activeTab].map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaUserMd className="text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{appointment.doctor}</h3>
                  </div>
                  <p className="text-gray-600">{appointment.specialty}</p>
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{appointment.location}</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex flex-col items-end">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : appointment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {appointment.status === 'confirmed' ? (
                      <FaCheck className="mr-1" />
                    ) : appointment.status === 'pending' ? (
                      <FaClock className="mr-1" />
                    ) : (
                      <FaTimes className="mr-1" />
                    )}
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>

                  {activeTab === 'upcoming' && (
                    <div className="mt-4 space-x-4">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Reschedule
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {appointments[activeTab].length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No {activeTab} appointments found.
              </p>
              {activeTab === 'upcoming' && (
                <Link
                  to="/doctors"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Schedule New Appointment
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments; 