import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, Clock, Calendar, Tag, Star, Filter, ArrowRight } from 'lucide-react';
import { blogsData } from '../data/blogsData';

const Blogs = () => {
  const [filter, setFilter] = useState('all');
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Extract unique tags
  const allTags = [...new Set(blogsData.flatMap(blog => blog.tags))];
  const categories = ['all', ...allTags];

  const filteredBlogs = filter === 'all' 
    ? blogsData 
    : blogsData.filter(blog => blog.tags.includes(filter));

  const featuredBlogs = blogsData.filter(blog => blog.featured);
  const otherBlogs = blogsData.filter(blog => !blog.featured);

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

  const BlogCard = ({ blog, featured = false }) => (
    <motion.article
      className={`group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 overflow-hidden hover:shadow-xl transition-all duration-300 ${
        featured ? 'md:flex md:items-center' : ''
      }`}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      layout
      onClick={() => setSelectedBlog(blog)}
    >
      {/* Blog Image */}
      <div className={`relative bg-gradient-to-br from-violet-400 via-purple-500 to-amber-400 overflow-hidden ${
        featured ? 'md:w-1/2 h-64 md:h-80' : 'h-48'
      }`}>
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Featured Badge */}
        {blog.featured && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-1 px-3 py-1 bg-amber-400 text-amber-900 rounded-full text-xs font-medium">
              <Star className="h-3 w-3" />
              <span>Featured</span>
            </div>
          </div>
        )}

        {/* Read Time */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 px-3 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs">
            <Clock className="h-3 w-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-violet-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="text-center text-white">
            <BookOpen className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm font-medium">Read Article</p>
          </div>
        </motion.div>
      </div>

      {/* Blog Content */}
      <div className={`p-6 space-y-4 ${featured ? 'md:w-1/2' : ''}`}>
        {/* Date */}
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{new Date(blog.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>

        {/* Title */}
        <h2 className={`font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors cursor-pointer ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {blog.title}
        </h2>
        
        {/* Summary */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {blog.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, featured ? 4 : 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
          {blog.tags.length > (featured ? 4 : 3) && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
              +{blog.tags.length - (featured ? 4 : 3)} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <motion.a
            href={blog.medium_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>Read on Medium</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </motion.article>
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
              Blog & Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge, experiences, and insights from my journey in technology, community building, and innovation
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20">
            <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">{blogsData.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{featuredBlogs.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Featured</div>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{allTags.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Topics</div>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">5K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Reads</div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-2 p-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/20 max-w-4xl">
            <Filter className="h-5 w-5 text-gray-500 ml-2" />
            {categories.slice(0, 6).map((category) => (
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
                {category === 'all' ? 'All Posts' : `#${category}`}
              </motion.button>
            ))}
            {categories.length > 6 && (
              <span className="text-gray-500 text-sm px-2">+{categories.length - 6} more</span>
            )}
          </div>
        </motion.div>

        {/* Featured Blogs */}
        {filter === 'all' && (
          <motion.section variants={itemVariants} className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Articles
              </h2>
            </div>
            
            <motion.div
              className="space-y-8"
              variants={containerVariants}
            >
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured={true} />
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* All Blogs / Filtered Results */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                <BookOpen className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {filter === 'all' ? 'All Articles' : `Articles about ${filter}`}
              </h2>
            </div>
            
            {filteredBlogs.length > 0 && (
              <span className="text-gray-500 dark:text-gray-400">
                {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <AnimatePresence>
              {(filter === 'all' ? otherBlogs : filteredBlogs).map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured={false} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* No Blogs Found */}
        <AnimatePresence>
          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filter to see more articles.
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
            className="inline-flex items-center space-x-4 p-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <BookOpen className="h-10 w-10" />
            <div className="text-left">
              <h3 className="text-2xl font-bold">Stay Updated!</h3>
              <p className="text-violet-100 mb-2">
                Follow me on Medium for more insights and technical articles
              </p>
              <motion.a
                href="https://medium.com/@keerthanamg19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-violet-200 hover:text-white text-sm"
                whileHover={{ x: 5 }}
              >
                <span>Visit Medium Profile</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Blogs;