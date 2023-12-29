import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pt-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-800">Contact</p>
          <p className="py-6 text-white">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/572e5bf3-fb0e-4de6-bfa6-d94106b9b17a" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type=""
              name="name"
              placeholder="Enter Your Name Here"
              className="p-2 bg-transparent border-2
                rounded-md text-white focus:outline-none"
                
            />

            <input
              type=""
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2
                rounded-md text-white focus:outline-none"
            />

            <textarea
              name="Message"
              rows="10"
              placeholder="Write your Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <button className="text-white font-semibold bg-red-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md
            hover:scale-110 duration-300">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
