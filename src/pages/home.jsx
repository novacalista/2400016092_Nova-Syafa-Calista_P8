import React from 'react';

const home = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Profile Image */}
      <img 
        src="/fotonova.jpg" 
        alt="Profile" 
        className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover mb-5"
      />

      {/* About Me Card */}
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-blue-600 text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-800 leading-relaxed">
          Saya merupakan mahasiswa Sistem Informasi semester 3 di Universitas Ahmad Dahlan Yogyakarta. 
          Saya memiliki minat pada bidang pemrograman dan pengembangan teknologi berbasis website, 
          serta terus berusaha mengasah kemampuan untuk menciptakan solusi digital yang inovatif.
        </p>
      </div>
    </div>
  );
};

export default home;