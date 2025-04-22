import React, { useMemo } from "react";
import doctorsData from "../../data/doctors.json";

const DoctorPhotos = () => {
  // Get random 6 doctors (only changes on page refresh)
  const featuredDoctors = useMemo(() => {
    return [...doctorsData.doctors]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pointer-events-none pb-8">
      {/* Grid Container */}
      <div className="lg:absolute top-24 right-16 grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
        {/* First Row */}
        <div className="transform border-[1rem] border-white shadow-md">
          <img
            src={featuredDoctors[0].image}
            alt={featuredDoctors[0].name}
            className="w-full h-48 lg:w-32 lg:h-48 object-cover object-[50%_25%]"
          />
        </div>
        <div className="transform border-[1rem] border-white shadow-md">
          <img
            src={featuredDoctors[1].image}
            alt={featuredDoctors[1].name}
            className="w-full h-48 lg:w-32 lg:h-48 object-cover object-[50%_25%]"
          />
        </div>
        <div className="transform border-[1rem] border-white shadow-md lg:block hidden">
          <img
            src={featuredDoctors[2].image}
            alt={featuredDoctors[2].name}
            className="w-full h-48 lg:w-32 lg:h-48 object-cover object-[50%_25%]"
          />
        </div>

        {/* Second Row */}
        <div className="transform border-[1rem] border-white shadow-md">
          <img
            src={featuredDoctors[3].image}
            alt={featuredDoctors[3].name}
            className="w-full h-48 lg:w-32 lg:h-48 object-cover object-[50%_25%]"
          />
        </div>
        <div className="transform border-[1rem] border-white shadow-md">
          <img
            src={featuredDoctors[4].image}
            alt={featuredDoctors[4].name}
            className="w-full h-48 lg:w-32 lg:h-48 object-cover object-[50%_25%]"
          />
        </div>
        <div className="transform border-[1rem] border-white shadow-md lg:block hidden">
          <img
            src={featuredDoctors[5].image}
            alt={featuredDoctors[5].name}
            className="w-full h-48 lg:w-32 lg:h-48 object-cover object-[50%_25%]"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorPhotos;
