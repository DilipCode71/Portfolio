  /* eslint-disable no-unused-vars */
  import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
  import { FaRedditAlien } from "react-icons/fa";

  const icons = [
    {
      href: "https://github.com/DilipCode71",
      label: "GitHub",
      icon: BsGithub,
      colorClass: "text-gray-300 hover:text-gray-100",
    },
    {
      href: "https://www.linkedin.com/in/dilip-sharma-web-developer/",
      label: "LinkedIn",
      icon: BsLinkedin,
      colorClass: "text-[#0A66C2] hover:text-[#0A66C2]/80",
    },
    {
      href: "https://x.com/Dilipvyas6378",
      label: "Twitter",
      icon: BsTwitterX,
      colorClass: "text-[#1DA1F2] hover:text-[#1DA1F2]/80",
    },
    {
      href: "https://www.reddit.com/user/Electronic-Car7551/",
      label: "Reddit",
      icon: FaRedditAlien,
      colorClass: "text-orange-500 hover:text-red-500",
    },
  ];

  export default function Footer() {
    return (
      <>
       
        <footer className="bg-black/30 backdrop-blur-md text-gray-300 py-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Dilip Sharma. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {icons.map(({ href, label, icon: Icon, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${colorClass} transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50`}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </>
    );
  }
