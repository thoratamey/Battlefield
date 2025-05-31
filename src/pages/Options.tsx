import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Logo from '../components/Logo';
import ProfileInfo from '../components/ProfileInfo';
import Footer from '../components/Footer';
import MainButton from '../components/MainButton';
import { ArrowLeft, Monitor, Volume2, Gamepad, Eye } from 'lucide-react';

type OptionCategory = 'video' | 'audio' | 'controls' | 'gameplay';

const Options: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<OptionCategory>('video');
  
  const renderOptions = () => {
    switch (activeCategory) {
      case 'video':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Resolution</label>
              <select className="bg-bf-gray-800 text-white border border-bf-gray-600 p-2 rounded-sm">
                <option>1920x1080</option>
                <option>1440x900</option>
                <option>1366x768</option>
                <option>1280x720</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Graphics Quality</label>
              <select className="bg-bf-gray-800 text-white border border-bf-gray-600 p-2 rounded-sm">
                <option>Ultra</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Field of View</label>
              <div className="flex items-center w-1/2">
                <input 
                  type="range" 
                  min="60" 
                  max="120" 
                  defaultValue="90"
                  className="w-full" 
                />
                <span className="ml-3 text-bf-gray-200 w-8">90°</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">V-Sync</label>
              <div className="flex items-center">
                <input type="checkbox" id="vsync" className="mr-2" />
                <label htmlFor="vsync" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Motion Blur</label>
              <div className="flex items-center">
                <input type="checkbox" id="motion-blur" className="mr-2" />
                <label htmlFor="motion-blur" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
          </div>
        );
        
      case 'audio':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Master Volume</label>
              <div className="flex items-center w-1/2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="80"
                  className="w-full" 
                />
                <span className="ml-3 text-bf-gray-200 w-8">80%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Music Volume</label>
              <div className="flex items-center w-1/2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="60"
                  className="w-full" 
                />
                <span className="ml-3 text-bf-gray-200 w-8">60%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">SFX Volume</label>
              <div className="flex items-center w-1/2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="90"
                  className="w-full" 
                />
                <span className="ml-3 text-bf-gray-200 w-8">90%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Voice Chat</label>
              <div className="flex items-center">
                <input type="checkbox" id="voice-chat" className="mr-2" checked />
                <label htmlFor="voice-chat" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Audio Output</label>
              <select className="bg-bf-gray-800 text-white border border-bf-gray-600 p-2 rounded-sm">
                <option>Speakers</option>
                <option>Headphones</option>
                <option>Digital Output</option>
              </select>
            </div>
          </div>
        );
        
      case 'controls':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Input Device</label>
              <select className="bg-bf-gray-800 text-white border border-bf-gray-600 p-2 rounded-sm">
                <option>Keyboard & Mouse</option>
                <option>Controller</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Mouse Sensitivity</label>
              <div className="flex items-center w-1/2">
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  defaultValue="5"
                  className="w-full" 
                />
                <span className="ml-3 text-bf-gray-200 w-8">5</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Invert Y-Axis</label>
              <div className="flex items-center">
                <input type="checkbox" id="invert-y" className="mr-2" />
                <label htmlFor="invert-y" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
            
            <div className="mt-4 mb-2">
              <h3 className="font-bf-heading text-lg text-bf-blue-200">Key Bindings</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-bf-gray-300">Move Forward</span>
                <span className="bg-bf-gray-700 px-3 py-1 rounded-sm text-white">W</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-bf-gray-300">Move Backward</span>
                <span className="bg-bf-gray-700 px-3 py-1 rounded-sm text-white">S</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-bf-gray-300">Strafe Left</span>
                <span className="bg-bf-gray-700 px-3 py-1 rounded-sm text-white">A</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-bf-gray-300">Strafe Right</span>
                <span className="bg-bf-gray-700 px-3 py-1 rounded-sm text-white">D</span>
              </div>
            </div>
          </div>
        );
        
      case 'gameplay':
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Difficulty</label>
              <select className="bg-bf-gray-800 text-white border border-bf-gray-600 p-2 rounded-sm">
                <option>Easy</option>
                <option>Normal</option>
                <option>Hard</option>
                <option>Veteran</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Subtitles</label>
              <div className="flex items-center">
                <input type="checkbox" id="subtitles" className="mr-2" checked />
                <label htmlFor="subtitles" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">HUD Opacity</label>
              <div className="flex items-center w-1/2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="85"
                  className="w-full" 
                />
                <span className="ml-3 text-bf-gray-200 w-8">85%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Auto-Aim (Controller)</label>
              <div className="flex items-center">
                <input type="checkbox" id="auto-aim" className="mr-2" />
                <label htmlFor="auto-aim" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <label className="text-bf-gray-200">Weapon DOF Effect</label>
              <div className="flex items-center">
                <input type="checkbox" id="weapon-dof" className="mr-2" checked />
                <label htmlFor="weapon-dof" className="text-bf-gray-200">Enabled</label>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

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
        <div className="flex-1 flex flex-col px-8 py-6">
          <motion.div 
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="flex items-center text-bf-gray-300 hover:text-white mr-4"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>BACK</span>
            </button>
            
            <h1 className="text-4xl font-bf-heading font-bold text-glow">OPTIONS</h1>
          </motion.div>
          
          <div className="flex flex-1 space-x-6">
            <motion.div 
              className="w-1/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-2">
                <button
                  className={`w-full flex items-center p-3 transition-colors ${
                    activeCategory === 'video' 
                      ? 'bg-bf-blue-700/60 border-l-4 border-bf-blue-500' 
                      : 'bg-black/30 hover:bg-bf-gray-800/50'
                  }`}
                  onClick={() => setActiveCategory('video')}
                >
                  <Monitor className="h-5 w-5 mr-3 text-bf-blue-200" />
                  <span className="font-bf-heading text-lg">VIDEO</span>
                </button>
                
                <button
                  className={`w-full flex items-center p-3 transition-colors ${
                    activeCategory === 'audio' 
                      ? 'bg-bf-blue-700/60 border-l-4 border-bf-blue-500' 
                      : 'bg-black/30 hover:bg-bf-gray-800/50'
                  }`}
                  onClick={() => setActiveCategory('audio')}
                >
                  <Volume2 className="h-5 w-5 mr-3 text-bf-blue-200" />
                  <span className="font-bf-heading text-lg">AUDIO</span>
                </button>
                
                <button
                  className={`w-full flex items-center p-3 transition-colors ${
                    activeCategory === 'controls' 
                      ? 'bg-bf-blue-700/60 border-l-4 border-bf-blue-500' 
                      : 'bg-black/30 hover:bg-bf-gray-800/50'
                  }`}
                  onClick={() => setActiveCategory('controls')}
                >
                  <Gamepad className="h-5 w-5 mr-3 text-bf-blue-200" />
                  <span className="font-bf-heading text-lg">CONTROLS</span>
                </button>
                
                <button
                  className={`w-full flex items-center p-3 transition-colors ${
                    activeCategory === 'gameplay' 
                      ? 'bg-bf-blue-700/60 border-l-4 border-bf-blue-500' 
                      : 'bg-black/30 hover:bg-bf-gray-800/50'
                  }`}
                  onClick={() => setActiveCategory('gameplay')}
                >
                  <Eye className="h-5 w-5 mr-3 text-bf-blue-200" />
                  <span className="font-bf-heading text-lg">GAMEPLAY</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-3/4 bg-black/50 border border-bf-gray-700 rounded-sm p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bf-heading font-semibold mb-6">
                {activeCategory.toUpperCase()} SETTINGS
              </h2>
              
              {renderOptions()}
              
              <div className="flex justify-end mt-8 space-x-4">
                <MainButton label="RESET TO DEFAULT" onClick={() => alert('Settings reset to default')} />
                <MainButton label="APPLY CHANGES" onClick={() => alert('Settings applied')} highlight={true} />
              </div>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Options;