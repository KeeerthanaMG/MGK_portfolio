import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Brain, Wrench, Monitor } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import * as Si from 'simple-icons';

// Add CSS for flip card animation
import './Skills.css';

const Skills = () => {
  // No need for activeCategory state as we'll display all categories
  
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: Monitor, color: 'from-blue-400 to-cyan-500' },
    { id: 'backend', name: 'Backend', icon: Code, color: 'from-green-400 to-emerald-500' },
    { id: 'database', name: 'Database', icon: Database, color: 'from-purple-400 to-violet-500' },
    { id: 'aiml', name: 'AI/ML', icon: Brain, color: 'from-pink-400 to-rose-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-orange-400 to-amber-500' },
    { id: 'tools', name: 'Tools', icon: Wrench, color: 'from-gray-400 to-slate-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const SkillCard = ({ skill, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const renderIcon = () => {
      if (skill.iconName && Si[skill.iconName]) {
        return (
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="transform transition-transform duration-300 hover:rotate-6"
            dangerouslySetInnerHTML={{ __html: Si[skill.iconName].path }}
          />
        );
      }
      return skill.icon;
    };

    return (
    <motion.div
      className="relative h-28 sm:h-32 w-full cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      layout
    >
      <div className={`skill-card w-full h-full ${isFlipped ? 'flipped' : ''}`}>
        <div className="skill-card-inner w-full h-full">
          {/* Front of card */}
          <div className="skill-card-front bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-violet-700/30 transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
              {renderIcon()}
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-center text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
              {skill.name}
            </h3>
          </div>
          
          {/* Back of card */}
          <div className="skill-card-back bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg text-white">
            <motion.span 
              className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              {skill.level}%
            </motion.span>
            
            {/* Progress Bar */}
            <div className="w-full mb-1 sm:mb-2">
              <div className="h-1.5 sm:h-2 bg-white/30 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-white rounded-full shadow"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
            
            <motion.p 
              className="text-xs text-center text-white/90 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {window.innerWidth < 640 && skill.description.length > 40
                ? `${skill.description.substring(0, 40)}...`
                : skill.description.length > 60
                  ? `${skill.description.substring(0, 60)}...`
                  : skill.description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive toolkit for building modern, scalable, and impactful applications
          </p>
        </motion.div>

        {/* All Categories Displayed Sequentially */}
        {categories.map((category) => (
          <motion.section 
            key={category.id} 
            variants={itemVariants} 
            className="mb-16"
          >
            {/* Category Header */}
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group">
                <motion.span
                  className="inline-block bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white bg-clip-text hover:text-transparent hover:from-violet-600 hover:via-purple-600 hover:to-amber-500 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {category.name}
                </motion.span>
                <motion.span 
                  className="ml-1 sm:ml-2 text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400 inline-block"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  ({skillsData[category.id]?.length || 0})
                </motion.span>
              </h2>
            </motion.div>
            
            {/* Skills Grid for this Category */}
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
              variants={containerVariants}
            >
              {skillsData[category.id]?.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.section>
        ))}

        {/* Stats Section */}
        <motion.section
          variants={itemVariants}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-violet-500/30 dark:hover:shadow-violet-700/40 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-violet-600 dark:text-violet-400 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                25+
              </motion.div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Technologies</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-700/40 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
              >
                15+
              </motion.div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Projects Built</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-amber-500/30 dark:hover:shadow-amber-700/40 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
              >
                3+
              </motion.div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-700/40 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
              >
                6+
              </motion.div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">Certifications</p>
            </motion.div>
          </div>
        </motion.section>

        {/* No global tooltip needed anymore as we use local tooltips */}
      </motion.div>
    </div>
  );
};

export default Skills;