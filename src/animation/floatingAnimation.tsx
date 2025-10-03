import React from 'react';
import { motion } from 'framer-motion';

interface FloatingTechLogosProps {
  className?: string;
}

const FloatingTechLogos: React.FC<FloatingTechLogosProps> = ({ className = '' }) => {
  const logos = [
    {
      name: 'GitHub',
      icon: 'github',
      color: '#181717',
      position: { top: '10%', left: '15%' },
      size: 'w-12 h-12',
      duration: 6,
      delay: 0
    },
    {
      name: 'Python',
      icon: 'python',
      color: '#3776AB',
      position: { top: '25%', right: '12%' },
      size: 'w-12 h-12',
      duration: 7,
      delay: 1
    },
    
    {
      name: 'Next.js',
      icon: 'nextdotjs',
      color: '#000000',
      position: { bottom: '15%', left: '10%' },
      size: 'w-10 h-10',
      duration: 8,
      delay: 0.5
    },
    {
      name: 'React',
      icon: 'react',
      color: '#61DAFB',
      position: { top: '50%', left: '8%' },
      size: 'w-14 h-14',
      duration: 6.5,
      delay: 1.5
    },
    {
      name: 'Node.js',
      icon: 'nodedotjs',
      color: '#339933',
      position: { bottom: '20%', right: '15%' },
      size: 'w-11 h-11',
      duration: 7.5,
      delay: 2
    },
    {
      name: 'MySQL',
      icon: 'mysql',
      color: '#4479A1',
      position: { top: '70%', left: '20%' },
      size: 'w-13 h-13',
      duration: 8.5,
      delay: 0.8
    },
    {
      name: 'Docker',
      icon: 'docker',
      color: '#2496ED',
      position: { top: '35%', right: '8%' },
      size: 'w-12 h-12',
      duration: 7,
      delay: 1.2
    }
  ];

  const floatingAnimation = (duration: number, delay: number) => ({
    y: [0, -20, 0],
    x: [0, 10, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className={`absolute ${logo.size}`}
          style={{
            ...logo.position,
            opacity: 0.8
          }}
          animate={floatingAnimation(logo.duration, logo.delay)}
        >
          <img
            src={`https://cdn.simpleicons.org/${logo.icon}/${logo.color.replace('#', '')}`}
            alt={logo.name}
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechLogos;