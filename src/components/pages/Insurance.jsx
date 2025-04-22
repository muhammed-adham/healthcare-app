import React from 'react';
import Banner from '../common/Banner';

const Insurance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner 
        title="Insurance"
        subtitle="Manage your healthcare coverage and claims"
      />
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Find the Right Health Insurance for Your Family
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Compare health insurance policies from leading providers and find the perfect coverage for you and your loved ones.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                Compare Plans Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://res.cloudinary.com/dph1b3jla/image/upload/v1745209568/young-family-with-children-autumn-park_b2jbvz.jpg"
                alt="Happy family in park"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Insurance Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Comparison</h3>
              <p className="text-gray-600">Compare different health insurance plans side by side to find the best fit for your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Plans</h3>
              <p className="text-gray-600">Find plans that fit your budget with transparent pricing and no hidden fees.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Get guidance from our insurance experts to help you make the right choice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Health Insurance Plan?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their ideal health insurance coverage through our platform.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Insurance; 