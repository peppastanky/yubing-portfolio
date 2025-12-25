import { useState } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      backgroundColor: 'rgba(11, 11, 15, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #2A2A35'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          {/* Logo */}
          <a href="#" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#F5F5F7', transition: 'color 0.2s' }}
             onMouseEnter={(e) => e.currentTarget.style.color = '#6366F1'}
             onMouseLeave={(e) => e.currentTarget.style.color = '#F5F5F7'}>
            LYB
          </a>

          {/* Desktop Navigation */}
          <div style={{ display: 'none' }} className="desktop-nav">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ color: '#9CA3AF', transition: 'color 0.2s', marginRight: '2rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                {item.name}
              </a>
            ))}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid #2A2A35' }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                aria-label="Resume"
              >
                <FileText size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            style={{ color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer' }}
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{ borderTop: '1px solid #2A2A35' }} className="mobile-menu">
          <div style={{ padding: '1rem 1.5rem' }}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ display: 'block', color: '#9CA3AF', marginBottom: '0.75rem', transition: 'color 0.2s' }}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                {item.name}
              </a>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #2A2A35', marginTop: '0.75rem' }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                aria-label="Resume"
              >
                <FileText size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}