import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

function NavItem({ item, index }: { item: typeof navigation[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ position: 'relative', marginRight: '2rem' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={item.href}
        style={{ 
          color: '#9CA3AF', 
          transition: 'color 0.2s', 
          display: 'block',
          paddingBottom: '0.5rem'
        }}
        animate={{ color: isHovered ? '#F5F5F7' : '#9CA3AF' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {item.name}
      </motion.a>
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#6366F1',
          transformOrigin: 'center'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        backgroundColor: scrolled ? 'rgba(11, 11, 15, 0.95)' : 'rgba(11, 11, 15, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '2px solid #6366F1',
        transition: 'background-color 0.3s'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          {/* Logo */}
          <motion.a 
            href="#" 
            style={{ fontSize: '1.25rem', fontWeight: 600, color: '#F5F5F7', transition: 'color 0.2s' }}
            whileHover={{ scale: 1.05, color: '#6366F1' }}
            whileTap={{ scale: 0.95 }}
          >
            LYB
          </motion.a>

          {/* Desktop Navigation */}
          <div style={{ display: 'none' }} className="desktop-nav">
            {navigation.map((item, index) => (
              <NavItem key={item.name} item={item} index={index} />
            ))}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid #2A2A35' }}>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                whileHover={{ scale: 1.1, color: '#F5F5F7', rotate: 5 }}
                aria-label="Resume"
              >
                <FileText size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                whileHover={{ scale: 1.1, color: '#F5F5F7', rotate: 5 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                whileHover={{ scale: 1.1, color: '#F5F5F7', rotate: 5 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer' }}
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1, color: '#F5F5F7' }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            style={{ borderTop: '1px solid #2A2A35', overflow: 'hidden' }} 
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div style={{ padding: '1rem 1.5rem' }}>
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={{ display: 'block', color: '#9CA3AF', marginBottom: '0.75rem', transition: 'color 0.2s' }}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, color: '#F5F5F7' }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div 
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #2A2A35', marginTop: '0.75rem' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                  whileHover={{ scale: 1.1, color: '#F5F5F7' }}
                  aria-label="Resume"
                >
                  <FileText size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/limyubing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                  whileHover={{ scale: 1.1, color: '#F5F5F7' }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/limyubing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                  whileHover={{ scale: 1.1, color: '#F5F5F7' }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}