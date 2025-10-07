// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  Code, 
  Rocket, 
  Heart, 
  Coffee, 
  BookOpen, 
  Target,
  Award,
  Users,
  Lightbulb,
  Zap,
  Book,
  Search
} from 'lucide-react';
import PixelCard from '../Animations/PixelCard';

import AboutMe from '../assets/AboutMe-Image.png';



const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Passionate about creating end-to-end solutions with modern technologies"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "Always exploring cutting-edge technologies and best practices"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Focused on creating intuitive and engaging user experiences"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Oriented",
      description: "Committed to delivering high-quality solutions on time"
    }
  ];
  const stats = [
    { number: "20+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "2+", label: "Years Experience", icon: <BookOpen className="w-5 h-5" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "24/7", label: "Availability", icon: <Coffee className="w-5 h-5" /> }
  ];



  const journey = [
  {
    year: "2023",
    title: "From Biology to Code 🧬➡️💻",
    description:
      "Completed my 12th with a PCB (Physics, Chemistry, Biology) background. Initially aimed for B.Tech, but couldn't pursue it due to my stream. Later in 2023, I took admission in Amity University Jaipur for my first year. While I performed well academically (9.89 CGPA), I realized I wasn’t truly enjoying what I was studying.",
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    year: "Early 2024",
    title: "Discovering Web Development 🌐",
    description:
      "In March-April 2024, I started exploring tech through YouTube, beginning with HTML, CSS, and JavaScript. Soon I felt the need for better structure and joined my first coaching institute — SunShine Softwares in Jaipur. Although I learned some basics (especially HTML, CSS, and a bit of PHP), the teaching quality didn’t match what I was looking for.",
    icon: <Search className="w-4 h-4" />
  },
  {
    year: "Mid 2024",
    title: "A Step Towards Full Stack 💻",
    description:
      "After 6 months at SunShine, I joined WsCube Tech in Jaipur to learn the MERN stack properly. There, I finally got the structure and mentorship I needed. I'm still learning and practicing daily — building projects, integrating new tools & even exploring AI-based features along the way.",
    icon: <Code className="w-4 h-4" />
  },
  {
    year: "2024",
    title: "A New Academic Chapter 🎓",
    description:
      "Alongside coding, I shifted my academic path and enrolled in BCA at University of Technology, Jaipur. My focus now is to combine formal education with real-world skills and keep learning — one step at a time.",
    icon: <Book className="w-4 h-4" />
  },{
  year: "2025 - Present",
  title: "Still Learning, Still Building ⚙️🚀",
  description:
    "2025 has been all about consistency and depth. I’ve been continuing my MERN stack journey while actively integrating new tools and technologies — including AI APIs, authentication, and deployment practices. Every new project teaches me something different, and I’m focusing more on writing clean code, solving real-world problems, and becoming a better developer, one step at a time.",
  icon: <Zap className="w-4 h-4" />
}

];



  return (
    <section
      id="about"
      className="py-5 scroll-mt-20 m-5 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 bg-black/40 backdrop-blur-3xl border border-white/20 rounded-3xl mx-2 sm:mx-6 lg:mx-12 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with creativity and precision
          </p>
        </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left: Profile Image and Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="w-full lg:w-2/5 flex flex-col items-center"
          >
            {/* Profile Image */}

<div className="relative mb-8 w-full flex justify-center">
    
  <PixelCard variant="Blue" className="max-w-[350px] w-full h-[450px]">
    <img
      src={AboutMe}
      alt="About Me"
      className="absolute top-1/2 left-1/2 w-[80%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg"
    />
  </PixelCard>
</div> 

            {/* <div className="relative group mb-8">

              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-2 border border-white/10">
                <img
                  src="/AboutMe-Image.png"
                  alt="About Me"
                  className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] h-auto object-contain rounded-lg"
                />
              </div>
            </div> */}

              
            <div className="w-full max-w-[350px] grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-xl p-4 border border-white/10 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-2 text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full lg:w-3/5 space-y-8"
          >
          
              <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Hello, I'm a Developer! 👋</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly applications. 
                My journey in web development started with curiosity and has evolved into a deep passion for crafting digital experiences.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud platforms. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>
            </div>
             
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-2 text-white flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{highlight.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                My Journey
              </h3>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-2 text-white">
                        {item.icon}
                      </div>
                      {index < journey.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2"></div>
                      )}
                    </div>
                      <div className="flex-1 pb-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-cyan-400 font-semibold text-sm">{item.year}</span>
                        <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent flex-1"></div>
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <Coffee className="w-4 h-4 mr-2 text-cyan-400" />
                <span className="text-sm text-gray-300">
                  Let's build something amazing together! ☕
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    );
};

export default About;