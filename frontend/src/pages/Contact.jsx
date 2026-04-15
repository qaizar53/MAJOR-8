import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 py-10">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Have questions or need help? Reach out to us anytime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">

        {/* Left Info */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Our Office</h2>
            <p className="text-gray-600 mt-2">
              123 Health Street, Sector 10 <br />
              New Delhi, India
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Contact Info</h2>
            <p className="text-gray-600 mt-2">
              📞 +91 98765 43210 <br />
              ✉️ support@healthcare.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Working Hours</h2>
            <p className="text-gray-600 mt-2">
              Mon - Sat: 9:00 AM - 8:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;