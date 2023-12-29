import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gray-800 text-white">
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-8">
          <p className="tracking-wide font-bold inline border-b-4 border-red-800 text-4xl text-md">
            About Me
          </p>
        </div>
        <p className="mt-20 text-left text-white bg-gray-800 rounded-lg p-4 shadow-red-800 shadow-md text-md">
          My Name is Wisdom Onukak (fondly likes to be called Mimi) and I’m a
          self taught Front-End Web Developer based in Lagos, Nigeria.
          <br /> I started my Tech journey in 2020 as a Digital Marketer.
          <p>
            In September 2023, I picked interest in "Software Development” and i
            began my self taught learning, it was not easy and still not easy
            but i am always sailing through because of my passion for software
            development.
          </p>
          <br />
          <p>
            I graduated from the University of Cross Rivers State, Calabar
            (UNICROSS), with a B.Sc in Mass Communication.{" "}
          </p>
          <p>
            I’m involved in other commendable activities in the tech ecosystem,
            where I’m constantly sharing opportunities, giving mentorship, and
            leaving the door open for others.I spend my time helping people get
            started in tech, build early tech careers too. I do this by
            enlightening them about the future of Tech hosting 1:1 sessions, and
            I also dedicate my time to posting daily job openings on my social
            media channels.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
