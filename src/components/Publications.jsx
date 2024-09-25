import React from "react";

const Publications = () => {
  return (
    <div name="Publications" className="w-full h-screen dark:bg-gray-900 text-gray-900 dark:text-white bg-slate-100">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  h-full">
        <div className="mt-80 md:mt-20">
          <p className="tracking-wide overflow-hidden font-bold inline border-b-4 dark:border-red-800 border-teal-500 text-3xl md:text-4xl mt-10">
            Publications
          </p>
        </div>
        <p className="mt-5 rounded-lg shadow-md text-md">
          <br /><a
            href="https://iiardjournals.org/abstract.php?j=RJMCIT&pn=The%20Media%20and%20Communal%20Crisis%20in%20Nigeria:%20A%20Study%20of%20Selected%20Radio%20Stations%20in%20Cross%20River%20State%20(2006%20-2024)&id=54875"
            target="_blank"
            rel="noopener noreferrer" className="underline text-2xl hover:text-gray-400 text-gray-900 dark:text-white hover:font-bold"

          >
            The Media and Communal Crisis in Nigeria: A case study of Selected Radio in Cross River State (2006 - 2024)
          </a>
          <h3>Onukak, Wisdom Okon, Ogunleye, Iyanuoluwa Abiola and Butum, Grace Allan</h3><br/>
        </p>
        <div>
          <h3 className="tracking-wide overflow-hidden font-bold inline border-b-4 dark:border-red-800 border-teal-500 text-3xl md:text-4xl mt-10">News Stories and Articles Published</h3><br/>
          <ul><br />
            <li className="mt-2">
              <a
                href="https://streetnews.ng/unical-denies-rumors-of-vcs-sacking/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white underline text-1xl hover:text-gray-400 hover:font-bold"
              >
                UNICAL Denies Rumours of VC's Sacking
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://streetnews.ng/governor-eno-promises-prosperous-second-year-for-aibom-state/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white underline text-1xl hover:text-gray-400 hover:font-bold"
              >
                Governor Eno Promises Prosperous Second Year For A’Ibom State
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://streetnews.ng/police-denies-raiding-nlc-secretariat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white underline text-1xl hover:text-gray-400 hover:font-bold"
              >
                Police Denies Raiding NLC Secretariat
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://streetnews.ng/army-arrest-boko-haram-commander-rescue-kidnapped-victims/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white underline text-1xl hover:text-gray-400 hover:font-bold"
              >
                Army Arrest Boko Haram Commander, Rescue Kidnapped Victims
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://streetnews.ng/protest-police-warns-against-military-takeover-arrest-90/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white underline text-1xl hover:text-gray-400 hover:font-bold"
              >
                Police Warns Against Military Takeover,  Arrest 90
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://streetnews.ng/police-arrest-spy-police-for-wearing-uniform-during-campaign/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white underline text-1xl hover:text-gray-400 hover:font-bold"
              >
                Police Arrest Spy Police For Wearing Uniform During Campaign
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Publications;
