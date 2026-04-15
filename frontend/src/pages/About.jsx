import React from "react";

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Learn more about our mission, vision, and commitment to providing the best healthcare services.
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a healthcare platform dedicated to connecting patients with
            experienced and trusted doctors. Our goal is to simplify the process
            of booking appointments and accessing quality medical care.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With a wide network of specialists, we ensure that every patient
            receives timely and effective treatment tailored to their needs.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
          alt="mission"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make healthcare accessible, affordable, and
            convenient for everyone. We aim to bridge the gap between patients
            and healthcare providers using modern technology.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="text-center bg-blue-50 rounded-xl p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg text-gray-800">
              Verified Doctors
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              All doctors are verified and experienced professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg text-gray-800">
              Easy Booking
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Book appointments in just a few clicks without hassle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Our support team is always available to help you.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;