import React from 'react';
import { motion } from 'framer-motion';

interface MainButtonProps {
  label: string;
  onClick: () => void;
  highlight?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({ label, onClick, highlight = false }) => {
  return (
    <motion.button
      className={`main-btn ${highlight ? 'glow-effect' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default MainButton;