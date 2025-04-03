"use client";
import React from "react";
import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
import { LampDemo } from "../../app/lamp-section";
// import { motion } from "motion/react";
import { LinkPreview } from "../ui/link-preview";

function Myskills() {
  // const animationClientsCount = () => {
  //   animate(0, 100, {
  //     duration: 5, // Change duration to 2 seconds for slower animation
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };

  // const animationProjectsCount = () => {
  //   animate(0, 200, {
  //     duration: 5, // Change duration to 2 seconds for slower animation
  //     onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
  //   });
  // };
  const animations = {
    h1: {
      initial: {
        y: "100%", // Starts lower
        opacity: 0,
      },
      whileInView: {
        y: 0, // Moves to normal position (top)
        opacity: 1,
        transition: {
          duration: 2,
          ease: "easeOut", // Makes the motion smoother
        },
      },
    },
  };

  return (
    <>
      <div
        id="myskills"
        className="w-[80%] flex flex-col justify-center lg:py-40 py-0 px-4 mx-auto"
      >
        <LampDemo />
        <div className="flex flex-col gap-6 my-10">
          <motion.div>
            <motion.h1 {...animations.h1}>
              <div className="text-white flex gap-7 flex-wrap">
                <h1 className="text-[1.5rem] font-medium">Languages</h1>
                <LinkPreview
                  url="https://www.w3schools.com/cpp/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/cpp.svg" alt="cpp" />
                    C++
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.python.org/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white  flex justify-center items-center gap-2">
                    <img src="/extra/py.svg" alt="" />
                    Python
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.typescriptlang.org/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white  flex justify-center items-center gap-2">
                    <img src="/extra/types.svg" alt="" />
                    TypeScript
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white  flex justify-center items-center gap-2">
                    <img src="/extra/js.svg" alt="" />
                    JavaScript
                  </button>
                </LinkPreview>
              </div>
            </motion.h1>
          </motion.div>
          <hr className="border-[#1f2220] my-5" />
          <motion.div>
            <motion.h1 {...animations.h1}>
              <div className="text-white flex gap-5 flex-wrap">
                <h1 className="text-[1.5rem] font-medium">Frontend</h1>
                <LinkPreview url="https://react.dev/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/react2.svg" alt="" />
                    React.js
                  </button>
                </LinkPreview>
                <LinkPreview url="https://nextjs.org/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/next.svg" alt="" />
                    Next.js
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://tailwindcss.com"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/tailc.svg" alt="" />
                    Tailwind CSS
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/js.svg" alt="" />
                    JavaScript (ES6+)
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/html.svg" alt="" />
                    HTML5
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/css.svg" alt="" />
                    CSS3
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.typescriptlang.org/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/types.svg" alt="" />
                    TypeScript
                  </button>
                </LinkPreview>
                <LinkPreview url="https://chakra-ui.com/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/chakra.svg" alt="" />
                    Chakra UI
                  </button>
                </LinkPreview>
                <LinkPreview url="https://motion.dev/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/fm.svg" alt="" />
                    Framer Motion
                  </button>
                </LinkPreview>
                <LinkPreview url="https://wordpress.com/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/cms.svg" alt="" />
                    CMSs
                  </button>
                </LinkPreview>
              </div>
            </motion.h1>
          </motion.div>
          <hr className="border-[#1f2220] my-5" />
          <motion.div>
            <motion.h1 {...animations.h1}>
              <div className="text-white flex gap-5 flex-wrap">
                <h1 className="text-[1.5rem] font-medium">Backend</h1>
                <LinkPreview url="https://nodejs.org/en" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/node.svg" alt="" />
                    Node.js
                  </button>
                </LinkPreview>
                <LinkPreview url="https://expressjs.com/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/express1.svg" alt="" />
                    Express.js
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.mongodb.com/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/mgdb.svg" alt="" />
                    MongoDB
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.w3schools.com/sql/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/sql.svg" alt="" />
                    SQL
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.geeksforgeeks.org/introduction-to-nosql/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/nsql.svg" alt="" />
                    Non-SQL
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.geeksforgeeks.org/rest-api-introduction/#:~:text=What%20is%20a%20REST%20API,JSON%20or%20XML%20for%20communication."
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/rapi.svg" alt="" />
                    REST APIs
                  </button>
                </LinkPreview>
                <LinkPreview url="https://www.mysql.com/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/mysql.svg" alt="" />
                    MySQL
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.postgresql.org/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/ps.svg" alt="" />
                    PostgresSQL
                  </button>
                </LinkPreview>
                <LinkPreview url="https://graphql.org/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/gql.svg" alt="" />
                    GraphQL
                  </button>
                </LinkPreview>
              </div>
            </motion.h1>
          </motion.div>
          <hr className="border-[#1f2220] my-5" />
          <motion.div>
            <motion.h1 {...animations.h1}>
              <div className="text-white flex gap-5 flex-wrap">
                <h1 className="text-[1.5rem] font-medium">Others</h1>
                <LinkPreview
                  url="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/seo.svg" alt="" />
                    SEO
                  </button>
                </LinkPreview>
                <LinkPreview url="v" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/github1.svg" alt="" />
                    Github
                  </button>
                </LinkPreview>
                <LinkPreview url="https://git-scm.com/" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/git1.svg" alt="" />
                    Git
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.docker.com/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/docker.svg" alt="" />
                    Docker
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/dsa.svg" alt="" />
                    Data Structure & Algorithms
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/cpp.svg" alt="" />
                    OOPs
                  </button>
                </LinkPreview>
                <LinkPreview url="https://nodejs.org/en" className="font-bold">
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/psg.svg" alt="" />
                    Problem Solving
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://www.geeksforgeeks.org/system-design-tutorial/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/sysd.svg" alt="" />
                    System Design
                  </button>
                </LinkPreview>
                <LinkPreview
                  url="https://aws.amazon.com/"
                  className="font-bold"
                >
                  <button className="hover:bg-white hover:text-gray-700 rounded-lg text-sm md:px-4 md:py-3 px-2 py-1 text-center font-medium border-2 hover:border-transparent hover:transition-all ease-in-out border-[#88ab8e] bg-[#111827] text-white flex justify-center items-center gap-2">
                    <img src="/extra/aws.svg" alt="" />
                    AWS (S3, EC2)
                  </button>
                </LinkPreview>
              </div>
            </motion.h1>
          </motion.div>
          <hr className="border-[#1f2220] my-5" />
        </div>
      </div>
    </>
  );
}

export default Myskills;
