// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaClock,
  FaRobot,
  FaServer,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTailwindcss,
  SiRender,
  SiOpenai,
  SiFirebase,
  SiCloudinary,
  SiVercel,
  SiTypescript,
} from "react-icons/si";


import SkillesImage from "../assets/SkillesImage.png"

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={22} />,
    color: "from-orange-500 to-red-500",
    proficiency: 90,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={22} />,
    color: "from-blue-500 to-cyan-500",
    proficiency: 85,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={22} />,
    color: "from-yellow-400 to-amber-400",
    proficiency: 88,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={22} />,
    color: "from-blue-600 to-blue-700",
    proficiency: 20,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={22} />,
    color: "from-purple-600 to-indigo-500",
    proficiency: 70,
  },
  {
    name: "React",
    icon: <FaReact size={22} />,
    color: "from-cyan-400 to-blue-500",
    proficiency: 85,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={22} />,
    color: "from-cyan-400 to-blue-500",
    proficiency: 90,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={22} />,
    color: "from-yellow-400 to-orange-500",
    proficiency: 90,
  },
  {
    name: "Vercel",
    icon: <SiVercel size={22} />,
    color: "from-zinc-800 to-gray-900",
    proficiency: 75,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={22} />,
    color: "from-green-500 to-emerald-500",
    proficiency: 70,
  },
  {
    name: "REST API",
    icon: <FaServer size={22} />,
    color: "from-indigo-500 to-blue-600",
    proficiency: 88,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={22} />,
    color: "from-gray-400 to-gray-600",
    proficiency: 70,
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary size={22} />,
    color: "from-blue-500 to-amber-400",
    proficiency: 50,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={22} />,
    color: "from-green-400 to-emerald-400",
    proficiency: 60,
  },
  {
    name: "Python",
    icon: <FaPython size={22} />,
    color: "from-yellow-400 to-blue-500",
    proficiency: 50,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={22} />,
    color: "from-orange-500 to-red-500",
    proficiency: 30,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={22} />,
    color: "from-gray-600 to-black",
    proficiency: 88,
  },
  {
    name: "Cron-job.org",
    icon: <FaClock size={22} />,
    color: "from-teal-400 to-cyan-500",
    proficiency: 75,
  },
  {
    name: "Render.com",
    icon: <SiRender size={22} />,
    color: "from-purple-500 to-pink-500",
    proficiency: 85,
  },
  {
    name: "ChatGPT",
    icon: <SiOpenai size={22} />,
    color: "from-green-400 to-emerald-500",
    proficiency: 90,
  },
  {
    name: "UptimeRobot",
    icon: <FaRobot size={22} />,
    color: "from-gray-800 to-black",
    proficiency: 90,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/DilipCode71",
    color: "from-gray-600 to-black",
    hoverColor: "hover:from-gray-500 hover:to-gray-700",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com/in/dilip-sharma-web-developer/",
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-500 hover:to-blue-600",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
    url: "https://instagram.com/yourusername",
    color: "from-pink-500 via-red-500 to-yellow-500",
    hoverColor: "hover:from-pink-400 hover:via-red-400 hover:to-yellow-400",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    url: "https://x.com/Dilipvyas6378",
    color: "from-sky-400 to-blue-500",
    hoverColor: "hover:from-sky-300 hover:to-blue-400",
  },
  {
    name: "Reddit",
    icon: <FaRedditAlien size={20} />,
    url: "https://www.reddit.com/user/Electronic-Car7551/",
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:from-orange-400 hover:to-red-400",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-5 scroll-mt-20 m-5 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 bg-black/40 backdrop-blur-3xl border border-white/20 rounded-3xl mx-2 sm:mx-6 lg:mx-12 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Passionate about creating amazing digital experiences with modern
            technologies
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full lg:w-2/5 flex flex-col items-center"
          >
            <div className="relative group mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-2 border border-white/10">
                {" "}
                <img
                  src={SkillesImage}
                  alt="My Portfolio Pose"
                  className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] h-auto object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="w-full max-w-[300px]">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Connect With Me
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center justify-center w-11 h-11 rounded-xl
                      bg-gradient-to-r ${social.color} ${social.hoverColor}
                      shadow-lg hover:shadow-xl transition-all duration-300
                      border border-white/10 hover:border-white/20
                    `}
                    title={social.name}
                  >
                    <span className="text-white">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full lg:w-3/5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group flex flex-col items-center bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-xl p-3 sm:p-4 border border-white/10 shadow-lg hover:shadow-2xl hover:border-yellow-400/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div
                    className={`bg-gradient-to-r ${skill.color} rounded-lg p-2.5 mb-3 text-white shadow-md group-hover:shadow-lg transition-all duration-300`}
                  >
                    {skill.icon}
                  </div>

                  <span className="font-medium text-xs sm:text-sm text-center text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {skill.name}
                  </span>

                  <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      className="h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 shadow-sm"
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                    {skill.proficiency}%
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 rounded-full border border-yellow-400/20">
                <span className="text-sm text-gray-300">
                  Always learning and exploring new technologies! 🚀
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
