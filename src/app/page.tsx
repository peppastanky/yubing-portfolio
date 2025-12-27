import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SkillChip } from '@/components/SkillChip';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { skills } from '@/data/skills';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { FloatingElement } from '@/components/animations/FloatingElement';
import { TextReveal } from '@/components/animations/TextReveal';
import { GlowingCard } from '@/components/animations/GlowingCard';
import { ParallaxSection } from '@/components/animations/ParallaxSection';
import { motion } from 'framer-motion';
import { HeroName } from '@/components/hero/HeroName';

export default function HomePage() {

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }} className="hero-section">
        {/* Animated Blue Halo Background */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, rgba(79, 125, 255, 0.4) 0%, rgba(79, 125, 255, 0.2) 40%, transparent 70%)',
            filter: 'blur(100px)',
            borderRadius: '50%',
            zIndex: 0
          }}
          animate={{
            x: ['0%', '80%', '0%'],
            y: ['0%', '60%', '0%'],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '60%',
            left: '80%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(79, 125, 255, 0.35) 0%, rgba(79, 125, 255, 0.15) 40%, transparent 70%)',
            filter: 'blur(90px)',
            borderRadius: '50%',
            zIndex: 0
          }}
          animate={{
            x: ['0%', '-100%', '0%'],
            y: ['0%', '-70%', '0%'],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <div style={{ 
          maxWidth: '1400px', 
          width: '100%',
          padding: '2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.p 
              style={{ 
                fontSize: 'clamp(1rem, 3vw, 2rem)',
                color: '#A1A1AA',
                marginBottom: '1rem',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I am
            </motion.p>
            <div style={{ marginBottom: '2rem' }}>
              <HeroName text="YU BING" />
            </div>
            <motion.p 
              style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#A1A1AA',
                marginBottom: '1.5rem',
                fontWeight: '300',
                maxWidth: '900px',
                margin: '0 auto 3rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Information Systems Student • Web Developer • Designer
            </motion.p>
          </motion.div>
          
          <motion.div 
            style={{ 
              display: 'flex', 
              gap: '1.5rem',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MagneticButton strength={0.15}>
              <a
                href="#projects"
                style={{ 
                  padding: '1rem 2.5rem',
                  fontSize: '0.95rem',
                  backgroundColor: 'rgba(79, 125, 255, 0.25)', 
                  color: '#EDEDED', 
                  borderRadius: '0.5rem', 
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(79, 125, 255, 0.4)',
                  boxShadow: '0 4px 15px rgba(79, 125, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.35)';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 125, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.4)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 125, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                }}
              >
                VIEW WORK
              </a>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <a
                href="#contact"
                style={{ 
                  padding: '1rem 2.5rem',
                  fontSize: '0.95rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                  color: '#EDEDED',
                  border: '1px solid rgba(79, 125, 255, 0.3)', 
                  borderRadius: '0.5rem', 
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 125, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
                }}
              >
                GET IN TOUCH
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div 
            style={{ 
              display: 'flex', 
              gap: '1.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MagneticButton strength={0.2}>
              <a
                href="mailto:yubing.lim.2024@computing.smu.edu.sg"
                style={{ 
                  padding: '1rem', 
                  backgroundColor: 'rgba(79, 125, 255, 0.1)', 
                  border: '1px solid rgba(79, 125, 255, 0.3)', 
                  borderRadius: '50%', 
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  color: '#4F7DFF',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(79, 125, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.2)';
                  e.currentTarget.style.color = '#EDEDED';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 125, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.1)';
                  e.currentTarget.style.color = '#4F7DFF';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 125, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
                }}
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://www.linkedin.com/in/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: '1rem', 
                  backgroundColor: 'rgba(79, 125, 255, 0.1)', 
                  border: '1px solid rgba(79, 125, 255, 0.3)', 
                  borderRadius: '50%', 
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  color: '#4F7DFF',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(79, 125, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.2)';
                  e.currentTarget.style.color = '#EDEDED';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 125, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.1)';
                  e.currentTarget.style.color = '#4F7DFF';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 125, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://github.com/limyubing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: '1rem', 
                  backgroundColor: 'rgba(79, 125, 255, 0.1)', 
                  border: '1px solid rgba(79, 125, 255, 0.3)', 
                  borderRadius: '50%', 
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  color: '#4F7DFF',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(79, 125, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.2)';
                  e.currentTarget.style.color = '#EDEDED';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(79, 125, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(79, 125, 255, 0.1)';
                  e.currentTarget.style.color = '#4F7DFF';
                  e.currentTarget.style.borderColor = 'rgba(79, 125, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 125, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
                }}
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.a
            href="#projects"
            style={{
              position: 'absolute',
              bottom: '0rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#A1A1AA',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ color: '#4F7DFF' }}
          >
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={10} style={{ transform: 'rotate(90deg)' }} />
            </motion.div>
          </motion.a> */}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Header Row: Title + Hook */}
          <ScrollReveal direction="up">
            <div className="about-header">
              <h2>About Me</h2>
              <p className="about-hook">
                I enjoy building things that work — and making them better through iteration.
              </p>
            </div>
          </ScrollReveal>

          {/* Content Row: Photo + Defaults Card */}
          <div className="about-content">
            {/* Left Column: Profile Photo */}
            <div className="about-photo-column">
              <div className="about-photo-wrapper">
                <div className="about-photo-glow" />
                <img 
                  src="/profile.jpg" 
                  alt="Yu Bing Lim" 
                  className="about-photo"
                />
              </div>
              <div /* style={{marginLeft: '1.3rem'}} */>
                <p className="about-caption">SMU IS • Web Dev • Design</p>
              </div>
            </div>

            {/* Right Column: Defaults Card + Proof */}
            <ScrollReveal delay={0.1} direction="left">
              <div className="about-text-column">
                <div className="defaults-card">
                  <h3 className="defaults-title">My defaults</h3>
                  <div className="defaults-list">
                    <div className="defaults-item">
                      <span className="defaults-label">Default mode:</span>
                      <span className="defaults-value">build first, refine later</span>
                    </div>
                    <div className="defaults-item">
                      <span className="defaults-label">I care about:</span>
                      <span className="defaults-value">clean UX and thoughtful details</span>
                    </div>
                    <div className="defaults-item">
                      <span className="defaults-label">I enjoy:</span>
                      <span className="defaults-value">problem-solving and making things work</span>
                    </div>
                    <div className="defaults-item">
                      <span className="defaults-label">Currently learning:</span>
                      <span className="defaults-value">React, TypeScript, and modern frontend patterns</span>
                    </div>
                    <div className="defaults-item defaults-item-last">
                      <span className="defaults-label">Strength:</span>
                      <span className="defaults-value">explaining ideas clearly and collaborating with others</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <ParallaxSection offset={30}>
        <section id="projects" style={{ backgroundColor: '#15151A', padding: '0 0 4rem 0' }} className="projects-section">
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
                      color: '#4F7DFF', 
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
      <section id="skills" className="skills-section">
        <ScrollReveal direction="up">
          <h2 style={{ marginBottom: '3rem' }}>Skills Snapshot</h2>
        </ScrollReveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {skills.map((category, categoryIndex) => (
            <ScrollReveal key={category.category} delay={categoryIndex * 0.1} direction="left">
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#71717A' }}>
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
        <section id="experience" style={{ backgroundColor: '#15151A', padding: '4rem 0' }} className="experience-section">
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
                      color: '#4F7DFF', 
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

      {/* CTA Section */}
      <ParallaxSection offset={50}>
        <section id="contact" style={{  padding: '4rem 0' }} className="cta-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center'}}>
            <ScrollReveal direction="up">
              <h2 style={{ marginBottom: '1.5rem' }}>Interested in building something together?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <p style={{ fontSize: '1.25rem', color: '#A1A1AA', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="up">
              <MagneticButton>
                <a
                  href="mailto:yubing.lim.2024@computing.smu.edu.sg"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    padding: '1rem 2rem', 
                    backgroundColor: '#4F7DFF', 
                    color: '#EDEDED', 
                    borderRadius: '0.5rem', 
                    transition: 'background-color 0.2s' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3D6AE6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4F7DFF'}
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
        /* About Section */
        .about-section {
          background-color: #0B0B0F;
          padding: 6rem 0;
          border-top: 1px solid #2A2A35;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .about-header {
          margin-bottom: 3rem;
        }

        .about-header h2 {
          margin-bottom: 1rem;
        }

        .about-hook {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #A1A1AA;
          font-weight: 400;
          font-style: italic;
         
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-photo-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .about-photo-wrapper {
          position: relative;
          width: fit-content;
        }

        .about-photo-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79, 125, 255, 0.12) 0%, transparent 70%);
          filter: blur(20px);
          z-index: 0;
        }

        .about-photo {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(79, 125, 255, 0.2);
          position: relative;
          z-index: 1;
        }

        .about-caption {
          font-size: 0.875rem;
          color: #A1A1AA;
          text-align: center;
          width: 200px;
        }

        .about-text-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .defaults-card {
          background: linear-gradient(135deg, rgba(79, 125, 255, 0.03) 0%, rgba(79, 125, 255, 0.01) 100%);
          border: 1px solid rgba(79, 125, 255, 0.15);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(8px);
        }

        .defaults-title {
          font-size: 1.125rem;
          color: #EDEDED;
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .defaults-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .defaults-item {
          display: flex;
          gap: 1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(79, 125, 255, 0.08);
        }

        .defaults-item-last {
          border-bottom: none;
        }

        .defaults-label {
          color: #4F7DFF;
          font-weight: 600;
          min-width: 140px;
          font-size: 0.9375rem;
          flex-shrink: 0;
        }

        .defaults-value {
          color: #EDEDED;
          font-size: 0.9375rem;
          line-height: 1.5;
        }

        .about-proof {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #A1A1AA;
          font-style: italic;
        }

        .skills-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-section { padding: 8rem 2rem !important; }
          .hero-subtitle { font-size: 1.5rem !important; }
          .projects-section, .experience-section, .cta-section { padding: 6rem 0 !important; }
          .projects-grid, .experience-grid { grid-template-columns: repeat(2, 1fr) !important; }
          
          /* About Section Desktop Layout */
          .about-content {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 3rem;
            align-items: center;
          }

          .about-photo-column {
            align-items: flex-start;
            justify-self: center;
          }

          .about-photo {
            width: 240px;
            height: 240px;
          }

          .about-caption {
            width: 240px;
          }
        }
      `}</style>
    </div>
  );
}