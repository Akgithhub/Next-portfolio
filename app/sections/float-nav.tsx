import { FloatingDock } from "../../components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
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
      icon: <Image src="/extra/link.svg" alt="" width={500} height={500} />,
      href: "https://www.linkedin.com/in/web-devloper-amaan-khan",
    },
    {
      title: "Github",
      icon: <Image src="/extra/git.svg" alt="" width={500} height={500} />,
      href: "https://github.com/Akgithhub",
    },
    {
      title: "Skills",
      icon: (
        <Image
          src="/extra/skill.svg"
          alt="Skills"
          width={500}
          height={500}
        />
      ),
      href: "#myskills",
    },
    {
      title: "Contact",
      icon: <Image src="/extra/mail.svg" alt="" width={500} height={500} />,
      href: "mailto:amaan07devloper@gmail.com",
    },
    {
      title: "Resume",
      icon: (
        <Image
          src="/extra/w-resume.svg"
          alt="Resume"
          width={500}
          height={500}
        />
      ),
      href: "https://drive.google.com/file/d/1x48XcsXKOa-iURm3gAyRlYgX-E51SvbI/view?usp=sharing",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Projects",
      icon: (
        <Image
          src="/extra/project.svg"
          alt="projects"
          width={500}
          height={500}
        />
      ),
      href: "#myprojects",
    },
  ];
  return (
    <div
      id="floatdock"
      className="flex items-center justify-center w-full fixed lg:bottom-[50px] lg:left-[20px] bottom-[100px] left-[150px]"
    >
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
