import "./App.css";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

import NavBar from "./components/NavBar/NavBar";
import Socials from "./components/Socials/Socials";
import MouseGlow from "./components/MouseGlow";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import { Button } from "@headlessui/react";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import { useRef, useState } from "react";
import Footer from "./components/Footer/Footer";

type Section = "home" | "about" | "experience" | "projects"; // Section union

function App() {
  const setNavFocus = useState<Section>("home")[1];

  const { ref: aboutRef, inView: isAboutInView } = useInView({
    triggerOnce: true,
    threshold: window.innerWidth < 768 ? 0.2 : 0.5, // Smaller threshold for mobile
  });

  const { ref: expRef, inView: isExpInView } = useInView({
    triggerOnce: true,
    threshold: window.innerWidth < 768 ? 0.2 : 0.5,
  });

  const { ref: projRef, inView: isProjInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Separate refs for scrolling
  const aboutScrollRef = useRef<HTMLElement | null>(null);
  const expScrollRef = useRef<HTMLElement | null>(null);
  const projScrollRef = useRef<HTMLElement | null>(null);

  const handleNavClick = (section: Section) => {
    setNavFocus(section);

    // add offset for better positioning on scroll
    const scrollWithOffset = (
      ref: React.RefObject<HTMLElement | null>,
      offset: number = 0
    ) => {
      if (ref.current) {
        const topPosition = ref.current.offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    switch (section) {
      case "about":
        scrollWithOffset(aboutScrollRef, 110);
        break;
      case "experience":
        scrollWithOffset(expScrollRef, 110);
        break;
      case "projects":
        scrollWithOffset(projScrollRef, 110);
        break;
      default:
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // debug-screens -> use this class to check tailwind screen size
    <div className="text-gray-200 font-robotoMono">
      <div className="hidden md:block">
        <Socials />
      </div>
      <MouseGlow />
      <NavBar handleNavClick={handleNavClick} />

      {/* Main content centered below */}
      <section className="h-screen flex flex-col md:justify-center justify-start items-center mt-14 md:-mt-10">
        <div className="text-left px-9 md:px-0">
          <p className="text-sm md:text-lg mb-2 md:mb-5">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 md:mb-7 text-rose-500">
            <Typewriter
              options={{
                strings: ["Tazim Khan."],
                autoStart: true,
                cursor: "_",
                deleteSpeed: Infinity,
                loop: true,
                delay: 100,
              }}
            />
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            I'm a 3rd-year Software Engineering student at the{" "}
            <span className="text-rose-500">University of Ottawa</span>.
          </p>
          <div className="flex flex-row flex-wrap gap-4 mt-10">
            <Button
              className="resume text-center px-4 py-2 md:py-4 w-36 md:w-44 bg-rose-600 rounded-sm transition-all ease-in-out hover:rounded-[1.5rem] active:translate-y-1"
              as="a"
              href=" /personal-website/TazimKhan - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
            <Button
              className="projects px-4 py-2 md:py-4 w-36 md:w-44 border-2 border-blue-500 text-blue-300 rounded-sm transition-all ease-in-out hover:rounded-[1.5rem] active:translate-y-1"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </Button>
            <Button
              as="a"
              href="https://github.com/tazim04"
              target="_blank"
              rel="noopener noreferrer"
              className="github px-2 pt-1 w-fit border-2 border-gray-400 rounded-sm transition-all ease-in-out hover:rounded-[1.5rem] active:translate-y-1"
            >
              <img
                src="./icons/github.png"
                alt="GitHub"
                className="w-8 md:w-11"
              />
            </Button>
          </div>
        </div>
        <div className="w-full md:mt-16 mt-14">
          <TechCarousel />
        </div>
      </section>

      <div className="overflow-x-hidden">
        <section
          ref={(node) => {
            aboutRef(node);
            aboutScrollRef.current = node;
          }}
          className={`flex justify-center transition-all ease-in-out duration-500 ${
            isAboutInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 md:-translate-x-10"
          }`}
        >
          <About />
        </section>
        <section
          ref={(node) => {
            expRef(node);
            expScrollRef.current = node;
          }}
          className={`flex justify-center transition-all ease-in-out duration-500 mt-20 ${
            isExpInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <Experience />
        </section>

        <section
          ref={(node) => {
            projRef(node);
            projScrollRef.current = node;
          }}
          className={`flex justify-center transition-all ease-in-out duration-500 mt-20 ${
            isProjInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Projects />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
