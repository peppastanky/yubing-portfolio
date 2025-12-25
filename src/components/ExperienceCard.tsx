interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description?: string[];
  compact?: boolean;
}

export function ExperienceCard({ 
  title, 
  company, 
  period, 
  description,
  compact = false 
}: ExperienceCardProps) {
  return (
    <div style={{ 
      backgroundColor: '#161620', 
      border: '1px solid #2A2A35', 
      borderRadius: '1rem', 
      padding: '1.5rem', 
      transition: 'border-color 0.3s' 
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }} className="exp-header">
        <div>
          <h4 style={{ color: '#F5F5F7' }}>{title}</h4>
          <p style={{ color: '#6366F1' }}>{company}</p>
        </div>
        <span style={{ color: '#9CA3AF', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
          {period}
        </span>
      </div>
      {!compact && description && (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9CA3AF', listStyle: 'none', padding: 0 }}>
          {description.map((item, index) => (
            <li key={index} style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ color: '#6366F1', marginTop: '0.25rem' }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      
      <style>{`
        @media (min-width: 640px) {
          .exp-header { flex-direction: row !important; align-items: flex-start !important; justify-content: space-between !important; }
        }
      `}</style>
    </div>
  );
}
