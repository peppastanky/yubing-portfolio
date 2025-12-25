interface SkillChipProps {
  skill: string;
}

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <span 
      style={{ 
        padding: '0.5rem 1rem', 
        backgroundColor: '#161620', 
        border: '1px solid #2A2A35', 
        borderRadius: '9999px', 
        color: '#F5F5F7', 
        transition: 'border-color 0.2s',
        display: 'inline-block'
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6366F1'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#2A2A35'}
    >
      {skill}
    </span>
  );
}
