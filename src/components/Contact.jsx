import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100 ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-2">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-red-800">Contact</p>
          <p className="py-6 font-serif">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/572e5bf3-fb0e-4de6-bfa6-d94106b9b17a" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type=""
              name="name"
              placeholder="Enter Your Name Here"
              className="p-2 bg-transparent border-2
                rounded-md  focus:outline-none shadow-md dark:shadow-red-800 shadow-teal-500"
                
            />

            <input
              type=""
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2
                rounded-md focus:outline-none shadow-md dark:shadow-red-800 shadow-teal-500"
            />

            <textarea
              name="Message"
              rows="10"
              placeholder="Write your Message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none shadow-md dark:shadow-red-800 shadow-teal-500"
            />

            <button className="text-white font-semibold dark:bg-red-800 bg-teal-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
            hover:scale-110 duration-300">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
