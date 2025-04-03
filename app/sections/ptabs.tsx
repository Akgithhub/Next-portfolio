"use client";
import { motion } from "motion/react";
import { Tabs } from "../../components/ui/tabs";

export function TabsDemo() {
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
  const tabs = [
    {
      title: "Orca.AI",
      value: "Orca.AI",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl lg:p-10 py-10 pl-2.5 pr-5 text-xl md:text-4xl font-bold text-white"
          style={{
            background:
              "linear-gradient(318deg, rgba(219,87,120,1) 13%, rgba(108,110,193,1) 44%, rgba(35,122,250,1) 87%)",
          }}
        >
          <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6">
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4 md:gap-6">
                    <h1 className="text-[1.4rem] font-semibold">
                      Orca.AI: Advanced AI Chat System
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 my-4 md:my-6 font-medium text-sm md:text-lg">
                      <img
                        src="/extra/express.svg"
                        alt="Express"
                        className="w-8 md:w-12"
                      />
                      <img
                        src="/extra/mongodb.png"
                        alt="MongoDB"
                        className="w-8 md:w-12"
                      />
                      <img
                        src="/extra/react.png"
                        alt="React"
                        className="w-8 md:w-12"
                      />
                      <div className="bg-[#cc3f3b] px-4 py-2 rounded-xl hover:scale-110 transition-all text-white text-xs md:text-base">
                        Tanstack Query
                      </div>
                      <img
                        src="/extra/gemini.svg"
                        alt="Gemini"
                        className="w-6 md:w-10"
                      />
                    </div>
                  </div>
                </>
              }
            </motion.h1>
            <motion.h1 {...animations1.h1}>
              {
                <>
                  <div className="mx-auto">
                    <img
                      src="/orca.jpg"
                      alt="dummy image"
                      className="lg:h-[300px] h-auto w-auto rounded-lg"
                    />
                  </div>
                </>
              }
            </motion.h1>
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="w-full flex items-center justify-center gap-4 md:gap-6">
                    <div className="card-data mt-4 md:mt-6 font-normal text-xs md:text-base leading-relaxed">
                      <div className="flex lg:flex-row flex-col items-start gap-4 md:gap-6 my-4 md:my-6">
                        <p className="text-base md:text-lg font-semibold mb-3 md:mb-5">
                          Orca AI: A Full Stack AI Chat System
                        </p>
                        <a
                          href="https://github.com/Akgithhub/FoodApp.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <svg
                            className="hover:scale-125 transition-all"
                            stroke="currentcolor"
                            fill="#88ab8e"
                            viewBox="0 0 496 512"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                          </svg>
                        </a>
                      </div>
                      <span className="text-[#88ab8e] font-semibold text-sm md:text-base">
                        Feature:
                      </span>
                      <p className="text-gray-300">
                        An Automated Ai Powered Chat Bot.Combines a sleek React frontend with a powerful Node.js
                        and MongoDB backend. Enjoy secure authentication via
                        Clerk, dynamic AI interactions, and smooth navigation
                        with React Router DOM. Experience the future of
                        intelligent communication with seamless data handling
                        and cutting-edge technology!
                      </p>
                      <button className="mt-4 md:mt-6 bg-[#111827] border-2 border-[#88ab8e] px-4 py-2 md:px-6 md:py-3 rounded-md text-white font-medium hover:bg-[#88ab8e] hover:text-[#111827] transition-all text-[15px]">
                        <a
                          href="https://github.com/Akgithhub/Orca.Ai.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              }
            </motion.h1>
          </div>
        </div>
      ),
    },
    {
      title: "Tomato",
      value: "Tomato",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl lg:p-10 py-10 pl-2.5 pr-5 text-xl md:text-4xl font-bold text-white"
          style={{
            background:
              "linear-gradient(318deg, rgba(221,89,13,1) 16%, rgba(204,63,59,1) 51%, rgba(104,159,56,1) 90%)",
          }}
        >
          <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6">
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4 md:gap-6">
                    <h1 className="text-[1.4rem] font-semibold">
                      Tomato: Your Ultimate Food Delivery App!
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 my-4 md:my-6 font-medium text-sm md:text-lg">
                      <img src="/extra/react.png" alt="" />
                      <img src="/extra/mongodb.png" alt="" />
                      <img src="/extra/express.svg" alt="" />
                      <img src="/extra/node.png" alt="" />
                      <img src="/extra/tailwind.png" alt="" />
                      <img src="/extra/stripe.png" alt="" />
                    </div>
                  </div>
                </>
              }
            </motion.h1>
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="mx-auto">
                    <img
                      src="/tomato.jpg"
                      alt="dummy image"
                      className="lg:h-[300px] h-auto w-auto rounded-lg"
                    />
                  </div>
                </>
              }
            </motion.h1>
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="w-full flex items-center justify-center gap-4 md:gap-6">
                    <div className="card-data mt-4 md:mt-6 font-normal text-xs md:text-base leading-relaxed">
                      <div className="flex lg:flex-row flex-col items-start gap-4 md:gap-6 my-4 md:my-6">
                        <p className="text-base md:text-lg font-semibold mb-3 md:mb-5">
                          Tomato App: Delivering your favorite meals with speed
                          and ease!
                        </p>
                        <a
                          href="https://github.com/Akgithhub/FoodApp.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <svg
                            className="hover:scale-125 transition-all"
                            stroke="currentcolor"
                            fill="#88ab8e"
                            viewBox="0 0 496 512"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                          </svg>
                        </a>
                      </div>
                      <span className="text-[#88ab8e] font-semibold text-sm md:text-base">
                        Feature:
                      </span>
                      <p className="text-gray-300">
                        Built with React, Node.js, and MongoDB. Enjoy fast
                        delivery tracking, seamless UI, and robust backend
                        support. Dive into the world of hassle-free food
                        ordering!
                      </p>
                      <button className="mt-4 md:mt-6 bg-[#111827] border-2 border-[#88ab8e] px-4 py-2 md:px-6 md:py-3 rounded-md text-white font-medium hover:bg-[#88ab8e] hover:text-[#111827] transition-all text-[15px]">
                        <a
                          href="https://github.com/Akgithhub/FoodApp.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              }
            </motion.h1>
          </div>
        </div>
      ),
    },
    {
      title: "Xcrypto",
      value: "Xcrypto",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl lg:p-10 py-10 pl-2.5 pr-5 text-xl md:text-4xl font-bold text-white"
          style={{
            background:
              "linear-gradient(318deg, rgba(10,44,72,1) 29%, rgba(0,32,63,1) 56%, rgba(173,240,209,1) 96%)",
          }}
        >
          <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6">
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-4 md:gap-6">
                    <h1 className="text-[1.4rem] font-semibold">
                      Xcrypto: Crypto Tracking App
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 my-4 md:my-6 font-medium text-sm md:text-lg">
                      <img src="/extra/react.png" alt="" />
                      <img src="/extra/chakra.png" alt="" />
                      <div className="bg-[#1f3680] p-3 rounded-xl hover:scale-110 transition-all">
                        Chart.js
                      </div>
                      <div className="bg-[#7442d1] p-3 rounded-xl hover:scale-110 transition-all">
                        Axios
                      </div>
                      <img src="/extra/tailwind.png" alt="" />
                    </div>
                  </div>
                </>
              }
            </motion.h1>
            <motion.h1 {...animations1.h1}>
              {
                <>
                  <div className="mx-auto">
                    <img
                      src="/2.jpg"
                      alt="dummy image"
                      className="lg:h-[300px] h-auto w-auto rounded-lg"
                    />
                  </div>
                </>
              }
            </motion.h1>
            <motion.h1 {...animations2.h1}>
              {
                <>
                  <div className="w-full flex items-center justify-center gap-4 md:gap-6">
                    <div className="card-data mt-4 md:mt-6 font-normal text-xs md:text-base leading-relaxed">
                      <div className="flex lg:flex-row flex-col items-start gap-4 md:gap-6 my-4 md:my-6">
                        <p className="text-base md:text-lg font-semibold mb-3 md:mb-5">
                          Xcrypto: A Full Stack Real Time Crypto Tracker
                        </p>
                        <a
                          href="https://github.com/Akgithhub/XCRYPTO-.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <svg
                            className="hover:scale-125 transition-all"
                            stroke="currentcolor"
                            fill="#88ab8e"
                            viewBox="0 0 496 512"
                            height="30"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                          </svg>
                        </a>
                      </div>
                      <span className="text-[#88ab8e] font-semibold text-sm md:text-base">
                        Feature:
                      </span>
                      <p className="text-gray-300">
                        Track live crypto values effortlessly with Xcrypto,
                        powered by React, Chakra UI, and Chart.js. Enjoy
                        real-time updates with Axios and interactive charts, all
                        in a sleek, modern interface. Stay informed and ahead in
                        the crypto market with Xcrypto! Visit Website
                      </p>
                      <button className="mt-4 md:mt-6 bg-[#111827] border-2 border-[#88ab8e] px-4 py-2 md:px-6 md:py-3 rounded-md text-white font-medium hover:bg-[#88ab8e] hover:text-[#111827] transition-all text-[15px]">
                        <a
                          href="https://github.com/Akgithhub/XCRYPTO-.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </button>
                    </div>
                  </div>
                </>
              }
            </motion.h1>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="myprojects" className="h-[80rem] md:h-[80vh] [perspective:1000px] relative flex flex-col lg:max-w-5xl mx-auto lg:w-full w-[90%] items-start justify-start lg:mb-[300px] backdrop-blur-md ">
      <Tabs tabs={tabs} />
    </div>
  );
}
