'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeroNameProps {
  text: string;
  className?: string;
}

export function HeroName({ text, className = '' }: HeroNameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Motion values for smooth mouse tracking (no re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Lighter springs for smoother, more fluid trailing motion
  // Lower stiffness + higher damping = softer, more premium feel
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 25, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 25, mass: 0.5 });
  
  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Handle mouse movement (updates motion values, not state)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  // Split text into characters for stagger animation
  const characters = text.split('');
  
  // Dynamic text-shadow that follows cursor
  // Throttled update: only recalculates every few pixels for better performance
  const textShadow = useTransform(
    [smoothMouseX, smoothMouseY],
    ([x, y]) => {
      if (!isHovering) return 'none';
      // Simplified glow - fewer layers, better performance
      return `
        0 0 30px rgba(138, 43, 226, 0.5),
        0 0 60px rgba(138, 43, 226, 0.3)
      `;
    }
  );
  
  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
    >
      <motion.h1
        style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: '700',
          lineHeight: '0.9',
          color: '#EDEDED',
          margin: 0,
          position: 'relative',
          zIndex: 1,
          textShadow: textShadow,
          // Smooth filter transition on hover
          transition: prefersReducedMotion ? 'none' : 'filter 0.3s ease',
          // Subtle brightness lift on hover
          filter: isHovering ? 'brightness(1.1)' : 'brightness(1)',
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            style={{ 
              display: 'inline-block',
              // Gradient text effect
              background: 'linear-gradient(135deg, #EDEDED 0%, #4F7DFF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.4 + index * 0.05,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
      
      {/* Premium subtle hover indicator - gradient line */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(80px, 20%, 100px)',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #4F7DFF, transparent)',
          pointerEvents: 'none',
          zIndex: 20
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ 
          opacity: isHovering ? 0 : [0, 0.6, 0.6, 0],
          scaleX: isHovering ? 0 : [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 3,
          delay: 2,
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut"
        }}
      />
      
      {/* Pulsing dot indicator */}
      {!prefersReducedMotion && (
        <motion.div
          style={{
            position: 'absolute',
            top: '0',
            right: '-20px',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#4F7DFF',
            pointerEvents: 'none',
            zIndex: 20
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovering ? 0 : [0, 0.8, 0.8, 0],
            scale: isHovering ? 0 : [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 3,
            delay: 2,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#4F7DFF',
              opacity: 0.4
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
      
      {/* Profile follower circle - follows mouse smoothly */}
      {!prefersReducedMotion && (
        <ProfileFollower 
          mouseX={smoothMouseX}
          mouseY={smoothMouseY}
          isHovering={isHovering} 
        />
      )}
    </div>
  );
}

// Profile circle that follows mouse smoothly
interface ProfileFollowerProps {
  mouseX: any;
  mouseY: any;
  isHovering: boolean;
}

function ProfileFollower({ mouseX, mouseY, isHovering }: ProfileFollowerProps) {
  const [showCircle, setShowCircle] = useState(false);
  
  // Delay showing circle on hover
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isHovering) {
      timeout = setTimeout(() => setShowCircle(true), 150);
    } else {
      setShowCircle(false);
    }
    
    return () => clearTimeout(timeout);
  }, [isHovering]);
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        // Start from top-left corner, transform will position it
        left: 0,
        top: 0,
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #4F7DFF',
        boxShadow: '0 0 30px rgba(79, 125, 255, 0.6)',
        zIndex: 10,
        pointerEvents: 'none',
        // Use will-change to optimize for smooth animations
        willChange: 'transform',
        // Direct motion value binding for smooth cursor following
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: showCircle ? 1 : 0,
        scale: showCircle ? 1 : 0,
      }}
      transition={{
        // Fast opacity/scale for crisp appear/disappear
        opacity: { duration: 0.2 },
        scale: { type: 'spring', stiffness: 200, damping: 15 },
      }}
    >
      <img
        src="/profile.jpg"
        alt="Yu Bing"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </motion.div>
  );
}
