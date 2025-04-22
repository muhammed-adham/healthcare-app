import React, { useState } from 'react';
import { FaUserMd, FaCalendarAlt, FaChartLine, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';
import Banner from '../common/Banner';

const HealthProfessional = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data
  const stats = {
    appointments: {
      total: 156,
      upcoming: 12,
      completed: 144,
    },
    patients: {
      total: 89,
      new: 5,
      returning: 84,
    },
    revenue: {
      total: '$24,560',
      thisMonth: '$3,280',
      lastMonth: '$3,150',
    },
  };

  const upcomingAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      time: '9:00 AM',
      type: 'Follow-up',
      status: 'confirmed',
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      time: '10:30 AM',
      type: 'New Patient',
      status: 'pending',
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '2:00 PM',
      type: 'Consultation',
      status: 'confirmed',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner 
        title="Health Professionals"
        subtitle="Join our network of healthcare providers"
      />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <FaUserMd className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Dr. Sarah Johnson</h2>
                <p className="text-sm text-gray-500">Cardiologist</p>
              </div>
            </div>
          </div>

          <nav className="mt-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                activeTab === 'dashboard'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaChartLine className="mr-3" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                activeTab === 'appointments'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaCalendarAlt className="mr-3" />
              Appointments
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                activeTab === 'patients'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaUserMd className="mr-3" />
              Patients
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                activeTab === 'settings'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaCog className="mr-3" />
              Settings
            </button>
          </nav>

          <div className="mt-auto p-6">
            <button className="flex items-center w-full px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <FaSignOutAlt className="mr-3" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <FaBell className="text-xl" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            </div>
          </div>

          {/* Dashboard Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Appointments</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">{stats.appointments.total}</p>
                      <p className="text-sm text-gray-500">
                        {stats.appointments.upcoming} upcoming
                      </p>
                    </div>
                    <FaCalendarAlt className="text-4xl text-gray-300" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Patients</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">{stats.patients.total}</p>
                      <p className="text-sm text-gray-500">
                        {stats.patients.new} new this month
                      </p>
                    </div>
                    <FaUserMd className="text-4xl text-gray-300" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Revenue</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">{stats.revenue.total}</p>
                      <p className="text-sm text-gray-500">
                        {stats.revenue.thisMonth} this month
                      </p>
                    </div>
                    <FaChartLine className="text-4xl text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{appointment.patient}</p>
                        <p className="text-sm text-gray-500">{appointment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{appointment.time}</p>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            appointment.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Appointments Content */}
          {activeTab === 'appointments' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Appointments Management</h2>
              {/* Add appointments management content here */}
            </div>
          )}

          {/* Patients Content */}
          {activeTab === 'patients' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Patient Management</h2>
              {/* Add patient management content here */}
            </div>
          )}

          {/* Settings Content */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
              {/* Add settings content here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthProfessional; 