import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Logo from '../components/Logo';
import ProfileInfo from '../components/ProfileInfo';
import MainMenuNav from '../components/MainMenuNav';
import Footer from '../components/Footer';
import MainButton from '../components/MainButton';
import { Play } from 'lucide-react';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Background />
      
      <div className="relative z-10 h-full w-full flex flex-col">
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-8 bg-gradient-to-b from-black/80 to-transparent">
          <Logo />
          <ProfileInfo />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="w-1/2 pl-8">
            <motion.h1 
              className="text-5xl font-bf-heading font-bold mb-6 text-glow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MAIN MENU
            </motion.h1>
            
            <MainMenuNav />
          </div>
          
          <motion.div 
            className="w-1/2 flex flex-col items-center justify-center space-y-8 pr-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-3xl font-bf-heading font-bold mb-2">QUICK MATCH</h2>
              <p className="text-bf-gray-300 text-center max-w-md">
                Jump into the action and join a game with other players right now.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <MainButton 
                label="SERVER BROWSER" 
                onClick={() => navigate('/multiplayer')}
              />
            </div>
            
            <div className="flex items-center text-bf-blue-200 cursor-pointer hover:text-bf-blue-100">
              <Play className="h-5 w-5 mr-2" />
              <span className="font-bf-heading text-lg">RESUME CAMPAIGN</span>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default MainMenu;
