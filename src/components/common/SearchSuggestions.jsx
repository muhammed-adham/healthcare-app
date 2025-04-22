import React, { useState, useEffect } from 'react';
import { FaBuilding, FaUserMd, FaSearch } from 'react-icons/fa';

const SearchSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState({
    practices: [],
    practitioners: [],
    specialties: []
  });
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with actual API calls
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

  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filteredPractices = mockPractices.filter(practice =>
          practice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          practice.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
          practice.location.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const filteredPractitioners = mockPractitioners.filter(practitioner =>
          practitioner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          practitioner.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
          practitioner.location.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSuggestions({
          practices: filteredPractices,
          practitioners: filteredPractitioners,
          specialties: [] // Add specialties if needed
        });
        setIsLoading(false);
      }, 300);
    } else {
      setSuggestions({
        practices: [],
        practitioners: [],
        specialties: []
      });
    }
  }, [searchQuery]);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Service, practice or practitioner"
          className="w-full px-4 py-3 pl-10 bg-white/10 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {searchQuery && (
        <div className="mt-2 bg-white rounded-lg shadow-lg p-4 absolute w-full z-50">
          {isLoading ? (
            <div className="text-center py-4 text-gray-500">Loading...</div>
          ) : (
            <>
              {suggestions.practices.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Practices</h3>
                  <ul className="space-y-2">
                    {suggestions.practices.map((practice) => (
                      <li
                        key={practice.id}
                        className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                          <FaBuilding className="text-primary" />
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

              {suggestions.practitioners.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Practitioners</h3>
                  <ul className="space-y-2">
                    {suggestions.practitioners.map((practitioner) => (
                      <li
                        key={practitioner.id}
                        className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                          {practitioner.image ? (
                            <img
                              src={practitioner.image}
                              alt={practitioner.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <FaUserMd className="text-primary" />
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

              {suggestions.practices.length === 0 && suggestions.practitioners.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No results found for "{searchQuery}"
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions; 