"use client";

// import {
//   Drawer,
//   DrawerBody,
//   DrawerOverlay,
//   DrawerContent,
//   useDisclosure,
//   Button,
// } from "@chakra-ui/react";

function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, setPlacement] = React.useState("left");
  // const scrollToSection = () => {
  //   document.getElementById("target-section")?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      <div className="h-[4rem] flex justify-around md:justify-between items-center py-[4rem] md:px-[5rem] z-[999]">
        <h1 className="text-white text-[1.5rem] sm:text-xl font-bold flex">
          Aman Khan <p className="text-[#88ab8e]">.Dev</p>
        </h1>
        <ul className="hidden md:flex justify-evenly items-center md:gap-[12px] gap-[6px]">
          <li className="bg-white text-gray-700 rounded-full sm:text-sm md:px-4 md:py-2 px-2 py-1 text-center font-bold border border-transparent hover:transition-all ease-in-out hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white">
            <a href="#">Home</a>
          </li>
          <li className="bg-white text-gray-700 rounded-full sm:text-sm md:px-4 md:py-2 px-2 py-1 text-center font-bold border border-transparent hover:transition-all ease-in-out hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white">
            <a href="#myskills">Skills</a>
          </li>
          <li className="bg-white text-gray-700 rounded-full sm:text-sm md:px-4 md:py-2 px-2 py-1 text-center font-bold border border-transparent hover:transition-all ease-in-out hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white">
            <a href="#myexperience">Experience</a>
          </li>
          <li className="bg-white text-gray-700 rounded-full sm:text-sm md:px-4 md:py-2 px-2 py-1 text-center font-bold border border-transparent hover:transition-all ease-in-out hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white">
            <a href="#myprojects">Projects</a>
          </li>
          <li className="bg-white text-gray-700 rounded-full sm:text-sm md:px-4 md:py-2 px-2 py-1 text-center font-bold border border-transparent hover:transition-all ease-in-out hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1x48XcsXKOa-iURm3gAyRlYgX-E51SvbI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white hidden lg:flex text-gray-700 gap-2 justify-center items-center rounded-lg px-5 py-2 text-center font-bold border border-transparent hover:transition-all hover:border-[#88ab8e] hover:bg-[#111827] hover:text-white md:px-4 md:py-2 sm:px-3 sm:py-1 sm:text-sm">
            Resume
            <img src="/extra/download.svg" alt="Resume" />
          </button>
        </a>
        {/* <div className="md:hidden sm:block">
          <Button colorScheme="blue" onClick={onOpen}>
            <div className="btn text-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-align-justify"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </div>
          </Button>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody>
                <div className="flex flex-col justify-center items-center gap-[20px] z-10 text-white text-[30px] font-medium h-[100vh] w-full bg-[#191919] ">
                  <div className="btn2 text-[#88ab8e] m-[20px] ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      fill-rule="evenodd"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={onClose}
                    >
                      <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
                    </svg>
                  </div>
                  <button
                    onClick={onClose}
                    className="hover:scale-110 transition-all"
                  >
                    <a href="#">Home</a>
                  </button>

                  <button
                    onClick={onClose}
                    className="hover:scale-125 transition-all"
                  >
                    <a href="#myskills">My Skills</a>
                  </button>

                  <button
                    onClick={onClose}
                    className="hover:scale-125 transition-all"
                  >
                    <a href="#myexperience">My Experience</a>
                  </button>

                  <button
                    onClick={onClose}
                    className="hover:scale-125 transition-all"
                  >
                    <a href="#myprojects">My Projects</a>
                  </button>

                  <button
                    onClick={onClose}
                    className="hover:scale-125 transition-all"
                  >
                    <a href="#contact">Contact</a>
                  </button>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
