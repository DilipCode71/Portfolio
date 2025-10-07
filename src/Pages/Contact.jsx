/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Clock,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaRedditAlien,
  FaWhatsapp,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa';


const Contact = () => {
    

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vyasd9884@gmail.com || dilip.sharma.sde@gmail.com",
      link: "#",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9950940484 || 6378553819 ",
      link: "tel:+9950940484",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Jaipur, India",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
  
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      url: "https://github.com/DilipCode71",
      color: "from-gray-600 to-black",
      hoverColor: "hover:from-gray-500 hover:to-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/dilip-sharma-web-developer/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/yourusername",
      color: "from-pink-500 via-red-500 to-yellow-500",
      hoverColor: "hover:from-pink-400 hover:via-red-400 hover:to-yellow-400"
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      url: "https://x.com/Dilipvyas6378",
      color: "from-sky-400 to-blue-500",
      hoverColor: "hover:from-sky-300 hover:to-blue-400"
    },
    {
      name: "Reddit",
      icon: <FaRedditAlien size={20} />,
      url: "https://www.reddit.com/user/Electronic-Car7551/",
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-400 hover:to-red-400"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      url: "https://wa.me/9950940484",
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-400 hover:to-emerald-400"
    },
    {
      name: "Telegram",
      icon: <FaTelegram size={20} />,
      url: "https://t.me/Dkcoding",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-400 hover:to-cyan-400"
    },
    {
      name: "Discord",
      icon: <FaDiscord size={20} />,
      url: "https://discord.com/users/dilip63",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "hover:from-indigo-400 hover:to-purple-400"
    }
  ];


  const quickActions = [
    {
      title: "Quick Chat",
      description: "Let's have a quick conversation",
      icon: <MessageSquare className="w-5 h-5" />,
      action: "Schedule Call",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Project Inquiry",
      description: "Discuss your project requirements",
      icon: <Send className="w-5 h-5" />,
      action: "Send Message",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Collaboration",
      description: "Let's work together on something amazing",
      icon: <User className="w-5 h-5" />,
      action: "Get Started",
      color: "from-purple-500 to-pink-500"
    }
  ];


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <>
    <section
      id="contact"
      className="py-5 scroll-mt-20 mb-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 bg-black/40 backdrop-blur-3xl border border-white/20 rounded-3xl mx-2 sm:mx-6 lg:mx-12 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together!
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full lg:w-2/5 space-y-8"
          >
            <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`bg-gradient-to-r ${info.color} rounded-lg p-2 text-white`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.title}</div>
                      <div className="text-white group-hover:text-green-400 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors duration-300 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-r ${action.color} rounded-lg p-2 text-white`}>
                          {action.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{action.title}</div>
                          <div className="text-gray-400 text-xs">{action.description}</div>
                        </div>
                      </div>
                      <button className="text-xs bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full hover:shadow-lg transition-all duration-300">
                        {action.action}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center justify-center w-12 h-12 rounded-xl
                      bg-gradient-to-r ${social.color} ${social.hoverColor}
                      shadow-lg hover:shadow-xl transition-all duration-300
                      border border-white/10 hover:border-white/20
                    `}
                    title={social.name}
                  >
                    <span className="text-white">
                      {social.icon}
                    </span>
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
            <div className="bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 rounded-xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Send className="w-5 h-5 mr-2 text-purple-400" />
                Send Me a Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
               <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
 <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
  <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                </div>
                   <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <Clock className="w-4 h-4" />
                    <span>Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Your information is secure</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-full border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
            <MessageSquare className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm text-gray-300">
              Let's turn your ideas into reality! 🚀
            </span>
          </div>
        </motion.div>
      </div>




    </section>


</>

  );
};

export default Contact;