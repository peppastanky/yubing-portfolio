import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SkillChip } from '@/components/SkillChip';
import { LeadershipList } from '@/components/LeadershipList';
import { projects } from '@/data/projects';
import { experiences, leadership } from '@/data/experience';
import { skills } from '@/data/skills';

export default function HomePage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }} className="hero-section">
        <div style={{ maxWidth: '56rem' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>
            Lim Yu Bing
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#9CA3AF', marginBottom: '1.5rem' }} className="hero-subtitle">
            Information Systems undergraduate at SMU • Building user-focused web apps
          </p>
          <p style={{ fontSize: '1.125rem', color: '#9CA3AF', marginBottom: '2rem', maxWidth: '42rem' }}>
            Passionate about creating intuitive web experiences that solve real problems. 
            Currently exploring the intersection of design and development.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <a
              href="#projects"
              style={{ 
                padding: '0.75rem 1.5rem', 
                backgroundColor: '#6366F1', 
                color: 'white', 
                borderRadius: '0.5rem', 
                transition: 'background-color 0.2s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{ 
                padding: '0.75rem 1.5rem', 
                backgroundColor: '#161620', 
                color: '#F5F5F7',
                border: '1px solid #2A2A35', 
                borderRadius: '0.5rem', 
                transition: 'border-color 0.2s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
            >
              Contact Me
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="mailto:yyubingg@gmail.com"
              style={{ 
                padding: '0.75rem', 
                backgroundColor: '#161620', 
                border: '1px solid #2A2A35', 
                borderRadius: '0.5rem', 
                transition: 'border-color 0.2s',
                display: 'inline-flex',
                color: '#F5F5F7'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/limyubing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                padding: '0.75rem', 
                backgroundColor: '#161620', 
                border: '1px solid #2A2A35', 
                borderRadius: '0.5rem', 
                transition: 'border-color 0.2s',
                display: 'inline-flex',
                color: '#F5F5F7'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/limyubing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                padding: '0.75rem', 
                backgroundColor: '#161620', 
                border: '1px solid #2A2A35', 
                borderRadius: '0.5rem', 
                transition: 'border-color 0.2s',
                display: 'inline-flex',
                color: '#F5F5F7'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" style={{ backgroundColor: '#161620', padding: '4rem 0' }} className="projects-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <h2>Featured Projects</h2>
            <a
              href="#projects"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: '#6366F1', 
                transition: 'gap 0.3s' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
              onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
            >
              <span>View all</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }} className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                summary={project.summary}
                tech={project.tech}
                featured
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section id="skills" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }} className="skills-section">
        <h2 style={{ marginBottom: '3rem' }}>Skills Snapshot</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {skills.map((category) => (
            <div key={category.category}>
              <h3 style={{ marginBottom: '1rem', color: '#9CA3AF' }}>
                {category.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.items.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Snapshot */}
      <section id="experience" style={{ backgroundColor: '#161620', padding: '4rem 0' }} className="experience-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <h2>Experience Snapshot</h2>
            <a
              href="#experience"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: '#6366F1', 
                transition: 'gap 0.3s' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
              onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
            >
              <span>View all</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div style={{ display: 'grid', gap: '1.5rem' }} className="experience-grid">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Community */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }} className="leadership-section">
        <h2 style={{ marginBottom: '3rem' }}>Leadership & Community</h2>
        <LeadershipList items={leadership} />
      </section>

      {/* CTA Section */}
      <section id="contact" style={{ backgroundColor: '#161620', padding: '4rem 0' }} className="cta-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Interested in building something together?</h2>
          <p style={{ fontSize: '1.25rem', color: '#9CA3AF', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:yyubingg@gmail.com"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '1rem 2rem', 
              backgroundColor: '#6366F1', 
              color: 'white', 
              borderRadius: '0.5rem', 
              transition: 'background-color 0.2s' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4F46E5'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
          >
            <span>Get in touch</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
      
      <style>{`
        @media (min-width: 768px) {
          .hero-section { padding: 8rem 2rem !important; }
          .hero-subtitle { font-size: 1.5rem !important; }
          .projects-section, .experience-section, .skills-section, .leadership-section, .cta-section { padding: 6rem 0 !important; }
          .projects-grid, .experience-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
