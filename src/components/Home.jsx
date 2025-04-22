'use client'

import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

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

const Home = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const createLine = () => {
      const line = {
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${3 + Math.random() * 2}s`
      };
      setLines(prev => [...prev, line]);
      setTimeout(() => {
        setLines(prev => prev.filter(l => l.id !== line.id));
      }, 5000);
    };

    const interval = setInterval(createLine, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-8 lg:px-16 bg-[#011627] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Animated Lines */}
      {lines.map(line => (
        <div
          key={line.id}
          className="line"
          style={{
            left: line.left,
            animationDelay: line.delay,
            animationDuration: line.duration
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300"
            >
              Hi I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]">Asraful Islam</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] via-[#48cae4] to-[#90e0ef]"
            >
              FrontEnd Developer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl text-gray-300/90 text-lg md:text-xl leading-relaxed backdrop-blur-sm"
          >
            I am a skilled and passionate Front-End Developer, harnessing the power of code 
            and design to create captivating user experiences. With a keen eye for aesthetics 
            and functionality, I bring websites to life, seamlessly blending creativity and 
            technology. Constantly seeking growth, I stay updated on the latest industry 
            trends and best practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#48cae4' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#00B4D8] to-[#48cae4] text-white font-semibold rounded-lg shadow-lg shadow-[#00B4D8]/20 transition-all duration-300 backdrop-blur-sm"
            >
              Hire me
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderImage: 'linear-gradient(to right, #00B4D8, #48cae4) 1'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#00B4D8] text-[#00B4D8] font-semibold rounded-lg shadow-lg shadow-[#00B4D8]/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#00B4D8]/10"
            >
              Lets Talk
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-6 pt-8"
          >
            {[FaFacebook, FaGithub, FaLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ 
                  scale: 1.2,
                  color: '#48cae4',
                  boxShadow: '0 0 20px rgba(0,180,216,0.5)'
                }}
                className="text-3xl text-gray-400 hover:text-[#00B4D8] transition-all duration-300 p-2 rounded-full hover:bg-[#00B4D8]/10 backdrop-blur-sm"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;