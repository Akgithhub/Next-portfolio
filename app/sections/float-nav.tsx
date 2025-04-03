import React from "react";
import { FloatingDock } from "../../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: <img src="/extra/link.svg" alt="" />,
      href: "https://www.linkedin.com/in/web-devloper-amaan-khan",
    },
    {
      title: "Github",
      icon: <img src="/extra/git.svg" alt="" />,
      href: "https://github.com/Akgithhub",
    },
    {
      title: "Skills",
      icon: (
        <Image
          src="/extra/skill.svg"
          width={20}
          height={20}
          alt="Skills"
        />
      ),
      href: "#myskills",
    },
    {
      title: "Contact",
      icon: <img src="/extra/mail.svg" alt="" />,
      href: "mailto:amaan07devloper@gmail.com",
    },
    {
      title: "Resume",
      icon: <img src="/extra/w-resume.svg" alt="Resume" />,
      href: "https://drive.google.com/file/d/1x48XcsXKOa-iURm3gAyRlYgX-E51SvbI/view?usp=sharing",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Projects",
      icon: <img src="/extra/project.svg" alt="projects" />,
      href: "#myprojects",
    },
  ];
  return (
    <div id="floatdock" className="flex items-center justify-center w-full fixed lg:bottom-[50px] lg:left-[20px] bottom-[100px] left-[150px]">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
