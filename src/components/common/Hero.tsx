import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  children, 
  className = '', 
  backgroundImage 
}) => {
  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary opacity-90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint opacity-5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple opacity-5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-mint to-transparent"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-2 h-2 bg-mint rounded-full mx-auto mt-2 glow"
        />
      </motion.div>
    </section>
  );
};

export default Hero;