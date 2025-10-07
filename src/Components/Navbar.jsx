import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import {  FaRedditAlien} from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

        <a
  href="/"
  className="font-bold text-xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
  onClick={closeMenu}
>
  Dilip Sharma
</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Nav Links */}
            {["home", "projects", "skills", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={closeMenu}
                className="text-gray-300 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex space-x-4 pl-4">
              <a
                href="https://github.com/DilipCode71"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-gray-100 transition-colors"
              >
                <BsGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/dilip-sharma-web-developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
              >
                <BsLinkedin size={22} />
              </a>
              <a
                href="https://x.com/Dilipvyas6378"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
              >
                <BsTwitterX size={22} />
              </a>
              <a
                href="https://www.reddit.com/user/Electronic-Car7551/"
                target="_blank"
                aria-label="Reddit"
                className="text-[#D14836] hover:text-[#D14836]/80 transition-colors"
              >
                <FaRedditAlien size={22} />
              </a>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-pink-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["home", "projects", "skills", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={closeMenu}
                className="block text-gray-300 hover:text-pink-500 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            <div className="flex space-x-4 pt-4 px-2">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-gray-100 transition-colors"
              >
                <BsGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
              >
                <BsLinkedin size={22} />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 transition-colors"
              >
                <BsTwitterX size={22} />
              </a>
               <a
                href="https://www.reddit.com/user/Electronic-Car7551/"
                target="_blank"
                aria-label="Reddit"
                className="text-[#D14836] hover:text-[#D14836]/80 transition-colors"
              >
                <FaRedditAlien size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
