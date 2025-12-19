import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:underline font-medium">Home</Link>
          <Link to="/projects" className="hover:underline font-medium">Projects</Link>
          <Link to="/contact" className="hover:underline font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default navbar;