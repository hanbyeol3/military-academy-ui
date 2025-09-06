import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-mint to-mint-light text-bg-primary',
    secondary: 'bg-gradient-to-r from-purple to-purple text-white',
    accent: 'bg-gradient-to-r from-mint to-purple text-bg-primary'
  }[variant];

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  }[size];

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.span
      variants={animated ? badgeVariants : undefined}
      initial={animated ? "initial" : undefined}
      animate={animated ? "animate" : undefined}
      whileHover={animated ? "hover" : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        inline-flex items-center justify-center font-semibold rounded-full
        shadow-lg transition-all duration-300 
        ${variantClasses} ${sizeClasses} ${className}
        hover:shadow-xl hover:glow
      `}
    >
      {children}
    </motion.span>
  );
};

export default Badge;