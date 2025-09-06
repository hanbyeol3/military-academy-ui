import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  subtitle, 
  align = 'center',
  size = 'lg',
  className = ''
}) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align];

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl'
  }[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`${alignmentClass} ${className}`}
    >
      <h2 className={`font-bold leading-tight mb-6 ${sizeClasses}`}>
        <span className="gradient-text neon-text">
          {children}
        </span>
      </h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`h-1 bg-gradient-to-r from-mint to-purple mt-8 rounded-full ${
          align === 'center' ? 'mx-auto' : 
          align === 'right' ? 'ml-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionTitle;