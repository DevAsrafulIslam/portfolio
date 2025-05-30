'use client'

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error.message || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      value: "asrafulislam.dev@gmail.com",
      link: "mailto:asrafulislam.dev@gmail.com"
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone",
      value: "+880 1980609690",
      link: "tel:+8801980609690"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Location",
      value: "Gazipur Sadar, Dhaka",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-asrafulislam/" },
    { icon: <FaGithub />, href: "https://github.com/DevAsrafulIslam" },
    { icon: <FaWhatsapp />, href: "https://wa.me/8801999870111" }
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-[#011627] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h2
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-xl lg:text-4xl font-bold space-y-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] relative inline-block">
              Get In Touch
              {/* Modern animated underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent"></span>
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef] transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2"></span>

              {/* Decorative dots */}
              <span className="absolute -bottom-2 left-0 w-1 h-1 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span className="absolute -bottom-2 right-0 w-1 h-1 rounded-full bg-[#90e0ef] animate-pulse"></span>
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-gray-300 text-sm">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
                  >
                    <div className="text-[#00B4D8]">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold">{info.title}</h3>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 text-[#00B4D8] text-xl transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8]/20 to-transparent blur-xl"></div>
              <motion.form
                onSubmit={handleSubmit}
                className="relative space-y-6 p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-[#00B4D8]/20"
              >
                <div className="space-y-2">
                  <label className="text-white">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4D8]/20 focus:border-[#00B4D8]/40 text-white outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4D8]/20 focus:border-[#00B4D8]/40 text-white outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4D8]/20 focus:border-[#00B4D8]/40 text-white outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-[#00B4D8]/20 focus:border-[#00B4D8]/40 text-white outline-none transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg bg-gradient-to-r from-[#00B4D8] to-[#48cae4] text-white font-semibold 
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-[#00B4D8]/20'} 
                    transition-all duration-300`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;