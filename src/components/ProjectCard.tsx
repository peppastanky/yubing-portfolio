import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  featured?: boolean;
}

export function ProjectCard({ slug, title, summary, tech, featured = false }: ProjectCardProps) {
  return (
    <a
      href={`#project-${slug}`}
      style={{ 
        display: 'block', 
        backgroundColor: '#161620', 
        border: '1px solid #2A2A35', 
        borderRadius: '1rem', 
        padding: '1.5rem', 
        transition: 'border-color 0.3s',
        textDecoration: 'none'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h3 style={{ marginBottom: '0.75rem', color: '#F5F5F7', transition: 'color 0.3s' }} className={`project-title-${slug}`}>
          {title}
        </h3>
        <p style={{ color: '#9CA3AF', marginBottom: '1rem', flexGrow: 1 }}>
          {summary}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {tech.map((item) => (
            <span
              key={item}
              style={{ 
                padding: '0.25rem 0.75rem', 
                backgroundColor: '#0B0B0F', 
                border: '1px solid #2A2A35', 
                borderRadius: '9999px', 
                fontSize: '0.875rem', 
                color: '#9CA3AF' 
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', color: '#6366F1', gap: '0.5rem' }}>
          <span>View case study</span>
          <ArrowRight size={16} className={`arrow-${slug}`} />
        </div>
      </div>
      
      <style>{`
        a:hover .project-title-${slug} { color: #6366F1 !important; }
        a:hover .arrow-${slug} { transform: translateX(0.25rem); transition: transform 0.3s; }
      `}</style>
    </a>
  );
}
