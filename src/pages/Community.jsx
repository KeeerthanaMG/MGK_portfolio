import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Code, Users, Star, GitFork, ExternalLink, Calendar, Target, Award } from 'lucide-react';
import { communityData } from '../data/communityData';

const Community = () => {

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

  const TalkCard = ({ talk, index }) => (
    <motion.div
      className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-xl transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      layout
    >
      {/* Talk Image */}
      <div className="relative h-48 bg-gradient-to-br from-violet-400 via-purple-500 to-amber-400 overflow-hidden">
        <motion.img
          src={talk.image}
          alt={talk.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
            {talk.type}
          </span>
        </div>

        {/* Date */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
            {talk.date}
          </span>
        </div>

        {/* Audience Info */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2 text-white">
            <Users className="h-4 w-4" />
            <span className="text-sm">{talk.audience}</span>
          </div>
        </div>
      </div>

      {/* Talk Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {talk.title}
        </h3>
        
        <p className="text-violet-600 dark:text-violet-400 font-medium">
          {talk.event}
        </p>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {talk.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {talk.topics.map((topic, topicIndex) => (
            <span
              key={topicIndex}
              className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const OpenSourceCard = ({ project, index }) => (
    <motion.div
      className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 p-6 hover:shadow-xl transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      layout
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
            <Code className="h-6 w-6 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {project.title}
            </h3>
            {project.language && (
              <span className="text-sm text-gray-500">{project.language}</span>
            )}
          </div>
        </div>

        {/* Stats */}
        {project.stars && (
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="h-4 w-4" />
              <span>{project.forks}</span>
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Contributions */}
      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">My Contributions:</h4>
        <div className="flex flex-wrap gap-1">
          {project.contributions.map((contribution, contribIndex) => (
            <span
              key={contribIndex}
              className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded"
            >
              {contribution}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {project.impact || `${project.stars} stars`}
        </div>
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <span>View Code</span>
            <ExternalLink className="h-3 w-3" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );

  const LeadershipCard = ({ role, index }) => (
    <motion.div
      className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      layout
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color} group-hover:scale-110 transition-transform duration-300`}>
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {role.role}
            </h3>
            <p className="text-violet-600 dark:text-violet-400 font-medium">
              {role.organization}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{role.duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="relative z-10 text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {role.description}
      </p>

      {/* Achievements */}
      <div className="relative z-10 space-y-3 mb-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
          <Award className="h-4 w-4 mr-2 text-amber-500" />
          Key Achievements:
        </h4>
        <ul className="space-y-1">
          {role.achievements.map((achievement, achIndex) => (
            <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-1 h-1 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Target className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Impact: {role.impact}
          </span>
        </div>
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
              Community Impact
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building bridges between technology and community through talks, open source contributions, and leadership
          </p>
        </motion.div>

        {/* Tech Talks Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Tech Talks
              <span className="ml-3 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm rounded-full">
                {communityData.talks.length}
              </span>
            </h2>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {communityData.talks.map((talk, index) => (
              <TalkCard key={talk.id} talk={talk} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Open Source Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Open Source
              <span className="ml-3 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                {communityData.opensource.length}
              </span>
            </h2>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {communityData.opensource.map((project, index) => (
              <OpenSourceCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Leadership
              <span className="ml-3 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                {communityData.leadership.length}
              </span>
            </h2>
          </div>
          
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {communityData.leadership.map((role, index) => (
              <LeadershipCard key={index} role={role} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.section
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-flex items-center space-x-4 p-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Users className="h-10 w-10" />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Let's Collaborate!</h3>
              <p className="text-violet-100">
                Always open to speaking opportunities, open-source collaborations, and community building initiatives
              </p>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Community;