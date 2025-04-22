import React from 'react';
import AnnouncementBanner from '../common/AnnouncementBanner';
import Hero from '../common/Hero';
import ValueProps from '../common/ValueProps';
import Features from '../common/Features';
import FeaturedDoctors from '../common/FeaturedDoctors';
import DoctorAppointment from '../common/DoctorAppointment';
import HealthInsurance from '../common/HealthInsurance';
import HelpSection from '../common/HelpSection';

const Home = () => {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <Features />
      <ValueProps />
      <DoctorAppointment buttonLabel="Book Your Appointment Now" />
      <HealthInsurance />
      <FeaturedDoctors />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HelpSection />
      </div>
    </>
  );
};

export default Home; 