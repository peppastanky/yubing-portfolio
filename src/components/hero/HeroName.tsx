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
  
  // Smooth spring animations for mouse position
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  
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
  
  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
    >
      <h1
        style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: '700',
          lineHeight: '0.9',
          color: '#EDEDED',
          margin: 0,
          position: 'relative',
          zIndex: 1,
          // Smooth glow transition on hover
          transition: prefersReducedMotion ? 'none' : 'text-shadow 0.3s ease, filter 0.3s ease',
          // Layered glow effect for premium feel
          textShadow: isHovering
            ? `
              0 0 20px rgba(79, 125, 255, 0.4),
              0 0 40px rgba(79, 125, 255, 0.2),
              0 0 60px rgba(79, 125, 255, 0.1)
            `
            : 'none',
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
      </h1>
      
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
        x: mouseX,
        y: mouseY,
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #4F7DFF',
        boxShadow: '0 0 30px rgba(79, 125, 255, 0.6)',
        zIndex: 10,
        pointerEvents: 'none',
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={showCircle ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
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
