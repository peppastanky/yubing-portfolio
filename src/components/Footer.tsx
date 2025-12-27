import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #2A2A35', marginTop: '6rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }} className="footer-content">
          <div style={{ textAlign: 'center' }} className="footer-text">
            <p style={{ color: '#F5F5F7', marginBottom: '0.5rem' }}>Lim Yu Bing</p>
            <div style={{ marginBottom: '0.25rem' }}>
              <a
                href="mailto:yubing.lim.2024@computing.smu.edu.sg"
                style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#6366F1'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                yubing.lim.2024@computing.smu.edu.sg
              </a>
            </div>
            <div>
              <a
                href="mailto:yyubingg@gmail.com"
                style={{ color: '#9CA3AF', transition: 'color 0.2s', fontSize: '0.875rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#6366F1'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                yyubingg@gmail.com
              </a>
              <span style={{ color: '#9CA3AF', margin: '0 0.5rem' }}>•</span>
              <a
                href="tel:+6593700757"
                style={{ color: '#9CA3AF', transition: 'color 0.2s', fontSize: '0.875rem' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#6366F1'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                (+65) 93700757
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href="mailto:yubing.lim.2024@computing.smu.edu.sg"
              style={{ color: '#9CA3AF', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#F5F5F7'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              aria-label="Email"
            >
              <Mail size={20} />
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

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #2A2A35', textAlign: 'center', color: '#9CA3AF' }}>
          <p>© {new Date().getFullYear()} Lim Yu Bing. All rights reserved.</p>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .footer-content { flex-direction: row !important; }
          .footer-text { text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}