import { Leadership } from '@/data/types';

interface LeadershipListProps {
  items: Leadership[];
}

export function LeadershipList({ items }: LeadershipListProps) {
  return (
    <div style={{ display: 'grid', gap: '1rem' }} className="leadership-grid">
      {items.map((item, index) => (
        <div 
          key={index}
          style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '0.75rem', 
            padding: '1rem', 
            backgroundColor: '#161620', 
            border: '1px solid #2A2A35', 
            borderRadius: '0.75rem', 
            transition: 'border-color 0.3s' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
        >
          <div style={{ 
            width: '0.5rem', 
            height: '0.5rem', 
            borderRadius: '9999px', 
            backgroundColor: '#6366F1', 
            marginTop: '0.5rem', 
            flexShrink: 0 
          }} />
          <div style={{ flexGrow: 1, minWidth: 0 }}>
            <p style={{ color: '#F5F5F7' }}>{item.title}</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{item.organization}</p>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{item.period}</p>
          </div>
        </div>
      ))}
      
      <style>{`
        @media (min-width: 768px) {
          .leadership-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
