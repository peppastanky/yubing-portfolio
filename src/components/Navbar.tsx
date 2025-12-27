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
      style={{ position: 'relative', padding: '0 1.5rem' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={item.href}
        style={{ 
          color: '#A1A1AA', 
          transition: 'color 0.2s', 
          display: 'block',
          paddingBottom: '0.5rem'
        }}
        animate={{ color: isHovered ? '#EDEDED' : '#A1A1AA' }}
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
          backgroundColor: '#71717A',
          transformOrigin: 'center'
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

function NavIconItem({ 
  href, 
  icon, 
  label, 
  index 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  index: number; 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ position: 'relative', padding: '0 0.75rem' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          color: '#8d8dfc', 
          transition: 'color 0.2s', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
          paddingBottom: '0.5rem'
        }}
        animate={{ color: isHovered ? '#EDEDED' : '#9797fc' }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: (5 + index) * 0.1 }}
        aria-label={label}
      >
        {icon}
        <span style={{ fontSize: '0.7rem', fontWeight: 500 }}>{label}</span>
      </motion.a>
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#71717A',
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
        borderBottom: '2px solid #71717A',
        transition: 'background-color 0.3s'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>
          {/* Logo */}
          <motion.a 
            href="#" 
            style={{ fontSize: '1.25rem', fontWeight: 600, color: '#EDEDED', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}
            whileHover={{ scale: 1.05, color: '#9D7DFF' }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/favicon.png" alt="Logo" style={{ width: '28px', height: '28px' }} />
            LYB
          </motion.a>

          {/* Desktop Navigation */}
          <div style={{ display: 'none', flex: 1, justifyContent: 'center', marginTop: '0.5rem' }} className="desktop-nav">
            {navigation.map((item, index) => (
              <NavItem key={item.name} item={item} index={index} />
            ))}
          </div>
          
          {/* Desktop Icons */}
          <div style={{ display: 'none', flexShrink: 0 }} className="desktop-icons">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', paddingLeft: '1.5rem', borderLeft: '1px solid rgba(113, 113, 122, 0.3)', marginTop: '0.5rem' }}>
              
              <NavIconItem 
                href="/resume.pdf" 
                icon={<FileText size={18} />} 
                label="Resume" 
                index={0}
              />
              <NavIconItem 
                href="https://www.linkedin.com/in/limyubing" 
                icon={<Linkedin size={18} />} 
                label="LinkedIn" 
                index={1}
              />
              <NavIconItem 
                href="https://github.com/peppastanky" 
                icon={<Github size={18} />} 
                label="GitHub" 
                index={2}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            style={{ color: '#A1A1AA', background: 'none', border: 'none', cursor: 'pointer' }}
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1, color: '#EDEDED' }}
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
                  style={{ display: 'block', color: '#A1A1AA', marginBottom: '0.75rem', transition: 'color 0.2s' }}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, color: '#EDEDED' }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(113, 113, 122, 0.3)', marginTop: '1rem' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#A1A1AA', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
                  whileHover={{ color: '#EDEDED', y: -2 }}
                  aria-label="Resume"
                >
                  <FileText size={20} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Resume</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/limyubing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#A1A1AA', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
                  whileHover={{ color: '#EDEDED', y: -2 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/limyubing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#A1A1AA', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
                  whileHover={{ color: '#EDEDED', y: -2 }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>GitHub</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-icons { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-icons { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}