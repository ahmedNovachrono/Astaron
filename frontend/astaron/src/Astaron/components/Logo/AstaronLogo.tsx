import React from 'react';
import { motion } from 'motion/react';

interface AstarothLogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function AstarothLogo({ size = 48, className = '', animate = true }: AstarothLogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? { opacity: 0, scale: 0.8 } : {}}
      animate={animate ? { opacity: 1, scale: 1 } : {}}
      transition={animate ? { duration: 0.6 } : {}}
    >
      {/* Outer Circle - Knowledge Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="#39FF14"
        strokeWidth="2"
        fill="none"
        initial={animate ? { pathLength: 0, rotate: 0 } : {}}
        animate={animate ? { pathLength: 1, rotate: 360 } : {}}
        transition={animate ? { 
          pathLength: { duration: 1.5, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        } : {}}
        style={{ originX: '50px', originY: '50px' }}
      />

      {/* Book Base */}
      <motion.g
        initial={animate ? { opacity: 0, y: 10 } : {}}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={animate ? { duration: 0.8, delay: 0.5 } : {}}
      >
        {/* Left page */}
        <path
          d="M 35 40 L 35 65 Q 35 70 40 70 L 48 70 L 48 40 Z"
          stroke="#39FF14"
          strokeWidth="2"
          fill="none"
        />
        {/* Right page */}
        <path
          d="M 52 40 L 52 70 L 60 70 Q 65 70 65 65 L 65 40 Z"
          stroke="#39FF14"
          strokeWidth="2"
          fill="none"
        />
        {/* Book spine */}
        <line
          x1="50"
          y1="40"
          x2="50"
          y2="70"
          stroke="#39FF14"
          strokeWidth="2.5"
        />
        {/* Book top */}
        <path
          d="M 35 40 Q 35 35 40 35 L 48 35 L 52 35 L 60 35 Q 65 35 65 40"
          stroke="#39FF14"
          strokeWidth="2"
          fill="none"
        />
      </motion.g>

      {/* Animated page lines */}
      <motion.g
        initial={animate ? { opacity: 0 } : {}}
        animate={animate ? { opacity: 1 } : {}}
        transition={animate ? { duration: 0.6, delay: 1 } : {}}
      >
        <line x1="38" y1="48" x2="47" y2="48" stroke="#39FF14" strokeWidth="1" />
        <line x1="38" y1="52" x2="47" y2="52" stroke="#39FF14" strokeWidth="1" />
        <line x1="38" y1="56" x2="47" y2="56" stroke="#39FF14" strokeWidth="1" />
        <line x1="53" y1="48" x2="62" y2="48" stroke="#39FF14" strokeWidth="1" />
        <line x1="53" y1="52" x2="62" y2="52" stroke="#39FF14" strokeWidth="1" />
        <line x1="53" y1="56" x2="62" y2="56" stroke="#39FF14" strokeWidth="1" />
      </motion.g>

      {/* Light bulb - Symbol of Ideas */}
      <motion.g
        initial={animate ? { scale: 0, opacity: 0 } : {}}
        animate={animate ? { scale: 1, opacity: 1 } : {}}
        transition={animate ? { duration: 0.6, delay: 1.2, type: "spring" } : {}}
        style={{ originX: '50px', originY: '25px' }}
      >
        {/* Bulb */}
        <circle cx="50" cy="25" r="6" stroke="#39FF14" strokeWidth="2" fill="none" />
        {/* Filament */}
        <motion.path
          d="M 48 24 L 50 26 L 52 24"
          stroke="#39FF14"
          strokeWidth="1.5"
          fill="none"
          animate={animate ? {
            opacity: [1, 0.4, 1],
          } : {}}
          transition={animate ? {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
        />
        {/* Base */}
        <rect x="47" y="31" width="6" height="3" stroke="#39FF14" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Sparkles - Knowledge Bursts */}
      <motion.g
        initial={animate ? { opacity: 0, scale: 0 } : {}}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={animate ? { duration: 0.6, delay: 1.5 } : {}}
      >
        {/* Top left sparkle */}
        <motion.g
          animate={animate ? {
            rotate: [0, 180],
            opacity: [1, 0.5, 1]
          } : {}}
          transition={animate ? {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          } : {}}
          style={{ originX: '20px', originY: '30px' }}
        >
          <path d="M 20 26 L 20 34 M 16 30 L 24 30" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Top right sparkle */}
        <motion.g
          animate={animate ? {
            rotate: [0, -180],
            opacity: [1, 0.5, 1]
          } : {}}
          transition={animate ? {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          } : {}}
          style={{ originX: '80px', originY: '30px' }}
        >
          <path d="M 80 26 L 80 34 M 76 30 L 84 30" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Bottom left sparkle */}
        <motion.g
          animate={animate ? {
            rotate: [0, 180],
            opacity: [1, 0.5, 1]
          } : {}}
          transition={animate ? {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          } : {}}
          style={{ originX: '25px', originY: '75px' }}
        >
          <path d="M 25 72 L 25 78 M 22 75 L 28 75" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Bottom right sparkle */}
        <motion.g
          animate={animate ? {
            rotate: [0, -180],
            opacity: [1, 0.5, 1]
          } : {}}
          transition={animate ? {
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          } : {}}
          style={{ originX: '75px', originY: '75px' }}
        >
          <path d="M 75 72 L 75 78 M 72 75 L 78 75" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </motion.g>

      {/* Brain Pattern - Left and Right */}
      <motion.g
        initial={animate ? { opacity: 0 } : {}}
        animate={animate ? { opacity: 1 } : {}}
        transition={animate ? { duration: 0.8, delay: 1.8 } : {}}
      >
        {/* Left brain curves */}
        <path
          d="M 28 50 Q 23 48 20 52 M 28 55 Q 23 57 22 60"
          stroke="#39FF14"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right brain curves */}
        <path
          d="M 72 50 Q 77 48 80 52 M 72 55 Q 77 57 78 60"
          stroke="#39FF14"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Glow Effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
}