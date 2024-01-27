import React from "react";
import Miracle from "../assets/bg.png";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  function handleClick () {
    alert("Downloaded successfully! 🚀")
  }
  return (
    
    <div
      name="Home"
      className="h-screen w-full dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className=" md:text-7xl font-bold font-serif mt-60">
            I'm a Web Developer
          </h3>
          <p className=" py-4 max-w-md text-2xl font-serif">
            I love to work on Web Applications using Technologies <br />
            like
            <TypeAnimation
              sequence={[
                "React Js",
                1000, 
                "Tailwind",
                1000,
                "Typescript",
                1000,
                
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </p>
          <div>
            <a  href="/my cv.pdf" target="_blank" rel="noopener ">
            <button onClick={handleClick} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md dark:bg-red-800 bg-teal-500 cursor-pointer font-serif font-extrabold " >
              Download CV
            </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={Miracle}
            alt="HeroProfile"
            className="rounded-2xl mx-auto w-60 md:w-96 dark:bg-gray-900 bg-slate-100  dark:shadow-red-900 shadow-teal-500 shadow-lg p-2 md:mt-40 mt-20"
          />
        </div>

      </div>
    </div>
  );
            
};

export default Home;
