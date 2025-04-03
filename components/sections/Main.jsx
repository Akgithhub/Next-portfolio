"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundLinesDemo } from "../../app/bg-lines";
import { TextGenerateEffectDemo } from "../../app/textgeneffect";
import Typewriter from "typewriter-effect";
import { SVGMaskEffectDemo } from "../../app/svg-mask";
function Main() {
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

  const animations1 = {
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
      <div
        id="/"
        className="home w-[80%] mx-auto flex flex-col md:flex-row justify-around items-center py-8 md:mt-[4rem] lg:mb-[4rem] mb-0 gap-[7vw] "
      >
        <motion.div className="home-l text-white w-full">
          <motion.h1 {...animations.h1}>
            <div className="home-l text-white w-full">
              {/* <SVGMaskEffectDemo> */}
              <h1 className="home-hello text-[2rem] font-bold">
                Hello, I'm
                <span className="text-[#88ab8e] lg:text-[4rem] pl-3 text-[3rem]">
                  Aman Khan!
                </span>
              </h1>
              {/* </SVGMaskEffectDemo> */}
              <BackgroundLinesDemo />
              <div className="text-2xl md:text-3xl font-bold">
                <h1 className="flex gap-3">
                  A
                  <span className="text-[#88ab8e]">
                    <Typewriter
                      options={{
                        strings: [
                          "web developer",
                          "problem solver",
                          "tech enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>
              <div className="text-[#dcdcdc] py-5">
                <div className="leading-7 md:leading-8 font-light">
                  {/* I’m a Full Stack Web Developer with 1.5 years of experience,
                  specializing in both client-side and server-side development.
                  I work with technologies like React.js, Vue.js, and Next.js
                  for front-end development, and Node.js, Express.js, MongoDB
                  for back-end solutions. I also have experience with DevOps
                  practices, cloud technologies like AWS and Docker, and I’m
                  expanding my knowledge in AI and Machine Learning. */}
                  <TextGenerateEffectDemo />
                </div>
              </div>
              <div className="pb-7 flex gap-4">
                <a href="https://www.linkedin.com/in/web-devloper-amaan-khan">
                  <img src="/extra/link.svg" alt="" className="h-8 w-8" />
                </a>
                <a href="https://github.com/Akgithhub">
                  <img src="/extra/git.svg" alt="" className="h-8 w-8" />
                </a>
                <a href="mailto:amaan07devloper@gmail.com">
                  <img src="/extra/mail.svg" alt="" className="h-8 w-8" />
                </a>
                <a href="https://www.youtube.com/@Orcagent">
                  <img src="/extra/yt.svg" alt="" className="h-8 w-8" />
                </a>
              </div>
              <div className="bg-white md:hidden text-gray-700 rounded-full sm:text-sm md:px-4 md:py-2 px-2 py-1 text-center font-bold lg:font-medium border border-transparent hover:transition-all ease-in-out hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white">
                <a
                  href="https://drive.google.com/file/d/1bolNbHo9zKNKCi3Y5C5c_4Cd4Mtyzyxe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Resume</button>
                </a>
              </div>
            </div>
          </motion.h1>
        </motion.div>
        <motion.div className="home-r text-white w-full mt-5">
          <motion.h1 {...animations1.h1}>
            <>
              <img
                src="/me.jpg"
                alt="My Image"
                className="h-auto w-auto rounded-full"
              />
            </>
          </motion.h1>
        </motion.div>
      </div>
    </>
  );
}

export default Main;
