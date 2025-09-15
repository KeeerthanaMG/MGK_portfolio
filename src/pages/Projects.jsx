import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, Filter, Zap } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = [...projectsData.featured, ...projectsData.others];
  const categories = ['all', 'Web App', 'Mobile App', 'Data Analysis', 'Backend'];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-xl transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      layout
      onClick={() => setSelectedProject(project)}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-violet-400 via-purple-500 to-amber-400 overflow-hidden">
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <motion.div 
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 rounded-full text-xs font-medium border border-amber-300/50 shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 3 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Star className="h-3 w-3" />
              <span>Featured</span>
            </motion.div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <motion.span 
            className="px-3 py-1 bg-white/30 backdrop-blur-sm text-white text-xs rounded-full border border-white/30 shadow-lg group-hover:bg-white/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {project.category}
          </motion.span>
        </div>

        {/* Hover Overlay with Glassmorphism GitHub Button */}
        <motion.div
          className="absolute inset-0 bg-violet-600/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            )}
            <motion.a
              href={project.demo || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-medium shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <span>View</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors cursor-pointer">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack - Show All */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-xs rounded-full border border-violet-200 dark:border-violet-700 hover:bg-violet-200 dark:hover:bg-violet-800/40 hover:shadow-sm transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* No Action Buttons as per requirement */}
        <div className="pt-4"></div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting solutions that bridge technology and real-world impact through innovative development
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex items-center space-x-2 p-1 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/20 shadow-lg">
            <Filter className="h-5 w-5 text-gray-500 ml-3 animate-pulse" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-white/80 dark:hover:bg-gray-700/80'
                }`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence>
              {projectsData.featured
                .filter(project => filter === 'all' || project.category === filter)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Other Projects Section */}
        {projectsData.others.filter(project => filter === 'all' || project.category === filter).length > 0 && (
          <motion.section variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                <Zap className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Other Projects
              </h2>
            </div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              <AnimatePresence>
                {projectsData.others
                  .filter(project => filter === 'all' || project.category === filter)
                  .map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
              </AnimatePresence>
            </motion.div>
          </motion.section>
        )}

        {/* No Projects Found */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Filter className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filter to see more projects.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal - Placeholder for future implementation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;