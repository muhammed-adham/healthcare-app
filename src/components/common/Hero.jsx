import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUserMd, FaCalendarAlt, FaStethoscope, FaSearch, FaMapMarkerAlt, FaEllipsisV, FaChevronDown, FaTimes, FaBuilding } from 'react-icons/fa';
import { CiMedicalCross } from 'react-icons/ci';
import DoctorPhotos from './DoctorPhotos';
import useScrollTop from '../../hooks/useScrollTop';

const allSpecialties = [
  { id: 'cardiology', name: 'Cardiology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'neurology', name: 'Neurology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'pediatrics', name: 'Pediatrics', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'orthopedics', name: 'Orthopedics', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'dermatology', name: 'Dermatology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'see-more', name: 'See More', icon: <FaEllipsisV />, isMore: true },
];

const additionalSpecialties = [
  { id: 'ophthalmology', name: 'Ophthalmology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'endocrinology', name: 'Endocrinology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'gastroenterology', name: 'Gastroenterology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'psychiatry', name: 'Psychiatry', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'urology', name: 'Urology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'ob-gyn', name: 'Ob-Gyn', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'pulmonology', name: 'Pulmonology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'rheumatology', name: 'Rheumatology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'hematology', name: 'Hematology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'allergy-immunology', name: 'Allergy & Immunology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'infectious-disease', name: 'Infectious Disease', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'nephrology', name: 'Nephrology', icon: <CiMedicalCross className="w-8 h-8" /> },
  { id: 'dentistry', name: 'Dentistry', icon: <CiMedicalCross className="w-8 h-8" /> },
];

// Combine all specialties for search
const allSpecialtiesForSearch = [...allSpecialties.filter(spec => !spec.isMore), ...additionalSpecialties];

const availabilityOptions = [
  { id: 'all', name: 'All', icon: <FaCalendarAlt /> },
  { id: 'today', name: 'Today', icon: <FaCalendarAlt /> },
  { id: 'tomorrow', name: 'Tomorrow', icon: <FaCalendarAlt /> },
  { id: 'this-week', name: 'This Week', icon: <FaCalendarAlt /> },
  { id: 'next-week', name: 'Next Week', icon: <FaCalendarAlt /> },
];

const Hero = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(availabilityOptions[0]);
  const [showMore, setShowMore] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [showSpecialtiesOverlay, setShowSpecialtiesOverlay] = useState(false);
  const [showAvailabilityOverlay, setShowAvailabilityOverlay] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredSpecialties, setFilteredSpecialties] = useState(allSpecialtiesForSearch);
  const [filteredPractices, setFilteredPractices] = useState([]);
  const [filteredPractitioners, setFilteredPractitioners] = useState([]);
  const scrollToTop = useScrollTop();
  const navigate = useNavigate();

  // Add refs for the dropdowns
  const specialtiesOverlayRef = useRef(null);
  const availabilityOverlayRef = useRef(null);

  // Mock data for practices and practitioners
  const mockPractices = [
    {
      id: 1,
      name: 'SA Regional Skin Cancer Clinic',
      specialty: 'Skin Cancer',
      location: 'Mount Barker SA'
    },
    {
      id: 2,
      name: 'HelloDoc Psychiatry SA',
      specialty: 'Psychiatry, Psychology',
      location: 'Adelaide SA'
    },
    {
      id: 3,
      name: 'Dynamic Psychology SA',
      specialty: 'Psychology',
      location: 'Norwood SA'
    }
  ];

  const mockPractitioners = [
    {
      id: 1,
      name: 'Dr Karim Khan',
      specialty: 'General Practice',
      location: 'Gawler East SA',
      image: null
    },
    {
      id: 2,
      name: 'Dr Hank Ly',
      specialty: 'General Practice',
      location: 'Croydon SA',
      image: 'https://healthengine.imgix.net/photos/doctors/doc143827-20250417052503.png'
    },
    {
      id: 3,
      name: 'Pam Chomdee',
      specialty: 'Massage, Remedial Therapy',
      location: 'Prospect SA',
      image: null
    }
  ];

  // Filter specialties, practices, and practitioners based on search input
  useEffect(() => {
    if (searchInput.trim()) {
      const query = searchInput.toLowerCase();
      
      // Filter specialties
      const filteredSpecs = allSpecialtiesForSearch.filter(specialty =>
        specialty.name.toLowerCase().includes(query)
      );
      setFilteredSpecialties(filteredSpecs);

      // Filter practices
      const filteredPracs = mockPractices.filter(practice =>
        practice.name.toLowerCase().includes(query) ||
        practice.specialty.toLowerCase().includes(query) ||
        practice.location.toLowerCase().includes(query)
      );
      setFilteredPractices(filteredPracs);

      // Filter practitioners
      const filteredDocs = mockPractitioners.filter(practitioner =>
        practitioner.name.toLowerCase().includes(query) ||
        practitioner.specialty.toLowerCase().includes(query) ||
        practitioner.location.toLowerCase().includes(query)
      );
      setFilteredPractitioners(filteredDocs);
    } else {
      setFilteredSpecialties(allSpecialtiesForSearch);
      setFilteredPractices([]);
      setFilteredPractitioners([]);
    }
  }, [searchInput]);

  // Add click outside handler only for specialties overlay
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (specialtiesOverlayRef.current && !specialtiesOverlayRef.current.contains(event.target)) {
        setShowSpecialtiesOverlay(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add click outside handler for availability overlay
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (availabilityOverlayRef.current && !availabilityOverlayRef.current.contains(event.target)) {
        setShowAvailabilityOverlay(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSeeMoreClick = () => {
    setShowMore(prev => !prev);
    setIsRotated(prev => !prev);
  };

  const handleSearchInputFocus = () => {
    setShowSpecialtiesOverlay(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
    setSearchInput(specialty.name);
    setShowSpecialtiesOverlay(false);
  };

  const handleClearFilter = () => {
    setSelectedSpecialty(null);
    setSearchInput('');
    setShowSpecialtiesOverlay(false);
  };

  const handleMainSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
    setSearchInput(specialty.name);
    setShowMore(false);
    setIsRotated(false);
  };

  const handleAvailabilitySelect = (availability) => {
    setSelectedAvailability(availability);
    setShowAvailabilityOverlay(false);
  };

  const handleSearch = () => {
    if (selectedSpecialty || selectedAvailability.id !== 'all') {
      const queryParams = new URLSearchParams();
      if (selectedSpecialty) queryParams.append('specialty', selectedSpecialty.name);
      if (selectedAvailability.id !== 'all') queryParams.append('availability', selectedAvailability.id);
      
      navigate(`/doctors?${queryParams.toString()}`);
      scrollToTop();
    }
  };

  // Add keyboard navigation handlers
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  return (
    <div 
      className="relative bg-gradient-to-r from-primary to-primary-dark min-h-[600px]"
      role="banner"
      aria-label="Healthcare provider search"
    >
      <section 
        className="bg-gradient-to-r from-primary to-primary-600 text-white py-20 relative"
        aria-label="Search section"
      >
        <DoctorPhotos />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-start">
            <div className="w-full max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
                Find and book healthcare providers
              </h1>
              <h5 className="text-xl mb-8 text-left">
                What do you need help with?
              </h5>

              {/* Specialty Selector */}
              <div 
                className="w-full mb-8 relative space-y-4"
                role="search"
                aria-label="Specialty search"
              >
                <div 
                  className="grid grid-cols-2 max-[1700px]:grid-cols-2 min-[1701px]:grid-cols-6 gap-4"
                  role="list"
                  aria-label="Specialty options"
                >
                  {allSpecialties.map((specialty) => (
                    <button
                      key={specialty.id}
                      onClick={() => specialty.isMore ? handleSeeMoreClick() : handleMainSpecialtySelect(specialty)}
                      onKeyDown={(e) => handleKeyDown(e, () => specialty.isMore ? handleSeeMoreClick() : handleMainSpecialtySelect(specialty))}
                      className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                        selectedSpecialty?.id === specialty.id
                          ? 'bg-secondary text-primary'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      role="listitem"
                      tabIndex="0"
                      aria-label={specialty.isMore ? "Show more specialties" : `Select ${specialty.name}`}
                      aria-pressed={selectedSpecialty?.id === specialty.id}
                    >
                      {typeof specialty.icon === 'string' ? (
                        <img
                          src={specialty.icon}
                          alt={specialty.name}
                          className="w-16 h-16 mb-2 bg-primary p-4 rounded-full"
                        />
                      ) : (
                        <span className="w-8 h-8 mb-2 flex items-center justify-center">
                          {specialty.icon}
                        </span>
                      )}
                      <span className="text-sm font-medium">{specialty.name}</span>
                      {specialty.isMore && (
                        <FaChevronDown 
                          className={`mt-1 transition-transform duration-300 ${isRotated ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Enhanced See More Overlay */}
                {showMore && (
                  <div 
                    className="absolute top-full right-0 mt-4 bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl z-50 animate-fadeIn"
                    style={{ maxHeight: '80vh', overflowY: 'auto' }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="All specialties"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">All Specialties</h3>
                      <button
                        onClick={() => setShowMore(false)}
                        onKeyDown={(e) => handleKeyDown(e, () => setShowMore(false))}
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                        aria-label="Close specialties"
                      >
                        <FaTimes className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </div>
                    
                    <div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      role="list"
                      aria-label="Additional specialties"
                    >
                      {additionalSpecialties.map((specialty) => (
                        <button
                          key={specialty.id}
                          onClick={() => handleMainSpecialtySelect(specialty)}
                          onKeyDown={(e) => handleKeyDown(e, () => handleMainSpecialtySelect(specialty))}
                          className={`flex items-center p-4 rounded-lg transition-all duration-200 text-black ${
                            selectedSpecialty?.id === specialty.id
                              ? 'bg-primary text-white'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                          role="listitem"
                          tabIndex="0"
                          aria-label={`Select ${specialty.name}`}
                          aria-pressed={selectedSpecialty?.id === specialty.id}
                        >
                          <div className="w-12 h-12 mr-4 bg-primary text-white p-2 rounded-full flex items-center justify-center">
                            {specialty.icon}
                          </div>
                          <span className="font-medium">{specialty.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search Bar */}
                <div 
                  className="w-full bg-white rounded-lg shadow-lg p-4 relative"
                  role="search"
                  aria-label="Search healthcare providers"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex items-center bg-gray-50 rounded-lg p-3 text-black">
                      <FaSearch className="text-gray-400 mr-3" aria-hidden="true" />
                      <input
                        type="text"
                        placeholder="Service, practice or practitioner"
                        className="w-full bg-transparent outline-none"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        onFocus={handleSearchInputFocus}
                        aria-label="Search for healthcare services"
                        role="searchbox"
                      />
                    </div>
                    <div className="flex-1 flex items-center bg-gray-50 rounded-lg p-3 relative">
                      <FaCalendarAlt className="text-gray-400 mr-3" aria-hidden="true" />
                      <input
                        type="text"
                        placeholder="Select availability"
                        className="w-full bg-transparent outline-none text-black cursor-pointer"
                        value={selectedAvailability.name}
                        readOnly
                        onClick={() => setShowAvailabilityOverlay(true)}
                        onKeyDown={(e) => handleKeyDown(e, () => setShowAvailabilityOverlay(true))}
                        aria-label="Select availability"
                        role="combobox"
                        aria-expanded={showAvailabilityOverlay}
                        aria-controls="availability-options"
                      />
                      <FaChevronDown className="text-gray-400 ml-2" aria-hidden="true" />
                    </div>
                    <button
                      type="button"
                      onClick={handleSearch}
                      onKeyDown={(e) => handleKeyDown(e, handleSearch)}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-black transition-colors duration-200"
                      aria-label="Search healthcare providers"
                    >
                      Search
                    </button>
                  </div>

                  {/* Availability Overlay */}
                  {showAvailabilityOverlay && (
                    <div
                      ref={availabilityOverlayRef}
                      className="absolute top-full right-0 left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-50"
                      role="listbox"
                      id="availability-options"
                      aria-label="Availability options"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">Select Availability</h3>
                          <button
                            onClick={() => setShowAvailabilityOverlay(false)}
                            onKeyDown={(e) => handleKeyDown(e, () => setShowAvailabilityOverlay(false))}
                            className="p-2 text-gray-500 hover:text-gray-700"
                            aria-label="Close availability selector"
                          >
                            <FaTimes className="w-5 h-5" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="space-y-2">
                          {availabilityOptions.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleAvailabilitySelect(option)}
                              onKeyDown={(e) => handleKeyDown(e, () => handleAvailabilitySelect(option))}
                              className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
                                selectedAvailability.id === option.id
                                  ? 'bg-primary text-white'
                                  : 'hover:bg-gray-100 text-gray-700'
                              }`}
                              role="option"
                              tabIndex="0"
                              aria-selected={selectedAvailability.id === option.id}
                            >
                              <span className="mr-3" aria-hidden="true">{option.icon}</span>
                              <span className="font-medium">{option.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Search Results Overlay */}
                  {showSpecialtiesOverlay && (
                    <div 
                      ref={specialtiesOverlayRef}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50"
                      role="dialog"
                      aria-modal="true"
                      aria-label="Search results"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-800">Search Results</h2>
                          </div>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={handleClearFilter}
                              onKeyDown={(e) => handleKeyDown(e, handleClearFilter)}
                              className="text-primary hover:text-primary-dark font-medium border border-primary rounded-md px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200"
                              aria-label="Clear filter"
                            >
                              Clear Filter
                            </button>
                            <button
                              onClick={() => setShowSpecialtiesOverlay(false)}
                              onKeyDown={(e) => handleKeyDown(e, () => setShowSpecialtiesOverlay(false))}
                              className="text-gray-500 hover:text-gray-700"
                              aria-label="Close search results"
                            >
                              <FaTimes className="w-6 h-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        {/* Practices Section */}
                        {filteredPractices.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Practices</h3>
                            <ul className="space-y-2" role="list" aria-label="Practice results">
                              {filteredPractices.map((practice) => (
                                <li
                                  key={practice.id}
                                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                                  role="listitem"
                                  tabIndex="0"
                                  onClick={() => handleSpecialtySelect(practice)}
                                  onKeyDown={(e) => handleKeyDown(e, () => handleSpecialtySelect(practice))}
                                >
                                  <div className="flex-shrink-0 w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                                    <FaBuilding className="text-primary" aria-hidden="true" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-900 font-medium">{practice.name}</p>
                                    <p className="text-sm text-gray-500">
                                      {practice.specialty} - {practice.location}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Practitioners Section */}
                        {filteredPractitioners.length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Practitioners</h3>
                            <ul className="space-y-2" role="list" aria-label="Practitioner results">
                              {filteredPractitioners.map((practitioner) => (
                                <li
                                  key={practitioner.id}
                                  className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                                  role="listitem"
                                  tabIndex="0"
                                  onClick={() => handleSpecialtySelect(practitioner)}
                                  onKeyDown={(e) => handleKeyDown(e, () => handleSpecialtySelect(practitioner))}
                                >
                                  <div className="flex-shrink-0 w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                                    {practitioner.image ? (
                                      <img
                                        src={practitioner.image}
                                        alt={practitioner.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                      />
                                    ) : (
                                      <FaUserMd className="text-primary" aria-hidden="true" />
                                    )}
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-900 font-medium">{practitioner.name}</p>
                                    <p className="text-sm text-gray-500">
                                      {practitioner.specialty} - {practitioner.location}
                                    </p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Specialties Section */}
                        {filteredSpecialties.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Services</h3>
                            <div 
                              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                              role="list"
                              aria-label="Service results"
                            >
                              {filteredSpecialties.map((specialty) => (
                                <button
                                  key={specialty.id}
                                  onClick={() => handleSpecialtySelect(specialty)}
                                  onKeyDown={(e) => handleKeyDown(e, () => handleSpecialtySelect(specialty))}
                                  className="flex flex-col items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                  role="listitem"
                                  tabIndex="0"
                                  aria-label={`Select ${specialty.name}`}
                                >
                                  <div className="w-12 h-12 mb-2 flex items-center justify-center bg-primary rounded-full">
                                    {specialty.icon}
                                  </div>
                                  <span className="text-sm font-medium text-center text-black">{specialty.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* No Results Message */}
                        {filteredSpecialties.length === 0 && filteredPractices.length === 0 && filteredPractitioners.length === 0 && (
                          <div className="text-center py-4 text-gray-500" role="status">
                            No results found for "{searchInput}"
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero; 