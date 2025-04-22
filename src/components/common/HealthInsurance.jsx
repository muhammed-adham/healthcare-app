import React from 'react';
import { Link } from 'react-router';
import useScrollTop from '../../hooks/useScrollTop';

const HealthInsurance = () => {
  const scrollToTop = useScrollTop();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-secondary rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="lg:w-1/2 h-[406px]">
              <img
                src="https://res.cloudinary.com/dph1b3jla/image/upload/v1745209568/young-family-with-children-autumn-park_b2jbvz.jpg"
                alt="Dad holding his children in his arms"
                className="w-full h-full object-cover object-[50%_40%]"
                // width="676.8"
                // height="406.38"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
                All your private health insurance needs in one place
              </h3>
              <p className="text-gray-600 mb-8">
                Our partner Compare the Market knows the market and has done the work to look for products 
                that could be a good fit for your needs and circumstances. After all, there should be no 
                one-size-fits-all approach to your and your family's health
              </p>
              <Link 
                to="/insurance"
                onClick={scrollToTop}
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsurance; 