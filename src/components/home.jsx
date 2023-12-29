import React from "react";
import Miracle from "../assets/bg.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-2xl md:text-7xl font-bold text-white mt-40">
            I'm a Web Developer
          </h2>
          <p className="text-white py-4 max-w-md text-2xl">
            I love to work on Web Applications using Technologies <br />
            like
            <TypeAnimation
              sequence={[
                "React Js",
                1000, 
                "Tailwind",
                1000,
                "Next Js",
                1000,
                "React Context",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-800 cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
        <div>
          <img
            src={Miracle}
            alt="HeroProfile"
            className="rounded-2xl mx-auto w-2/3 md:w-96 bg-gray-800 shadow-red-900 shadow-lg p-2 mb-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
