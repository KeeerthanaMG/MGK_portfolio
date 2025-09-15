import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, BookOpen, Download, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Initialize EmailJS with your public key
      // You'll need to replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "keerthanamg19@gmail.com",
      href: "mailto:keerthanamg19@gmail.com",
      color: "from-red-400 to-pink-500",
      animation: { y: [0, -5, 0], rotate: [0, 2, 0] },
      delay: 0
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9445087093",
      href: "tel:+919445087093",
      color: "from-green-400 to-emerald-500",
      animation: { y: [0, -5, 0], rotate: [0, -2, 0] },
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Tiruvallur, Tamil Nadu, India",
      href: "https://maps.google.com/",
      color: "from-blue-400 to-indigo-500",
      animation: { y: [0, -5, 0], rotate: [0, 2, 0] },
      delay: 0.4
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/keerthana-m-g',
      color: 'hover:text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/KeerrthanaMG',
      color: 'hover:text-gray-800 dark:hover:text-white',
      bg: 'bg-gray-100 dark:bg-gray-700'
    },
    {
      name: 'Medium',
      icon: BookOpen,
      href: 'https://medium.com/@keerthanamg19',
      color: 'hover:text-green-600',
      bg: 'bg-green-100 dark:bg-green-900/30'
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
              Get In Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
                I'm always excited to connect with fellow developers, potential collaborators, 
                or anyone interested in technology and innovation. Whether you have a project idea, 
                want to discuss opportunities, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-lg hover:shadow-violet-500/20 dark:hover:shadow-violet-700/30 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: info.delay }}
                >
                  <motion.div 
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} shadow-md`}
                    animate={info.animation}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: info.delay }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      {info.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: info.delay + 0.3, duration: 0.5 }}
                    >
                      {info.content}
                    </motion.p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links - Moved to below form */}

            {/* Resume Download */}
            <motion.div
              className="p-4 sm:p-6 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg sm:rounded-xl text-white shadow-lg hover:shadow-violet-500/50 dark:hover:shadow-violet-700/50 border border-white/20"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div 
                  className="p-2 sm:p-3 bg-white/20 rounded-lg shadow-inner"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
                <div className="flex-1 text-center sm:text-left">
                  <motion.h3 
                    className="text-base sm:text-lg font-semibold mb-1"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Download Resume
                  </motion.h3>
                  <motion.p 
                    className="text-violet-100 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    Get a detailed overview of my experience and skills
                  </motion.p>
                </div>
                <motion.a
                  href="https://drive.google.com/your-resume-link" // Replace with actual resume link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-2 bg-white text-violet-600 rounded-lg font-medium hover:bg-violet-50 hover:text-violet-700 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base flex items-center space-x-2 border border-white/50"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <span>Download</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Download className="h-4 w-4" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 p-5 sm:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl hover:shadow-violet-500/20 dark:hover:shadow-violet-700/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-900 dark:from-white dark:to-white hover:from-violet-600 hover:via-purple-600 hover:to-amber-500 bg-clip-text hover:text-transparent transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Send a Message
              </motion.h3>

              {/* Form Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.label 
                    htmlFor="name" 
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    Your Name *
                  </motion.label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white text-sm sm:text-base shadow-sm hover:shadow-md"
                    placeholder="Enter your full name"
                    whileFocus={{ scale: 1.01 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.label 
                    htmlFor="email" 
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    Email Address *
                  </motion.label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white text-sm sm:text-base shadow-sm hover:shadow-md"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.01 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.label 
                  htmlFor="subject" 
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  Subject *
                </motion.label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white text-sm sm:text-base shadow-sm hover:shadow-md"
                  placeholder="What would you like to discuss?"
                  whileFocus={{ scale: 1.01 }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.label 
                  htmlFor="message" 
                  className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  Message *
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white resize-none text-sm sm:text-base shadow-sm hover:shadow-md"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  whileFocus={{ scale: 1.01 }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-lg hover:from-violet-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base border border-transparent hover:border-white/20"
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <motion.p 
                className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              >
                I typically respond within 24 hours
              </motion.p>
            </motion.form>
            
            {/* Social Links - Moved below form with brighter colors */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 
                className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Connect With Me Online
              </motion.h3>
              <motion.div 
                className="flex justify-center space-x-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-white/30 ${social.name === 'LinkedIn' ? 'bg-blue-500 hover:bg-blue-600' : social.name === 'GitHub' ? 'bg-gray-800 hover:bg-gray-900' : 'bg-green-500 hover:bg-green-600'}`}
                    whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
                    >
                      <social.icon className="h-7 w-7 text-white" />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;