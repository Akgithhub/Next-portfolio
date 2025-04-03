import { MacbookScrollDemo } from "./sections/mac";
import { FloatingDockDemo } from "./sections/float-nav";
import Navbar from "../components/sections/Navbar";
import Main from "../components/sections/Main";
import Myskills from "../components/sections/Myskills";
import { TimelineDemo } from "./sections/timeline";
import { TabsDemo } from "./sections/ptabs";
import { BackgroundGradientAnimationDemo } from "./sections/bg-gradient";

export default function Home() {
  return (
    <div className="h-[100vh] w-full">
      <Navbar />
      <Main />
      <Myskills />
      <TimelineDemo />
      <MacbookScrollDemo />
      <TabsDemo />
      <BackgroundGradientAnimationDemo />
      <FloatingDockDemo />
    </div>
  );
}
