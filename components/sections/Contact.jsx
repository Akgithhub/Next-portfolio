"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useForm as userformer } from "@formspree/react";
import { animate, motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit1] = userformer("xwkgyyzj");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSubmit1(data); // Call your custom submit handler
    reset(); // Clears the form fields
  };

  const animations = {
    h1: {
      initial: {
        y: "10vh", // Move up by 10% of viewport height initially
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

  return (
    <>
      <div id="contact" className="contact lg:mt-[10%]">
        <motion.h1 {...animations.h1}>
          <div className="text-lg md:text-xl lg:text-2xl font-semibold flex justify-center items-center flex-col text-center p-[5vh] gap-8 text-white">
            <h1>My Contact</h1>
            <h1 className="head flex flex-row lg:text-[3rem] text-[2rem] lg:gap-6 gap-3 font-semibold">
              Contact <span className="text-[#88ab8e]">Me Here</span>
            </h1>
          </div>
          <form
            // onSubmit={handleSubmit(handleSubmit1)}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center gap-6 text-black"
          >
            <input
              className="bg-[#191919] z-[99999] text-white font-medium border-2 border-white lg:p-3 lg:pr-16 px-6 py-1.5 rounded-md text-[16px] lg:text-[20px]"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              {...register("name", {
                required: "Please enter your name",
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className="text-[#d4d651] bg-[#191919]  rounded-xl font-medium p-4 ">
                Name is required
              </p>
            )}
            <input
              className="bg-[#191919] z-[99999] text-white font-medium border-2 border-white lg:p-3 lg:pr-16 px-6 py-1.5 rounded-md text-[16px] lg:text-[20px]"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your Email"
              {...register("mail", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                  message: "Invalid email format or not a Gmail address",
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />

            {errors.mail && (
              <p className="text-[#d4d651] bg-[#191919] rounded-xl font-medium p-4">
                {errors.mail.message}
              </p>
            )}
            <input
              className="bg-[#191919] z-[99999] text-white font-medium border-2 border-white lg:p-3 lg:pr-16 px-6 py-1.5 rounded-md text-[16px] lg:text-[20px]"
              type="text"
              id="message"
              name="message"
              placeholder="Enter your Message"
              {...register("Message", { required: true })}
            />
            {errors.Message && (
              <p className="text-[#d4d651] bg-[#191919]  rounded-xl font-medium p-4">
                This field is required
              </p>
            )}
            <input
              type="submit"
              disabled={state.submitting}
              className="text-white z-[99999] text-[15px] lg:text-[20px] bg-[#88ab8e] rounded-md font-semibold lg:px-8 lg:py-3 px-5 py-1.5 hover:scale-110 transition-all cursor-pointer hover:bg-[#111827] hover:border-[#88ab8e] hover:text-[#88ab8e]"
            />
          </form>
          <div className="flex justify-center items-center pt-8 gap-10">
            <a href="https://www.linkedin.com/in/web-devloper-amaan-khan">
              <img src="/extra/link.svg" alt="" className="z-[99999]" />
            </a>
            <a href="https://github.com/Akgithhub">
              <img src="/extra/git.svg" alt="" className="z-[99999]" />
            </a>
          </div>
        </motion.h1>
      </div>
    </>
  );
}

export default Contact;
