import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaDownload,
  FaArrowRight,
  FaRocket,
  FaAws,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiGit,
  SiRender,
  SiOpenai,
} from "react-icons/si";
import PixelCard from "../Animations/PixelCard";

import HoemPose from "../assets/HoemPose.png"

const floatingIcons = [
  { icon: <SiReact />, className: "text-blue-400", top: "5%", left: "90%" },       
  { icon: <SiNodedotjs />, className: "text-green-500", top: "0%", left: "50%" },
  { icon: <SiMongodb />, className: "text-green-600", top: "20%", left: "95%" },
  { icon: <SiExpress />, className: "text-gray-400", top: "85%", left: "95%" },
  { icon: <SiTailwindcss />, className: "text-cyan-400", top: "110%", left: "60%" }, 
  { icon: <SiHtml5 />, className: "text-orange-500", top: "85%", left: "5%" },
  { icon: <SiCss3 />, className: "text-blue-600", top: "55%", left: "0%" },          
  { icon: <SiGit />, className: "text-orange-400", top: "0%", left: "5%" },
  { icon: <SiGithub />, className: "text-white", top: "15%", left: "10%" },         
  { icon: <SiRender />, className: "text-indigo-300", top: "110%", left: "70%" },
  { icon: <FaAws />, className: "text-yellow-400", top: "110%", left: "30%" },
  { icon: <SiOpenai />, className: "text-green-300", top: "-10%", left: "75%" },
];

const techStack = [
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-300" /> },
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative py-16 scroll-mt-20 px-4 sm:px-8 md:px-12 min-h-[90vh] flex items-center justify-center overflow-visible"
    >
      <div className="absolute inset-0 bg-black-100/50 backdrop:blur-2xl"></div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <div className="w-full lg:w-1/2 text-white space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-400/30 backdrop-blur-sm mx-auto lg:mx-0">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-300">Available for work</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Dilip Sharma
            </span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <HiSparkles className="text-blue-400 text-2xl animate-spin-slow" />
            <h2 className="text-[18px] sm:text-2xl lg:text-3xl text-blue-400 font-semibold">
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer", 1500,
                  "Building Modern Web Applications", 1500,
                  "Solving Problems with Scalable Code", 1500,
                  "Specialized in the MERN Stack", 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
          </div>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I specialize in building high-performance, scalable web applications using{" "}
            <span className="text-blue-400 font-semibold">React</span>,{" "}
            <span className="text-green-400 font-semibold">Node.js</span>,{" "}
            <span className="text-purple-400 font-semibold">Express.js</span>, and{" "}
            <span className="text-yellow-400 font-semibold">MongoDB</span>. Clean code & strong UX.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full border border-blue-400/30 text-sm font-medium hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>

         <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6 justify-center lg:justify-start">
  <a
    href="#projects"
    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-3"
  >
    <FaRocket className="group-hover:animate-bounce" />
    View Projects
    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
  </a>
  <a
    href="#contact"
    className="group px-8 py-4 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center gap-3 hover:scale-105"
  >
    Contact Me
    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
  </a>
  <a
    href="https://drive.google.com/uc?export=download&id=1NRMlARn2Paj8BcEQkEGOo51FjwbZrGOb"
    target="_blank"
    rel="noopener noreferrer"
    className="group px-8 py-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 hover:from-gray-600/60 hover:to-gray-500/60 text-white rounded-xl transition-all duration-300 backdrop-blur-sm border border-gray-500/30 hover:border-gray-400/50 flex items-center gap-3 hover:scale-105"
  >
    <FaDownload className="group-hover:animate-bounce" />
    Resume
  </a>
</div>


          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center relative px-4">
          <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
            {floatingIcons.map((item, idx) => (
              <div
                key={idx}
                className="absolute rounded-full p-2 bg-black/40 shadow-lg flex items-center justify-center transition-transform duration-300"
                style={{
                  top: item.top,
                  left: item.left,
                  transform: "translate(-50%, -50%)",
                  width: "40px",
                  height: "40px",
                }}
              >
                {React.cloneElement(item.icon, {
                  className: `${item.className} w-5 h-5`,
                })}
              </div>
            ))}
          </div>

          {/* PixelCard with Responsive Image */}
          <div className="relative group z-10 w-full h-[400px] sm:h-[480px] lg:h-[620px] max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
            <PixelCard variant="Blue" className="w-full h-full">
              <img
                src={HoemPose}
                alt="Dilip Sharma"
                className="absolute top-1/2 left-1/2 w-[88%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg"
              />
            </PixelCard>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
