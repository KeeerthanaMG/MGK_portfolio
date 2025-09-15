import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Medal, Star, Users, BookOpen, Calendar, Filter } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

const Achievements = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'Hackathon', 'National Competition', 'Academic Excellence', 'Leadership', 'Research'];

  const iconMap = {
    'trophy': Trophy,
    'award': Award,
    'medal': Medal,
    'star': Star,
    'users': Users,
    'book-open': BookOpen
  };

  const filteredAchievements = filter === 'all' 
    ? achievementsData 
    : achievementsData.filter(achievement => achievement.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const AchievementCard = ({ achievement, index }) => {
    const IconComponent = iconMap[achievement.icon] || Trophy;
    
    return (
      <motion.div
        className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.02 }}
        layout
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <IconComponent className="h-16 w-16 text-gray-400" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Year */}
          <div className="flex items-start justify-between mb-6">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">{achievement.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {achievement.description}
          </p>

          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300">
              {achievement.category}
            </span>
            
            {/* Achievement Number */}
            <div className="text-2xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-violet-200 dark:group-hover:text-violet-700 transition-colors">
              #{String(index + 1).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Hover Animation Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          layoutId={`achievement-line-${achievement.id}`}
        />
      </motion.div>
    );
  };

  const stats = [
    { label: "Hackathons Won", value: "5+", icon: Trophy, color: "text-yellow-600" },
    { label: "National Competitions", value: "3+", icon: Medal, color: "text-blue-600" },
    { label: "Leadership Roles", value: "4+", icon: Users, color: "text-green-600" },
    { label: "Research Papers", value: "2+", icon: BookOpen, color: "text-purple-600" }
  ];

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
              Achievements
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recognition and milestones in my journey of innovation, leadership, and technical excellence
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color} mb-3`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Filter Tabs */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-2 p-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/20">
            <Filter className="h-5 w-5 text-gray-500 ml-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-violet-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Achievements' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Achievements Found */}
        <AnimatePresence>
          {filteredAchievements.length === 0 && (
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
                No achievements found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filter to see more achievements.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.section
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-flex items-center space-x-2 p-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Star className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-bold">More to Come!</h3>
              <p className="text-violet-100">Currently working on exciting new projects and competitions</p>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Achievements;