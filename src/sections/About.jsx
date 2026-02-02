import React from "react";
import Card from "../components/Card"; // Import the Card component
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton"; // Import the CopyEmailButton component
import { Frameworks } from "../components/Frameworks";

const About = () => {
  // const grid2Container = useRef();

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 p-6 rounded-md backdrop-blur-sm bg-transparent/90 ">
            <p className="headtext">Hi, I’m Abhinav </p>
            <p className="headtext"> Cybersecurity Specialist | EdTech Strategist | Tech Pedagogy & Delivery Expert | Developer </p>
            <p className="subtext">
              {" "}
              🚀 Passionate about building secure, scalable, and future-ready solutions.  
              <br />
              🌱 Constantly exploring new technologies in AI, Cybersecurity, and EdTech.  
              <br />
              💬 Ask me about <strong>OSINT, Cyber Law, Cyber Crime, ISO 27001, MERN Stack, Python, Java Spring Boot</strong>,  
              or <strong>QA (Selenium, Cucumber, Mocha, Chai-http, JUnit, etc.)</strong>.  
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 — Engineering Toolkit (static, responsive, with logo badges) */}
      <div className="relative overflow-hidden rounded-3xl grid-default-color grid-2 p-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200/90 tracking-wide">
            My Toolkit
          </h3>
          <p className="mt-1 text-xs md:text-sm text-gray-400"></p>
        </div>

        {/* Responsive grid of icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {[
            { src: "assets/logos/MySQL.svg", alt: "MySQL" },
            { src: "assets/logos/Express.svg", alt: "Express" },
            { src: "assets/logos/react.svg", alt: "React" },
            { src: "assets/logos/nodedotjs.svg", alt: "Node.js" },
            { src: "assets/logos/javascript.svg", alt: "JavaScript" },
            { src: "assets/logos/java.svg", alt: "Java" },
            { src: "assets/logos/Spring.svg", alt: "Spring" },
            { src: "assets/logos/Redux.svg", alt: "Redux" },
            { src: "assets/logos/GitBook.svg", alt: "GitBook" },
            { src: "assets/logos/jest.svg", alt: "Jest" },
          ].map((logo) => (
            <div
            key={logo.alt}
            tabIndex={0}
            className="
              group relative flex items-center justify-center
              w-10 h-10 md:w-20 md:h-20
              rounded-xl backdrop-blur-sm shadow-xl
              bg-indigo-100 hover:bg-midnight/50
              ring-1 ring-white/10 hover:ring-white/30
              transition-all duration-200 ease-out
              hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
            "
            aria-label={logo.alt}
            role="img"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="
                h-10 w-10 md:h-12 md:w-12 object-contain
                opacity-90 group-hover:opacity-100
                transition-transform duration-200 ease-out group-hover:scale-110
              "
            />
          </div>
          ))}
        </div>
      </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">🕒 Time Zone</p>
            <p className="subtext">
              🌍 Currently based out of Earth
              <br />
              🕒 Flexible for guidance & mentoring — Anytime, Anywhere
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>
        
        {/* Grid 4 */}
        <div className="flex flex-items justify-items-center-safe grid-default-color grid-5">
            <div className="z-10 w-[50%]">
            <p className="headText"> Tech Stack</p>
            <p className="subtext"> I specialize in a variety of languages, frameworks & tools that allow me to build robust and scalable applications </p>
            </div>

            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
              <Frameworks />
            </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="headtext text-center">Want to talk to me?</p>
            <CopyEmailButton />
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;