import React from 'react';
import { motion } from 'framer-motion';
import { Info, Mail, Settings } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-14 flex items-center justify-between px-8 bg-gradient-to-r from-black/80 via-transparent to-black/80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-bf-gray-300 hover:text-white cursor-pointer">
          <Info className="h-4 w-4 mr-2" />
          <span className="text-sm font-bf">Game Info</span>
        </div>
        
        <div className="flex items-center text-bf-gray-300 hover:text-white cursor-pointer">
          <Mail className="h-4 w-4 mr-2" />
          <span className="text-sm font-bf">Battlelog</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-xs text-bf-gray-400">© 2023 EA/DICE (Fan Recreation)</div>
        
        <div className="flex items-center text-bf-gray-300 hover:text-white cursor-pointer">
          <Settings className="h-4 w-4 mr-2" />
          <span className="text-sm font-bf">Settings</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;