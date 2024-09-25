import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-40 md:mt-20">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 dark:border-red-800 border-teal-500">
            Contact
          </p>
          <p className="py-6 font-serif">
            Submit the form below to get in touch with me
          </p>
        </div>
        
        {/* Form container */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/572e5bf3-fb0e-4de6-bfa6-d94106b9b17a"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            {/* Input for Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name Here"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none 
              shadow-md dark:shadow-red-800 shadow-teal-500 transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white text-gray-900"
            />

            {/* Input for Email */}
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none 
              shadow-md dark:shadow-red-800 shadow-teal-500 transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white text-gray-900"
            />

            {/* Textarea for Message */}
            <textarea
              name="Message"
              rows="10"
              placeholder="Write your Message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none 
              shadow-md dark:shadow-red-800 shadow-teal-500 transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white text-gray-900"
            />

            {/* Submit button */}
            <button
              className="text-white font-semibold dark:bg-red-800 bg-teal-500 px-6 py-3 my-8 mx-auto
              flex items-center justify-center rounded-md hover:scale-110 hover:bg-teal-600 dark:hover:bg-red-900 
              transition-all duration-300 ease-in-out"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
