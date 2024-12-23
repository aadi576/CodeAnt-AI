import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="CodeAnt AI" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-blue-600">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}