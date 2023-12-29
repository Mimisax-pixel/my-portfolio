import React from "react";
import Pee from "../assets/keeperapp.png";
import miracle from "../assets/todoApp.png";
import Blessed from "../assets/colorPicker.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: miracle,
      href: "https://transcendent-muffin-8cfba4.netlify.app/",
      Demo: "https://github.com/Mimisax-pixel/todo.git",
    },

    {
      id: 2,
      src: Blessed,
      href: "https://famous-yeot-6329e1.netlify.app/",
      Demo: "https://github.com/Mimisax-pixel/color.git",
    },
    {
      id: 3,
      src: Pee,
    },
  ];
  return (
    <div
      name="Projects"
      className="bg-gray-800 w-full text-white
             md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-red-800 ">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, Demo, href }) => (
            <div key={id} className=" shadow-gray-200 ronded-lg">
              <img src={src} alt />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={Demo} >Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={href} >Link</a>
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
