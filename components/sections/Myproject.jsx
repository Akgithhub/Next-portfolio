import React from "react";
import pic from "../assets/2.jpg";
import pic1 from "../assets/3.jpg";
import { Tilt } from "react-tilt";
import orca from "../assets/orca.jpg";
import tomato from "../assets/tomato.jpg";

import { animate, motion } from "framer-motion";
function Myproject() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const animations = {
    h1: {
      initial: {
        y: "-10vh", // Move up by 10% of viewport height initially
        opacity: 0,
      },
      whileInView: {
        y: 0, // Return to original position
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };
  const animations1 = {
    h1: {
      initial: {
        x: "-10%",
        opacity: 0,
      },
      whileInView: {
        x: 10,
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };

  const animations2 = {
    h1: {
      initial: {
        x: "10%",
        opacity: 0,
      },
      whileInView: {
        x: 10,
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };
  return (
    <>
      {" "}
      <div
        id="myprojects"
        className="projects text-white flex justify-center items-center lg:mt-40vh lg:mb-20vh sm:mt-[30vh]"
      >
        <div className="flex flex-col lg:flex-col md:flex-col gap-[6vh] ">
          <div>
            {" "}
            <motion.h1 {...animations.h1}>
              {
                <>
                  <h1 className="text-[1.5rem] font-bold">MY PROJECTS</h1>
                  <h1 className="text-[3rem] font-bold flex gap-3 lg:flex-row flex-col">
                    What <h1 className="text-[#88ab8e]">I have built</h1>
                  </h1>
                </>
              }
            </motion.h1>
          </div>
          <div className="card1 flex flex-col lg:flex-row md:flex-col justify-center items-center md:gap-7 my-20">
            <div className="w-full">
              <motion.h1 {...animations1.h1}>
                {
                  <>
                    <img
                      src={orca}
                      alt="WEBSITE IMAGE"
                      className="h-full w-auto md:h-[400px] md:w-auto lg:h-[400px] lg:w-[800px] rounded-lg"
                    />
                  </>
                }
              </motion.h1>
            </div>
            <div className="data w-full pt-7 md:pt-0 lg:pt-0">
              <motion.h1 {...animations2.h1}>
                {
                  <>
                    <div className="flex gap-10 lg:flex-row justify-start items-center">
                      <h1 className="text-[2rem] font-semibold">
                        Orca.AI: Advanced AI Chat System
                      </h1>
                      <a
                        href="https://github.com/Akgithhub/Orca.Ai.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <svg
                          className="hover:scale-125 transition-all"
                          stroke="currentcolor"
                          fill="#88ab8e"
                          stroke-width="0"
                          viewBox="0 0 496 512"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="flex justify-start flex-wrap gap-6 my-[1rem] font-medium text-[1rem]">
                      <img src="./express.svg" alt="" />
                      <img src="./mongodb.png" alt="" />
                      <img src="./react.png" alt="" />
                      <div className="bg-[#cc3f3b] p-3 rounded-xl hover:scale-110 transition-all">
                        Tanstack Query
                      </div>
                      <img src="./gemini.svg" alt="" className="w-[5vh]" />
                    </div>
                    <h1 className="card-data mt-[2vh] font-normal">
                      <p className="text-[18px] mb-5">
                        Orca AI: A Full Stack AI Chat System
                      </p>
                      <span className="text-[#88ab8e] mt-6">Feature:</span>
                      Combines a sleek React frontend with a powerful Node.js
                      and MongoDB backend. Enjoy secure authentication via
                      Clerk, dynamic AI interactions, and smooth navigation with
                      React Router DOM. Experience the future of intelligent
                      communication with seamless data handling and cutting-edge
                      technology!
                    </h1>
                    <button className="md:mt-[2vh] mt-[3vh] bg-[#111827] border-2 border-[#88ab8e] p-4 rounded-md text-white font-medium">
                      <a href="https://github.com/Akgithhub/Orca.Ai.git">
                        Visit Website
                      </a>
                    </button>
                  </>
                }
              </motion.h1>
            </div>
          </div>
          <div className="card2 flex flex-col lg:flex-row md:flex-col justify-center items-center md:gap-7 my-20">
            <div className="data w-full pt-7 md:pt-0 lg:pt-0">
              <motion.h1 {...animations2.h1}>
                {
                  <>
                    <div className="flex gap-10 lg:flex-row justify-start items-center">
                      <h1 className="text-[2rem] font-semibold">
                        Tomato: Your Ultimate Food Delivery App!
                      </h1>
                      <a
                        href="https://github.com/Akgithhub/FoodApp.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="hover:scale-125 transition-all"
                          stroke="currentcolor"
                          fill="#88ab8e"
                          strokeWidth="0"
                          viewBox="0 0 496 512"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="flex justify-start flex-wrap gap-6 my-[1rem] font-medium text-[1rem]">
                      <img src="./react.png" alt="" />
                      <img src="./mongodb.png" alt="" />
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        Express js
                      </div> */}
                      <img src="./express.svg" alt="" />
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        Node ja
                      </div> */}
                      <img src="./node.png" alt="" />
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        Tailwind
                      </div> */}
                      <img src="./tailwind.png" alt="" />
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        Stripe
                      </div> */}
                      <img src="./stripe.png" alt="" />
                      <div className="bg-[#cc3f3b] p-3 rounded-xl hover:scale-110 transition-all">
                        Fast Delivery
                      </div>
                      <img
                        src="./mongodb.png"
                        alt="MongoDB Logo"
                        className="w-[5vh]"
                      />
                    </div>
                    <h1 className="card-data mt-[2vh] font-normal">
                      <p className="text-[18px] mb-5">
                        Tomato App: Delivering your favorite meals with speed
                        and ease!
                      </p>
                      <span className="text-[#88ab8e] mt-6">Feature:</span>
                      Built with React, Node.js, and MongoDB. Enjoy fast
                      delivery tracking, seamless UI, and robust backend
                      support. Dive into the world of hassle-free food ordering!
                    </h1>
                    <button className="md:mt-[2vh] mt-[3vh] bg-[#111827] border-2 border-[#88ab8e] p-4 rounded-md text-white font-medium mb-5">
                      <a href="https://github.com/Akgithhub/FoodApp.git">
                        Visit Website
                      </a>
                    </button>
                  </>
                }
              </motion.h1>
            </div>
            <div className="w-full">
              <motion.h1 {...animations1.h1}>
                {
                  <>
                    <img
                      src={tomato}
                      alt="Food Delivery App"
                      className="h-full w-auto md:h-[400px] md:w-auto lg:h-[400px] lg:w-[800px] rounded-lg"
                    />
                  </>
                }
              </motion.h1>
            </div>
          </div>
          <div className="card4 flex flex-col lg:flex-row md:flex-col justify-center items-center md:gap-7 my-20">
            <div className="w-full">
              <motion.h1 {...animations1.h1}>
                {
                  <>
                    <img
                      src={pic}
                      alt="WEBSITE IMAGE"
                      className="h-full w-auto md:h-[400px] md:w-auto lg:h-[400px] lg:w-[800px] rounded-lg"
                    />
                  </>
                }
              </motion.h1>
            </div>
            <div className="data w-full pt-7 md:pt-0 lg:pt-0">
              <motion.h1 {...animations2.h1}>
                {
                  <>
                    <div className="flex gap-10 lg:flex-row justify-start items-center">
                      <h1 className="text-[2rem] font-semibold">
                        Xcrypto: Crypto Tracking App
                      </h1>
                      <a
                        href="https://github.com/Akgithhub/Project4.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="hover:scale-125 transition-all"
                          stroke="currentcolor"
                          fill="#88ab8e"
                          stroke-width="0"
                          viewBox="0 0 496 512"
                          height="30"
                          width="30"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="..." />
                        </svg>
                      </a>
                    </div>
                    <div className="flex justify-start flex-wrap gap-6 my-[1rem] font-medium text-[1rem]">
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        React js
                      </div> */}
                      <img src="./react.png" alt="" />
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        Chakra UI React
                      </div> */}
                      <img src="./chakra.png" alt="" />
                      <div className="bg-[#1f3680] p-3 rounded-xl hover:scale-110 transition-all">
                        Chart.js
                      </div>
                      {/* <img src="./chart.png" alt="" /> */}
                      <div className="bg-[#7442d1] p-3 rounded-xl hover:scale-110 transition-all">
                        Axios
                      </div>
                      {/* <img src="./axios.svg" alt="" /> */}
                      {/* <div className="bg-[#88ab8e] p-3 rounded-xl hover:scale-110 transition-all">
                        Tailwind
                      </div> */}
                      <img src="./tailwind.png" alt="" />
                    </div>
                    <h1 className="card-data mt-[2vh] font-normal">
                      <p className="text-[18px] mb-5">
                        Xcrypto: A Full Stack Real Time Crypto Tracker
                      </p>
                      <span className="text-[#88ab8e] mt-6">Feature:</span>
                      Track live crypto values effortlessly with Xcrypto,
                      powered by React, Chakra UI, and Chart.js. Enjoy real-time
                      updates with Axios and interactive charts, all in a sleek,
                      modern interface. Stay informed and ahead in the crypto
                      market with Xcrypto!
                    </h1>
                    <button className="md:mt-[2vh] mt-[3vh] bg-[#111827] border-2 border-[#88ab8e] p-4 rounded-md text-white font-medium">
                      <a href="https://github.com/Akgithhub/Project4.git">
                        Visit Website
                      </a>
                    </button>
                  </>
                }
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myproject;
