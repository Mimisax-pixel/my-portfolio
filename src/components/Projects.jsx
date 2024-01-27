import React from "react";
// import Pee from "../assets/keeperapp.png";
import miracle from "../assets/colorPicker.png";
import Blessed from "../assets/todoApp.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: miracle,
      href: "https://transcendent-muffin-8cfba4.netlify.app/",
      Code: "https://github.com/Mimisax-pixel/todo.git",
    },

    {
      id: 2,
      src: Blessed,
      href: "https://famous-yeot-6329e1.netlify.app/",
      Code: "https://github.com/Mimisax-pixel/color.git",
    },
    
  ];
  return (
    <div
      name="Projects"
      className="dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100 w-full
             md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-40">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 dark:border-red-800 border-teal-500">
            Projects
          </p>
          <p className="py-6 font-serif">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 shadow-lg">
          {projects.map(({ id, src, Code, href }) => (
            <div key={id} className=" shadow-gray-200 ronded-lg">
              <img src={src} alt="" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={Code} >Github</a>
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
