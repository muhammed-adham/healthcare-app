import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const AppointmentModal = ({ doctor, isOpen, onClose, onConfirm }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' }
  ];

  const getAvailableTimes = (day) => {
    return doctor.availability[day] || [];
  };

  const isDayAvailable = (dayId) => {
    return doctor.availability[dayId]?.length > 0;
  };

  const handleConfirm = () => {
    if (selectedDay && selectedTime) {
      onConfirm(doctor, selectedTime, selectedDay);
    }
  };

  // Add keyboard navigation handler
  const handleKeyDown = (e, handler) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  };

  // Add keyboard event handler for modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus the first interactive element when modal opens
      const firstFocusableElement = document.querySelector('[data-first-focus]');
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
      <div className="absolute right-0 top-0 pr-4 pt-4">
        <button
          type="button"
          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={onClose}
          onKeyDown={(e) => handleKeyDown(e, onClose)}
        >
          <span className="sr-only">Close</span>
          <FaTimes className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:text-left">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            Book Appointment with {doctor.name}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Select your preferred date and time for the appointment.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {days.map((day) => {
              const isAvailable = isDayAvailable(day.id);
              return (
                <button
                  key={`day-${day.id}`}
                  onClick={() => isAvailable && setSelectedDay(day.id)}
                  onKeyDown={(e) => isAvailable && handleKeyDown(e, () => setSelectedDay(day.id))}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    !isAvailable
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : selectedDay === day.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  role="option"
                  tabIndex={isAvailable ? 0 : -1}
                  aria-selected={selectedDay === day.id}
                  aria-disabled={!isAvailable}
                  data-first-focus={day.id === 'monday' && isAvailable}
                  disabled={!isAvailable}
                >
                  {day.label}
                  {!isAvailable && <span className="sr-only"> (Not available)</span>}
                </button>
              );
            })}
          </div>
        </div>

        {selectedDay && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {getAvailableTimes(selectedDay).map((time) => (
                <button
                  key={`time-${time}`}
                  onClick={() => setSelectedTime(time)}
                  onKeyDown={(e) => handleKeyDown(e, () => setSelectedTime(time))}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    selectedTime === time
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  role="option"
                  tabIndex="0"
                  aria-selected={selectedTime === time}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md cursor-pointer bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:col-start-2"
          onClick={handleConfirm}
          onKeyDown={(e) => handleKeyDown(e, handleConfirm)}
          disabled={!selectedDay || !selectedTime}
        >
          Confirm Appointment
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          onClick={onClose}
          onKeyDown={(e) => handleKeyDown(e, onClose)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal; 