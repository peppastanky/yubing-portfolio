import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SkillChip } from '@/components/SkillChip';
import { LeadershipList } from '@/components/LeadershipList';
import { projects } from '@/data/projects';
import { experiences, leadership } from '@/data/experience';
import { skills } from '@/data/skills';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { TextReveal } from '@/components/animations/TextReveal';
import { GlowingCard } from '@/components/animations/GlowingCard';
import { ParallaxSection } from '@/components/animations/ParallaxSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }} className="hero-section">
        <div style={{ maxWidth: '56rem' }}>
          <motion.h1 
            style={{ marginBottom: '1.5rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <TextReveal>Lim Yu Bing</TextReveal>
          </motion.h1>
          <motion.p 
            style={{ fontSize: '1.25rem', color: '#9CA3AF', marginBottom: '1.5rem' }} 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Information Systems undergraduate at SMU • Building user-focused web apps
          </motion.p>
          <motion.p 
            style={{ fontSize: '1.125rem', color: '#9CA3AF', marginBottom: '2rem', maxWidth: '42rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Passionate about creating intuitive web experiences that solve real problems. 
            Currently exploring the intersection of design and development.
          </motion.p>
          
          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MagneticButton>
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
            </MagneticButton>
            <MagneticButton>
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
            </MagneticButton>
          </motion.div>

          <motion.div 
            style={{ display: 'flex', gap: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <FloatingElement delay={0}>
              <MagneticButton strength={0.2}>
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
              </MagneticButton>
            </FloatingElement>
            <FloatingElement delay={0.2}>
              <MagneticButton strength={0.2}>
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
              </MagneticButton>
            </FloatingElement>
            <FloatingElement delay={0.4}>
              <MagneticButton strength={0.2}>
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
              </MagneticButton>
            </FloatingElement>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <ParallaxSection offset={30}>
        <section id="projects" style={{ backgroundColor: '#161620', padding: '4rem 0' }} className="projects-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <h2>Featured Projects</h2>
                <MagneticButton>
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
                </MagneticButton>
              </div>
            </ScrollReveal>
            <div style={{ display: 'grid', gap: '1.5rem' }} className="projects-grid">
              {projects.map((project, index) => (
                <ScrollReveal key={project.slug} delay={index * 0.1} direction="up">
                  <GlowingCard>
                    <ProjectCard
                      slug={project.slug}
                      title={project.title}
                      summary={project.summary}
                      tech={project.tech}
                      featured
                    />
                  </GlowingCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Skills Snapshot */}
      <section id="skills" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }} className="skills-section">
        <ScrollReveal direction="up">
          <h2 style={{ marginBottom: '3rem' }}>Skills Snapshot</h2>
        </ScrollReveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {skills.map((category, categoryIndex) => (
            <ScrollReveal key={category.category} delay={categoryIndex * 0.1} direction="left">
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#9CA3AF' }}>
                  {category.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {category.items.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experience Snapshot */}
      <ParallaxSection offset={40}>
        <section id="experience" style={{ backgroundColor: '#161620', padding: '4rem 0' }} className="experience-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <ScrollReveal direction="up">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <h2>Experience Snapshot</h2>
                <MagneticButton>
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
                </MagneticButton>
              </div>
            </ScrollReveal>
            <div style={{ display: 'grid', gap: '1.5rem' }} className="experience-grid">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="right">
                  <GlowingCard>
                    <ExperienceCard
                      title={exp.title}
                      company={exp.company}
                      period={exp.period}
                      compact
                    />
                  </GlowingCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Leadership & Community */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' }} className="leadership-section">
        <ScrollReveal direction="up">
          <h2 style={{ marginBottom: '3rem' }}>Leadership & Community</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="up">
          <LeadershipList items={leadership} />
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <ParallaxSection offset={50}>
        <section id="contact" style={{ backgroundColor: '#161620', padding: '4rem 0' }} className="cta-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
            <ScrollReveal direction="up">
              <h2 style={{ marginBottom: '1.5rem' }}>Interested in building something together?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <p style={{ fontSize: '1.25rem', color: '#9CA3AF', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="up">
              <MagneticButton>
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
              </MagneticButton>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxSection>
      
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
