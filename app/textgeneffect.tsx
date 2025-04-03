"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `I’m a Full Stack Web Developer with 1.5 years of experience in both frontend and backend development. I specialize in React.js, Vue.js, Next.js, Node.js, Express.js, and MongoDB. I also have expertise in DevOps, AWS, Docker, and low-code platforms like WordPress, Craft CMS, and Kirby CMS. Additionally, I have experience in digital marketing and SEO.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
