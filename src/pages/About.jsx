import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, BookOpen, Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Award,
      title: "Top 5 iTNT Winner",
      description: "Recognized among top innovative solutions in TN Government challenge",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "President of Intellexa REC Technical Club with 500+ members",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Code,
      title: "Open Source Enthusiast",
      description: "Active contributor to open source projects and hackathon solutions",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Speaker",
      description: "Speaker at Flutterflow Dev Community and SRE Chennai meetups",
      color: "from-purple-400 to-pink-500"
    }
  ];
  


  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A passionate journey through code, creativity, and community impact
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="relative max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
              <motion.div
                className="w-full aspect-[4/5] bg-gradient-to-br from-violet-400 via-purple-500 to-amber-400 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden hover:shadow-violet-500/50 dark:hover:shadow-violet-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-3 sm:inset-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner"
                  whileHover={{ scale: 0.98 }}
                >
                  <div className="text-center space-y-4 sm:space-y-6">
                    <motion.div 
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg hover:shadow-violet-500/50 dark:hover:shadow-violet-700/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <motion.span 
                        className="text-white font-bold text-3xl sm:text-4xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                      >
                        MG
                      </motion.span>
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Keerthana MG
                      </motion.h3>
                      <motion.p 
                        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                        whileHover={{ x: -5 }}
                      >
                        Full Stack Developer
                      </motion.p>
                      <motion.div 
                        className="flex items-center justify-center space-x-1 sm:space-x-2 mt-1 sm:mt-2 group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 group-hover:text-amber-500 transition-colors duration-300" />
                        <span className="text-gray-500 group-hover:text-amber-500 text-xs sm:text-sm transition-colors duration-300">Tiruvallur, India</span>
                      </motion.div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <motion.div 
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-violet-400 rounded-full animate-pulse"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <motion.div 
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse delay-75"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <motion.div 
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full animate-pulse delay-150"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Journey Paragraph */}
            <div className="prose prose-base sm:prose-lg max-w-none px-1 sm:px-0">
              <motion.p
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
                variants={itemVariants}
              >
                I'm a curious and driven tech enthusiast with a passion for learning and building. 
                My journey started with web development, gradually expanding into mobile apps, machine learning, 
                and backend systems. I enjoy exploring new technologies, solving problems, and continuously 
                improving my skills. Excited to grow, collaborate, and contribute to meaningful projects that 
                make a real impact.
              </motion.p>
              
              <motion.p
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg mt-4 sm:mt-6"
                variants={itemVariants}
              >
                Currently in my final year of Computer Science Engineering at Rajalakshmi Engineering College, 
                I've been actively involved in hackathons, community leadership, and open-source contributions. 
                As the President of Intellexa REC Technical Club, I've organized numerous events including 
                Techtober, Git-in-Kadhai workshops, and 30-day DSA challenges, fostering a collaborative 
                learning environment for 500+ members.
              </motion.p>

              <motion.p
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg mt-4 sm:mt-6"
                variants={itemVariants}
              >
                Beyond coding, I'm passionate about sharing knowledge through tech talks and mentoring. 
                I've spoken at Flutterflow Dev Community about "Wonders of Flutterflow" and at SRE Chennai 
                Meetup about "SRE Basics, Observability & MTTR". My goal is to bridge the gap between 
                complex technical concepts and practical solutions that solve real-world problems.
              </motion.p>
            </div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 shadow-md hover:shadow-violet-500/30 dark:hover:shadow-violet-700/40 transition-all duration-300"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  15+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">Projects</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 shadow-md hover:shadow-purple-500/30 dark:hover:shadow-purple-700/40 transition-all duration-300"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                >
                  5+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Hackathons</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 shadow-md hover:shadow-amber-500/30 dark:hover:shadow-amber-700/40 transition-all duration-300"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                >
                  3+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Tech Talks</div>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 shadow-md hover:shadow-green-500/30 dark:hover:shadow-green-700/40 transition-all duration-300"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
                >
                  500+
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Community</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.section variants={itemVariants} className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white hover:from-violet-600 hover:via-purple-600 hover:to-amber-500 bg-clip-text hover:text-transparent transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Key Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-violet-700/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <motion.div 
                    className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${highlight.color} shadow-md`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 }}
                  >
                    <highlight.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {highlight.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      {highlight.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section variants={itemVariants} className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white hover:from-violet-600 hover:via-purple-600 hover:to-amber-500 bg-clip-text hover:text-transparent transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Education
          </motion.h2>
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 shadow-md hover:shadow-violet-500/30 dark:hover:shadow-violet-700/40 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                <motion.div 
                  className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg mb-3 sm:mb-0 shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600 dark:text-violet-400" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    B.E Computer Science Engineering
                  </motion.h3>
                  <motion.p 
                    className="text-violet-600 dark:text-violet-400 font-medium"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    Rajalakshmi Engineering College
                  </motion.p>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    CGPA: 8.41 | 2022 - 2026 (Final Year)
                  </motion.p>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 sm:mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Active participation in hackathons, technical events, and community leadership roles
                  </motion.p>
                </div>
                <motion.div 
                  className="flex items-center space-x-2 text-gray-500 mt-2 sm:mt-0"
                  whileHover={{ scale: 1.1 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">2022-2025</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 shadow-md hover:shadow-amber-500/30 dark:hover:shadow-amber-700/40 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                <motion.div 
                  className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mb-3 sm:mb-0 shadow-md"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
                >
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    HSC - Higher Secondary
                  </motion.h3>
                  <motion.p 
                    className="text-amber-600 dark:text-amber-400 font-medium"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                  >
                    Shree Niketan Matriculation Higher Secondary School
                  </motion.p>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Percentage: 98% | SSLC: 98%
                  </motion.p>
                </div>
                <motion.div 
                  className="flex items-center space-x-2 text-gray-500 mt-2 sm:mt-0"
                  whileHover={{ scale: 1.1 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">2020-2022</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>


      </motion.div>
    </div>
  );
};

export default About;