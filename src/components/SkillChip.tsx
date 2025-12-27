import { motion } from 'framer-motion';

interface SkillChipProps {
  skill: string;
}

export function SkillChip({ skill }: SkillChipProps) {
  return (
    <motion.span 
      style={{ 
        padding: '0.5rem 1rem', 
        backgroundColor: '#15151A', 
        border: '1px solid #27272F', 
        borderRadius: '9999px', 
        color: '#EDEDED', 
        transition: 'border-color 0.2s',
        display: 'inline-block',
        cursor: 'default'
      }}
      whileHover={{ 
        scale: 1.05,
        borderColor: '#4F7DFF',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {skill}
    </motion.span>
  );
}
