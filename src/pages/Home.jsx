import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Star, Award, BookOpen, MessageCircle } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { achievementsData } from '../data/achievementsData';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-amber-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-violet-200/30 dark:bg-violet-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 dark:bg-amber-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="block text-gray-900 dark:text-white">Crafting</span>
                  <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
                    Impact
                  </span>
                  <span className="block text-gray-900 dark:text-white">with Code</span>
                </motion.h1>
                
                <motion.p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Full-stack developer passionate about creating innovative solutions through 
                  <span className="text-violet-600 dark:text-violet-400 font-medium"> hackathons</span>, 
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> community leadership</span>, and 
                  <span className="text-amber-600 dark:text-amber-400 font-medium"> impactful projects</span>.
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href="https://drive.google.com/your-resume-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/50 dark:hover:shadow-violet-700/50 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:animate-bounce" />
                  View Resume
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <Link to="/projects">
                  <motion.button
                    className="inline-flex items-center px-5 sm:px-8 py-3 sm:py-4 border-2 border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 font-medium rounded-full hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Projects
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <motion.div
                className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 bg-gradient-to-br from-violet-400 via-purple-500 to-amber-400 rounded-3xl shadow-2xl overflow-hidden"
                animate={floatingAnimation}
              >
                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white font-bold text-xl sm:text-2xl">MG</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Keerthana MG</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Highlights Section */}
      <motion.section
        className="py-12 sm:py-20 bg-white dark:bg-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Quick Highlights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my latest projects, achievements, and contributions to the tech community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Featured Projects */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <Star className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h3>
              </div>
              
              <div className="space-y-4 flex-grow">
                {projectsData.featured.slice(0, 2).map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-violet-700/30 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description.substring(0, 120)}...
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4">
                <Link to="/projects">
                  <motion.button
                    className="w-full py-3 text-violet-600 dark:text-violet-400 font-medium hover:bg-violet-100 dark:hover:bg-violet-900/30 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-violet-500/20 dark:hover:shadow-violet-700/30"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View All Projects →
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Latest Achievement */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Achievement</h3>
              </div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700 flex-grow flex flex-col justify-center hover:shadow-lg hover:shadow-amber-500/20 dark:hover:shadow-amber-700/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {achievementsData[0].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievementsData[0].description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 text-sm rounded-full">
                    {achievementsData[0].year}
                  </span>
                </div>
              </motion.div>
              
              <div className="mt-4">
                <Link to="/achievements">
                  <motion.button
                    className="w-full py-3 text-amber-600 dark:text-amber-400 font-medium hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-amber-500/20 dark:hover:shadow-amber-700/30"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View All Achievements →
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Latest Blog */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Blog</h3>
              </div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200 dark:border-purple-700 flex-grow flex flex-col justify-center hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-purple-700/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  E-waste Facility Locator: Optimizing Waste Management
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Built a geospatial mapping system with OSM & Flask, optimizing waste facility detection by 30% efficiency improvement.
                </p>
                <a
                  href="https://medium.com/@keerthanamg19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline"
                >
                  Read on Medium →
                </a>
              </motion.div>
              
              <div className="mt-4">
                <Link to="/blogs">
                  <motion.button
                    className="w-full py-3 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-purple-500/20 dark:hover:shadow-purple-700/30"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View All Blogs →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Contact CTA - Separate and centered */}
          <motion.div 
            variants={itemVariants} 
            className="mt-12 sm:mt-16 flex justify-center"
          >
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-full hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/50 dark:hover:shadow-violet-700/50 flex items-center space-x-3 group"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5 group-hover:animate-bounce" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Me</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;