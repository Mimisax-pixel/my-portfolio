import React from "react";
import html from "../assets/html5.png.png";
import css from "../assets/Css.png";
import javascript from "../assets/javascript.png";
import Rx from "../assets/reactjs.png.png";
import tailwind from "../assets/Tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: Rx,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-40 md:mt-10">
          <p className="text-3xl md:text-4xl font-bold border-b-4 dark:border-red-800 border-teal-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 font-serif">These are the technologies I have worked with</p>
        </div>

        {/* Grid container for skills */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 font-serif">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-md md:text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
