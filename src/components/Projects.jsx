import React from "react";
// import Pee from "../assets/keeperapp.png";
import miracle from "../assets/grad.png";
import Blessed from "../assets/great.png";
import hlf from "../assets/hlf.png";
import help from "../assets/Helping.png";
import water from "../assets/water.png";
import ifiok from "../assets/ifiok.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: miracle,
    },
    {
      id: 2,
      src: Blessed,
    },
    {
      id: 3,
      src: hlf,
    },
    {
      id: 4,
      src: water,
    },
    {
      id: 5,
      src: help,
    },
    {
      id: 6,
      src: ifiok,
    },
  ];

  return (
    <div
      name="Projects"
      className="dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-40 md:mt-10">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 dark:border-red-800 border-teal-500">
            Community Service
          </p>
          <p className="py-6 font-serif">
            This took place in 2021, while I was still in tertiary institution
          </p>
        </div>

        {/* Responsive grid for project images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 px-4 sm:px-0">
          {projects.map(({ id, src }) => (
            <div
              key={id}
              className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Project ${id}`}
                className="w-full h-48 sm:h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
