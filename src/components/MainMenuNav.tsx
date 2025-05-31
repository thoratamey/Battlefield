import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

type MenuItem = {
  label: string;
  path: string;
  hasSubMenu?: boolean;
};

const mainMenuItems: MenuItem[] = [
  { label: 'CAMPAIGN', path: '/campaign' },
  { label: 'MULTIPLAYER', path: '/multiplayer', hasSubMenu: true },
  { label: 'STORE', path: '/store' },
  { label: 'OPTIONS', path: '/options' },
  { label: 'QUIT', path: '/quit' }
];

const MainMenuNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMenuClick = (path: string) => {
    if (path === '/quit') {
      // In a real game, this would exit the game
      // For this demo, we'll just show an alert
      alert('Exiting game would happen here');
      return;
    }
    navigate(path);
  };

  return (
    <motion.div 
      className="flex flex-col space-y-2 ml-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {mainMenuItems.map((item) => (
        <motion.div
          key={item.label}
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredItem(item.label)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <motion.div
            className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.path)}
            whileHover={{ x: 5 }}
          >
            {item.label}
          </motion.div>
          
          {item.hasSubMenu && (
            <motion.div
              animate={{
                opacity: hoveredItem === item.label || location.pathname === item.path ? 1 : 0,
                x: hoveredItem === item.label || location.pathname === item.path ? 0 : -5
              }}
            >
              <ChevronRight className="h-5 w-5 text-bf-blue-300 ml-2" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MainMenuNav;