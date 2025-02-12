import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-gray-200"></div>
        <p className="mt-4 text-xl text-blue-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
