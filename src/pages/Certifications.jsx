import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Layers, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      name: "Machine Learning A-Z",
      provider: "Udemy",
      logo: "🎓",
      year: "2024",
      description: "Comprehensive machine learning course covering supervised and unsupervised learning algorithms.",
      skills: ["Python", "Scikit-Learn", "TensorFlow", "Data Analysis"],
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      name: "Web Development Frontend",
      provider: "Sudharshan IT Academy",
      logo: "💻",
      year: "2024",
      description: "Advanced frontend development techniques focusing on modern frameworks and responsive design.",
      skills: ["React", "JavaScript", "CSS", "Responsive Design"],
      gradient: "from-purple-400 to-violet-600"
    },
    {
      name: "Prompt Engineering",
      provider: "LinkedIn",
      logo: "🤖",
      year: "2024",
      description: "Techniques for effective prompt design and optimization for large language models.",
      skills: ["AI", "NLP", "LLMs", "Content Generation"],
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      name: "React Development",
      provider: "Meta",
      logo: "⚛️",
      year: "2023",
      description: "Official Meta certification for building efficient and scalable applications with React.",
      skills: ["React", "Redux", "Hooks", "Component Design"],
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      name: "Django Backend",
      provider: "Coursera",
      logo: "🐍",
      year: "2023",
      description: "Backend development with Django framework, covering models, views, and REST APIs.",
      skills: ["Python", "Django", "REST API", "Database Design"],
      gradient: "from-green-400 to-emerald-600"
    },
    {
      name: "AWS Cloud",
      provider: "Amazon",
      logo: "☁️",
      year: "2024",
      description: "Cloud architecture and deployment using Amazon Web Services infrastructure.",
      skills: ["EC2", "S3", "Lambda", "CloudFormation"],
      gradient: "from-amber-400 to-orange-600"
    }
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
          <motion.div 
            className="inline-block p-2 mb-4 bg-gradient-to-r from-violet-500 via-purple-500 to-amber-500 rounded-full shadow-lg hover:shadow-violet-500/50 dark:hover:shadow-violet-700/50 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            <Award className="h-8 w-8 text-white" />
          </motion.div>
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-amber-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Certifications
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Professional certifications and courses that have enhanced my skills and expertise
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Certificate Header with Gradient */}
              <motion.div 
                className={`bg-gradient-to-r ${cert.gradient} p-6 relative overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl mb-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 0.2 * index }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {cert.logo}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-white mb-1"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (0.1 * index), duration: 0.3 }}
                  >
                    {cert.name}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 text-sm font-medium flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (0.1 * index), duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                      className="inline-block mr-1"
                    >
                      <Star className="h-3 w-3" />
                    </motion.span>
                    {cert.provider}
                  </motion.p>
                </div>
              </motion.div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.year}
                  </span>
                  
                  <motion.button 
                    className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <motion.div 
                  className="pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (0.1 * index), duration: 0.3 }}
                >
                  <motion.h4 
                    className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold mb-2 flex items-center"
                    whileHover={{ x: 3, color: "#8b5cf6" }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: index * 0.3 }}
                      className="inline-flex mr-1"
                    >
                      <CheckCircle className="h-3 w-3" />
                    </motion.span> 
                    Skills Acquired
                  </motion.h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${cert.gradient}/10 text-xs rounded-full border border-${cert.gradient.split('-')[1]}-400/20 hover:shadow-md transition-all duration-300`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (0.1 * index) + (0.05 * skillIndex), duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certifications;