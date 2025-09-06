import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  href?: string;
  to?: string;
  external?: boolean;
  disabled?: boolean;
  animated?: boolean;
  glow?: boolean;
  pulse?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  to,
  external = false,
  disabled = false,
  animated = true,
  glow = false,
  pulse = false,
  type = 'button'
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mint
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-mint to-mint-light text-bg-primary 
      hover:from-mint-light hover:to-mint hover:shadow-lg hover:shadow-mint/30
      active:scale-95
    `,
    secondary: `
      bg-gradient-to-r from-purple to-purple text-white 
      hover:shadow-lg hover:shadow-purple/30 active:scale-95
    `,
    outline: `
      border-2 border-mint text-mint bg-transparent 
      hover:bg-mint hover:text-bg-primary hover:glow
      active:scale-95
    `,
    ghost: `
      text-mint bg-transparent hover:bg-mint hover:bg-opacity-10 
      hover:glow active:scale-95
    `
  }[variant];

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }[size];

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05,
      transition: { type: 'spring' as const, stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const combinedClasses = `
    ${baseClasses} ${variantClasses} ${sizeClasses} 
    ${glow ? 'glow' : ''} 
    ${pulse ? 'animate-pulse-glow' : ''} 
    ${className}
  `;

  const MotionComponent = animated ? motion.button : 'button';

  const buttonProps = {
    onClick,
    disabled,
    type,
    className: combinedClasses,
    ...(animated ? {
      variants: buttonVariants,
      initial: "initial",
      animate: "animate",
      whileHover: "hover",
      whileTap: "tap",
      transition: { duration: 0.3, ease: 'easeOut' as const }
    } : {})
  };

  // External link
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        <MotionComponent {...buttonProps as any}>
          {children}
        </MotionComponent>
      </a>
    );
  }

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className="inline-block">
        <MotionComponent {...buttonProps as any}>
          {children}
        </MotionComponent>
      </Link>
    );
  }

  // Regular button
  return (
    <MotionComponent {...buttonProps as any}>
      {children}
    </MotionComponent>
  );
};

export default Button;