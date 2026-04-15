import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 px-6 md:px-16 lg:px-24 py-10 mt-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-3">
            Health<span className="text-blue-500">Care</span>
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            We provide trusted healthcare services by connecting patients with
            experienced doctors. Book appointments easily and get the best care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-medium text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-white">Doctors</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-medium text-white mb-3">Contact</h2>
          <p className="text-sm text-gray-400">
            📍 Burhani Building, Amanaka <br />
            Raipur, Chhattisgarh, India
          </p>
          <p className="text-sm text-gray-400 mt-2">
            📞 +91 7581984052
          </p>
          <p className="text-sm text-gray-400 mt-2">
            ✉️ support@healthcare.com
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HealthCare. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;