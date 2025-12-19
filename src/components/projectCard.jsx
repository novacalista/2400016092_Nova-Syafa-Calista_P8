import React from 'react';

const projectCard = ({ title, description, link }) => {
  return (
    <div className="bg-gray-50 p-3 mb-3 border-l-4 border-blue-600">
      <a 
        href={link} 
        className="text-blue-600 font-bold hover:underline"
      >
        {title}
      </a>
      <span className="text-gray-800"> - {description}</span>
    </div>
  );
};

export default projectCard;