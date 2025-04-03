"use client";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import Typewriter from "typewriter-effect";
export function SVGMaskEffectDemo() {
  return (
    <div>
      <MaskContainer
        revealText={
          <h1 className="home-hello text-[2rem] font-bold text-white">
            Hello, I'm
            <span className="text-[#88ab8e] text-[4rem] pl-3">Aman Khan!</span>
          </h1>
        }
        className="rounded-md border text-white dark:text-black"
      >
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
      </MaskContainer>
    </div>
  );
}
