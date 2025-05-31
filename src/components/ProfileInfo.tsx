import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Award } from 'lucide-react';

interface ProfileInfoProps {
  playerName?: string;
  level?: number;
  rank?: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  playerName = 'SoldierOne',
  level = 75,
  rank = 'Colonel'
}) => {
  return (
    <motion.div 
      className="flex items-center space-x-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="w-12 h-12 bg-bf-gray-700 rounded-full flex items-center justify-center border-2 border-bf-blue-500 border-glow">
        <User className="h-6 w-6 text-bf-blue-200" />
      </div>
      
      <div className="flex flex-col">
        <span className="font-bf-heading text-xl font-semibold text-white">
          {playerName}
        </span>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Shield className="h-4 w-4 text-bf-orange-500 mr-1" />
            <span className="text-bf-gray-300 text-sm">Lvl {level}</span>
          </div>
          
          <div className="flex items-center">
            <Award className="h-4 w-4 text-bf-blue-300 mr-1" />
            <span className="text-bf-gray-300 text-sm">{rank}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileInfo;