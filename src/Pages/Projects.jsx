import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Bakery Website',
    description: 'Responsive bakery website built using HTML and CSS.',
    image: '/BakeryClone.png',
    live: 'https://dilipcode71.github.io/BakeryWebsite/',
    github: 'https://github.com/dilipcode71/BakeryWebsite',
    tags: ['HTML', 'CSS', 'JavaScript','Responsive'],
  },
  {
    title: 'FaceBook Newsroom Clone',
    description: 'A basic Newsroom landing page clone made with HTML & CSS.',
    image: '/FacebookNewsroom.png',
    live: 'https://dilipcode71.github.io/newsroom-clone/',
    github: 'https://github.com/DilipCode71/newsroom-clone',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'React Product Page',
    description: 'Product UI using React, Tailwind CSS and Firebase for storing user data.',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
    live: 'https://products-webite.vercel.app',
    github: 'https://github.com/DilipCode71/ProductsWebite',
    tags: ['React', 'Tailwind', 'Firebase'],
  },
  {
    title: 'iShop E-commerce',
    description: 'Full e-commerce website using MERN stack with payment and admin panel.',
    image: '/IshopProject.png',
    live: 'https://ishop-frontend-tau.vercel.app/',
    github: 'https://github.com/DilipCode71/Ishop-ecommerce-project',
    tags: ['React','Tailwind', 'Node.js','Express', 'MongoDB'],
  },
  {
    title: 'YouTube Thumbnail Generator',
    description: 'React + Tailwind tool to generate YouTube thumbnails easily.',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=800',
    live: 'https://youtube-thumbnailgen-frontend.vercel.app',
    github: 'https://github.com/DilipCode71/Youtube_thumbnailgen',
    tags: ['React', 'Tailwind','ExpressJs','MongoDb Atlas','Firebase'],
  },
  {
    title: 'AI Twitter News Bot',
    description:
      'A Node.js bot using GNews API and Mistral model to auto-generate and post 280-character tweets using Twitter API. Deployed on Render with Cron jobs.',
    image: "/X.webp",
    live: '',
    github: 'https://github.com/DilipCode71/AI_Agents_X_Post',
    tags: ['Node.js', 'AI', 'Twitter API', 'Render', 'Cron','UptimeRobot'],
  },
];

export default function Portfolio() {
  return (
    <div
      id="projects"
      className="py-5 scroll-mt-20 px-6 mb-5 sm:px-12 text-white bg-black/40 backdrop-blur-3xl border border-white/20 rounded-3xl mx-4 sm:mx-12 shadow-1xl relative overflow-hidden"
    >
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
            <br />
            <span className="text-white/90">All In One Place</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I’m always learning and exploring new technologies. Here are a few of my featured projects.
            Many more are available on my GitHub — from simple HTML sites to advanced full-stack and AI-based tools.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 flex-wrap">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors hover:scale-105 transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition-colors hover:scale-105 transform duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="group bg-slate-700/50 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-center items-center">
            <Github className="w-10 h-10 mb-4 text-white/70 group-hover:text-white" />
            <h3 className="text-xl font-bold text-white mb-2">More Projects on GitHub</h3>
            <p className="text-white/60 text-sm mb-4 max-w-xs">
              I have many more small and large projects on GitHub, including experiments, AI tools, and backend apps.
            </p>
            <a
              href="https://github.com/DilipCode71"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full bg-blue-500 hover:bg-blue-600 text-white transition"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
