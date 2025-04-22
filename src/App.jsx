import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Doctors from './components/pages/Doctors';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Appointments from './components/pages/Appointments';
import HealthProfessional from './components/pages/HealthProfessional';
import Insurance from './components/pages/Insurance';
import About from './components/pages/About';
import HelpCenter from './components/pages/HelpCenter';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/health-professional" element={<HealthProfessional />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/about" element={<About />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
