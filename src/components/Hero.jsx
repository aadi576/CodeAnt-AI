import React from 'react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Revolutionizing Code Quality & Security
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
            Leverage AI-driven solutions to write cleaner, safer, and more efficient code.
            Join leading unicorns in transforming the future of development.
          </p>
          <div className="mt-10">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}