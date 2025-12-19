import React from 'react';

const contact = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-blue-600 text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-800 my-2">
          Email: novasyafac@gmail.com
        </p>
        <p className="text-gray-800 my-2">
          LinkedIn: <a href="#" className="text-blue-600 hover:underline">Nova Calista</a>
        </p>
      </div>
    </div>
  );
};

export default contact;