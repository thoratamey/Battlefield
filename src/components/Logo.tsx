import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Shield className="h-10 w-10 text-bf-blue-300" />
      <div className="flex flex-col">
        <span className="font-bf-heading text-3xl font-bold tracking-wider text-white">
          BATTLEFIELD
        </span>
        <span className="font-bf-heading text-lg font-semibold tracking-widest text-bf-orange-500">
          4
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;