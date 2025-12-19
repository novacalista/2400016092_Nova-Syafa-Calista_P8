import React from 'react';
import ProjectCard from '../components/projectCard';

const rojects = () => {
  const projectsList = [
    {
      title: "Project 1",
      description: "Aplikasi Mobile.",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Mobile Programming.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-blue-600 text-2xl font-semibold mb-4">Projects</h2>
        {projectsList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default projects;