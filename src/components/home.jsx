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
        {/* Text and content section */}
        <div className="flex flex-col justify-center h-full md:w-1/2 space-y-4">
          <p className="py-4 max-w-md text-base sm:text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8">
            I am Onukak Wisdom, I aim to study how we communicate with machines and through machines.
            My specific interests pertain to exploring how different media houses in underrepresented regions use other languages for reporting or writing news stories,
            and how AI-driven communication tools can enhance this process.
            <br />
            {/* Type Animation */}
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

          {/* Download CV Button */}
          <div>
            <a href="/Wisdom Onukak Academic CV.pdf" target="_blank" rel="noopener noreferrer">
              <button
                onClick={handleClick}
                className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md dark:bg-red-800 bg-teal-500 cursor-pointer font-serif font-extrabold hover:scale-105 transition-transform duration-300"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Image Section */}
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
