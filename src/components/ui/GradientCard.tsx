import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  as?: 'div' | 'article' | 'section';
}

const GradientCard: React.FC<GradientCardProps> = ({ 
  children, 
  className = '',
  hover = true,
  glow = false,
  onClick,
  as: Component = 'div'
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover ? { 
      y: -10,
      scale: 1.02,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 }
    } : {}
  };

  const glowClass = glow ? 'glow' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onClick={onClick}
      className={`
        glass rounded-xl p-6 border border-mint border-opacity-20 
        backdrop-blur-md transition-all duration-300 
        ${glowClass} ${clickableClass} ${className}
        hover:border-mint hover:border-opacity-40 
        hover:shadow-lg hover:shadow-mint/20
      `}
    >
      <Component className="h-full">
        {children}
      </Component>
    </motion.div>
  );
};

export default GradientCard;