import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100">
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center  h-full">
        <div className="mt-60 md:mt-10">
          <p className="tracking-wide overflow-hidden font-bold inline border-b-4 dark:border-red-800 border-teal-500 text-3xl md:text-4xl mt-10">
            About Me
          </p>
        </div>
        <p className="mt-5 text-left rounded-lg p-4 dark:shadow-red-800 shadow-teal-500 shadow-md text-md">
          My Name is Wisdom Onukak (fondly likes to be called Mimi) and I’m a
          self taught Front-End Web Developer based in abeokuta Ogun state, Nigeria.
          <br /> I started my Tech journey in 2020 as a Digital Marketer.
            In September 2023, I picked interest in "Software Development” and i
            began my self taught learning. <br />it was not easy and still not easy
            but i am always sailing through because of my passion for software
            development.
            I’m involved in other commendable activities in the tech ecosystem,
            where I’m constantly sharing opportunities, giving mentorship, and
            leaving the door open for others. <br /> I spend my time helping people get
            started in tech, build early tech careers too.
          
          </p>
      </div>
    </div>
  );
};

export default About;
