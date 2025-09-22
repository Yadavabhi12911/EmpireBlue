

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-lg w-full">
        <h1 className="text-6xl font-extrabold text-[#03009b] mb-6">404</h1>
        <h2 className="text-3xl font-bold text-[#03009b] mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-[#03009b] text-white rounded-lg font-semibold hover:bg-[#4284FF] transition text-lg"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
