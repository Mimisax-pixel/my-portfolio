import React from "react";
import Miracle from "../assets/bg.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  function handleClick() {
    alert("Downloaded successfully! 🚀");
  }

  return (
    <div
      name="Home"
      className="h-screen w-full dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-serif mt-40 md:mt-0">
            Hi! I'm Onukak Wisdom. <br />
            I study how we communicate with and through machines.
          </h3>
          <p className="py-4 max-w-md text-md md:text-lg">
            Specific interests of mine pertain to exploring how different media houses in underrepresented regions use other languages for reporting or writing news stories and how AI-driven communication tools can enhance this process.
            I am particularly interested in how AI can bridge language barriers and bias. Additionally, I aim to explore how cultural inaccuracies in AI algorithms impact media reporting and how AI can be adapted to respect local cultural contexts for more inclusive news communication.
            <br />
            <TypeAnimation
              sequence={[
                "My Research Interest is in",
                1000,
                "Human-Computer Interaction",
                1000,
                "Human-Machine Communication",
                1000,
                "Artificial Intelligence",
                1000,
                "Global Digital Media Culture",
                1000,
                "Emerging Technologies",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </p>
          <div>
            <a href="/my cv.pdf" target="_blank" rel="noopener noreferrer">
              <button
                onClick={handleClick}
                className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md dark:bg-red-800 bg-teal-500 cursor-pointer font-serif font-extrabold"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={Miracle}
            alt="HeroProfile"
            className="rounded-2xl w-40 sm:w-60 md:w-80 lg:w-96 dark:bg-gray-900 bg-slate-100 dark:shadow-red-900 shadow-teal-500 shadow-lg p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
