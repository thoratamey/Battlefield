import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const backgrounds = [
  'https://images.pexels.com/photos/1072379/pexels-photo-1072379.jpeg',
  'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg',
  'https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg'
];

const Background: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {backgrounds.map((bg, index) => (
        <motion.div
          key={bg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentBg === index ? 1 : 0,
            scale: currentBg === index ? 1 : 1.05
          }}
          transition={{ 
            opacity: { duration: 1.5 },
            scale: { duration: 30 }
          }}
        />
      ))}
      <div className="absolute inset-0 bg-overlay animated-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
    </div>
  );
};

export default Background;