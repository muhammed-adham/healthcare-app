import React from "react";

const ValueProps = () => {
  return (
    <section className=" ">
      <div className=" max-w-7xl mx-auto px-4 py-16 rounded-md bg-blue-50" data-test="value-props">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">
            Your Everyday <span className='text-primary font-bold whitespace-nowrap'>Partner in Health</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* First Value Prop */}
          <div className="flex flex-col gap-12 items-center">
            <img
              src="/icons/access-care.svg"
              height="80"
              alt="Access to care icon"
              className="w-20 h-20"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                <strong>Faster and easier access to care</strong>
              </h3>
              <p className="text-gray-600 mt-4">
                Book video or in-person appointments and get reminders so you
                never miss one.
              </p>
            </div>
          </div>

          {/* Second Value Prop */}
          <div className="flex flex-col gap-12 items-center">
            <img
              src="/icons/care-terms.svg"
              height="80"
              alt="Care on your terms icon"
              className="w-20 h-20"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                <strong>Receive care on your terms</strong>
              </h3>
              <p className="text-gray-600 mt-4">
                Message your practitioners, get preventive advice and care when
                you need it.
              </p>
            </div>
          </div>

          {/* Third Value Prop */}
          <div className="flex flex-col gap-12 items-center">
            <img
              src="/icons/manage-health.svg"
              height="80"
              alt="Manage health icon"
              className="w-20 h-20"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                <strong>Manage your health</strong>
              </h3>
              <p className="text-gray-600 mt-4">
                Easily keep in one place all your health information and that of
                those who are important to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
