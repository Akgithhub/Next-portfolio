import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Myexperience() {
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

  return (
    <>
      <div
        // id="myexperience"
        className="experience text-white flex justify-center items-center flex-col w-[80%] m-auto"
      >
        <div class="text-lg md:text-xl lg:text-2xl font-semibold md:mt-0 mt-[30vh]">
          <motion.h1 {...animations.h1}>
            <h1>My Experience</h1>
          </motion.h1>
        </div>
        <div class="text-xl md:text-3xl lg:text-4xl font-bold pb-28">
          <motion.h1 {...animations.h1}>
            <h1 class="flex gap-3">
              Where <span class="text-[#88ab8e]">I have worked</span>
            </h1>
          </motion.h1>
        </div>

        <div className="w-full">
          <VerticalTimeline>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="June 2024"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-[1.5rem] font-semibold">
                Web Developer Intern
              </h3>
              <h4 className="my-h vertical-timeline-element-subtitle text-[2rem] font-semibold">
                @ Afame Technologies
              </h4>
              <p>
                - Developed responsive web apps using <strong>HTML</strong>,{" "}
                <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
                <strong>React.js</strong>.<br />- Assisted in back-end
                integration with <strong>Node.js</strong> and{" "}
                <strong>Express.js</strong> .
                <br />- Debugged and optimized code for cross-browser
                compatibility
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#88AB8E" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="2022 - 2025"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              {/* <h3 className="vertical-timeline-element-title">
                M.S. Mathematics and Computing
              </h3> */}
              <h4 className="my-h vertical-timeline-element-subtitle text-[2rem] font-semibold">
                # Kurukshetra University
              </h4>
              <p>
                Final-year BCA student specializing in{" "}
                <strong>Full-Stack Web Development</strong>. <br />
                Focused on integrating creativity and functionality in both{" "}
                <strong>front-end</strong> and <strong>back-end</strong>{" "}
                technologies. <br />
                Open to collaborations on innovative web development projects.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="July 2024"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-[1.5rem] font-semibold">
                Frontend Developer Intern
              </h3>
              <h4 className="my-h vertical-timeline-element-subtitle text-[2rem] font-semibold">
                @ DigiGlobe Solutions
              </h4>
              <p>
                Collaborated with senior developers to build responsive web apps
                using <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
                <strong>React.js</strong>. Gained hands-on experience in
                front-end development and participated in code reviews to ensure
                code quality. Optimized web app performance and consistently
                delivered milestones on time.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: "#191919", color: "#88AB8E" }}
              contentArrowStyle={{ borderRight: "7px solid  #191919" }}
              date="2024"
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title text-[1.5rem] font-semibold">
                Full Stack Web Developer
              </h3>
              <h4 className="my-h vertical-timeline-element-subtitle text-[2rem] font-semibold">
                # AuCourant Cyberspace
              </h4>
              <p>
                Developed and maintained both <strong>front-end</strong> and{" "}
                <strong>back-end</strong> components, ensuring seamless
                integration of all layers. <br />
                Optimized websites for search engines (<strong>SEO</strong>) to
                improve rankings and enhance online visibility. <br />
                Performed thorough <strong>testing</strong> to ensure
                high-quality, bug-free deliverables. <br />
                Continually expanded knowledge of new technologies to integrate
                innovative solutions and improve project outcomes.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Myexperience;
