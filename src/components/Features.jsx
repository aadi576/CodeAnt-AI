import React from 'react';

export function Features() {
  const features = [
    {
      title: "AI-Driven Solutions",
      description: "Leverage advanced AI algorithms for automated code improvements and security fixes."
    },
    {
      title: "Code Quality",
      description: "Ensure clean, maintainable, and scalable code through intelligent analysis."
    },
    {
      title: "Security First",
      description: "Identify and fix security vulnerabilities before they become problems."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose CodeAnt AI</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}