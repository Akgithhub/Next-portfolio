import Image from "next/image";
import React from "react";
import { Timeline } from "../../components/ui/timeline";
import { GoogleGeminiEffectDemo } from "../ggeffect";
export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h3 className="lg:text-[1.5rem] text-[1.7rem] font-semibold text-white">
            Full Stack Web Developer
          </h3>
          <h4 className="py-2 lg:text-[2rem] font-semibold text-[#88ab8e]">
            AuCourant Cyberspace
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[1rem] font-normal mb-8">
            Developed and maintained both front-end and back-end components,
            ensuring seamless integration of all layers. Optimized websites for
            search engines (SEO) to improve rankings and enhance online
            visibility. Performed thorough testing to ensure high-quality,
            bug-free deliverables. Continually expanded knowledge of new
            technologies to integrate innovative solutions and improve project
            outcomes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://aucourantcyberspace.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/extra/acs.jpeg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-auto md:h-auto lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </a>
            {/* <Image
              src="/mac-screen-scroll.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mac-screen-scroll.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mac-screen-scroll.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "July 2024",
      content: (
        <div>
          <h3 className="lg:text-[1.5rem] text-[1.7rem] font-semibold text-white">
            Frontend Developer Intern
          </h3>
          <h4 className="py-2 lg:text-[2rem] font-semibold text-[#88ab8e]">
            DigiGlobe Solutions
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[1rem] font-normal mb-8">
            Collaborated with senior developers to build responsive web apps
            using HTML, CSS, and React.js. Gained hands-on experience in
            front-end development and participated in code reviews to ensure
            code quality. Optimized web app performance and consistently
            delivered milestones on time.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/extra/dg-globe.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/extra/dgglobe-cer.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src="/mac-screen-scroll.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mac-screen-scroll.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2025",
      content: (
        <div>
          <h3 className="lg:text-[1.5rem] text-[1.7rem] font-semibold text-white">
            Hackothons
          </h3>
          <h4 className="py-2 lg:text-[2rem] font-semibold text-[#88ab8e]">
            Kurukshetra University
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[1rem] font-normal mb-8">
            Final-year BCA student specializing in Full-Stack Web Development.
            Focused on integrating creativity and functionality in both
            front-end and back-end technologies. Open to collaborations on
            innovative web development projects.
          </p>
          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/extra/kuk-logo.png"
              alt="hero template"
              className="rounded-lg object-cover h-auto md:h-44 lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/extra/hack-vcer.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            {/* <Image
              src="/mac-screen-scroll.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mac-screen-scroll.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
    {
      title: "June 2024",
      content: (
        <div>
          <h3 className="lg:text-[1.5rem] text-[1.7rem] font-semibold text-white">
            Web Developer Intern
          </h3>
          <h4 className="py-2 lg:text-[2rem] font-semibold text-[#88ab8e]">
            Afame Technologies
          </h4>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-[1rem] font-normal mb-8">
            - Developed responsive web apps using HTML, CSS, JavaScript, and
            React.js. - Assisted in back-end integration with Node.js and
            Express.js . - Debugged and optimized code for cross-browser
            compatibility
          </p>
          {/* <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/extra/afame.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-auto md:h-44 lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

            {/* <Image
              src="/mac-screen-scroll.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mac-screen-scroll.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/mac-screen-scroll.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <GoogleGeminiEffectDemo />
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </>
  );
}
