import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart, BookOpen, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/keerthana-m-g',
      bgColor: 'bg-[#0A66C2] hover:bg-[#0077B5]',
      animation: { rotate: [0, -10, 10, -10, 0] }
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/KeerrthanaMG',
      bgColor: 'bg-[#24292F] hover:bg-[#000000]',
      animation: { scale: [1, 1.2, 1] }
    },
    {
      name: 'Medium',
      icon: BookOpen,
      href: 'https://medium.com/@keerthanamg19',
      bgColor: 'bg-[#00AB6C] hover:bg-[#00C77B]',
      animation: { y: [0, -5, 0] }
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                MG
              </div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Keerthana MG
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              Full-stack developer passionate about creating innovative solutions through hackathons, community leadership, and impactful projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              {quickLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ y: -2, x: 2 }}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 flex items-center gap-1 group"
                  >
                    <span className="text-sm">{link.name}</span>
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${link.bgColor} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={link.animation}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
              <span>Built with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-3 sm:mt-0">
              © {new Date().getFullYear()} Keerthana MG. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;