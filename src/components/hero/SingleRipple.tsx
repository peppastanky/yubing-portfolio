'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SingleRippleProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export function SingleRipple({ containerRef }: SingleRippleProps) {
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);
  
  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipple(newRipple);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipple(null);
    }, 1000);
  };
  
  return (
    <>
      {/* Invisible click target */}
      <div
        onClick={createRipple}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          cursor: 'pointer',
        }}
      />
      
      {/* Ripple element */}
      {ripple && (
        <motion.div
          key={ripple.id}
          style={{
            position: 'absolute',
            top: ripple.y,
            left: ripple.x,
            width: '20px',
            height: '20px',
            border: '2px solid #4F7DFF',
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      )}
    </>
  );
}
