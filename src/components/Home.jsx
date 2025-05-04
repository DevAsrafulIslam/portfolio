'use client'

import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Create matrix characters
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(1, 22, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00B4D8';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-30"
      style={{ background: 'transparent' }}
    />
  );
};

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Create particles
    const createParticles = () => {
      const particleCount = 50;
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(0, 180, 216, ${Math.random() * 0.5 + 0.2})`
        });
      }

      setParticles(newParticles);
    };

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 180, 216, ${0.2 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
};

const RotatingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#011627_0deg,#01223b_120deg,#00B4D8_240deg,#011627_360deg)] animate-spin-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#011627_70%)]"></div>
    </div>
  );
};

const CubeAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
      <div className="cube-wrapper">
        <div className="cube">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>
    </div>
  );
};

const FloatingElements = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsClient(true);
    // Generate particles only on client side
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animateX: Math.random() * 200 - 100,
      animateY: Math.random() * 200 - 100,
      scale: Math.random() * 0.5 + 1,
      duration: Math.random() * 3 + 2
    }));
    setParticles(newParticles);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00B4D8]/20 rounded-full"
          animate={{
            x: [0, particle.animateX],
            y: [0, particle.animateY],
            scale: [1, particle.scale],
            opacity: [0.3, 0.7]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
            filter: "blur(1px)"
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-8 lg:px-16 bg-[#011627] relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-radial from-[#00B4D8]/10 via-transparent to-transparent"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

      {/* Replace the old floating elements with the new component */}
      <FloatingElements />

      {/* Rest of the component */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#00B4D8] font-medium tracking-wider"
                >
                  WELCOME TO MY PORTFOLIO
                </motion.p>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-6xl font-bold space-y-2"
                >
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
                    Hi I'm{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]">
                      Asraful Islam
                    </span>
                  </span>
                  <span className="block text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]">
                    Web Developer
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300/90 text-lg md:text-xl leading-relaxed max-w-2xl backdrop-blur-sm"
              >
                I am a skilled and passionate Front-End Developer, harnessing the power of code
                and design to create captivating user experiences. With a keen eye for aesthetics
                and functionality, I bring websites to life.
              </motion.p>

              {/* CTA Buttons */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <motion.a
                  href="mailto:asrafulislam.dev@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3 bg-gradient-to-r from-[#00B4D8] to-[#48cae4] rounded-lg relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative text-white font-semibold">Hire me</span>
                </motion.a>

                <motion.a
                  href="#"
                  download="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3 border-2 border-[#00B4D8] rounded-lg relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#00B4D8] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative text-[#00B4D8] group-hover:text-white font-semibold transition-colors duration-300">
                    Download CV
                  </span>
                  <FaDownload className="inline-block ml-2 relative" />
                </motion.a>
              </motion.div> */}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-6 pt-8"
              >
                {[
                  { Icon: FaGithub, href: "https://github.com/DevAsrafulIslam" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/md-asrafulislam/" },
                  { Icon: FaFacebook, href: "https://www.facebook.com/dev.asrafulislam" }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      color: '#48cae4'
                    }}
                    className="relative group"
                  >
                    <span className="absolute inset-0 bg-[#00B4D8]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Icon className="text-3xl text-gray-400 hover:text-[#00B4D8] transition-colors duration-300 relative z-10" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image or 3D Element (Optional) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex-1 flex justify-center items-center"
            >
              {/* Add your hero image or 3D element here */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;