import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Logo from '../components/Logo';
import ProfileInfo from '../components/ProfileInfo';
import Footer from '../components/Footer';
import MainButton from '../components/MainButton';
import { ArrowLeft, Play, Star, Award } from 'lucide-react';

interface Mission {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  image: string;
}

const missions: Mission[] = [
  {
    id: '1',
    name: 'Baku',
    description: 'Escape from Azerbaijan as Russian special forces hunt you down.',
    completed: true,
    image: 'https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg'
  },
  {
    id: '2',
    name: 'Shanghai',
    description: 'Extract VIP from the city as civil war erupts in China.',
    completed: true,
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg'
  },
  {
    id: '3',
    name: 'South China Sea',
    description: 'Investigate the USS Titan and recover intelligence.',
    completed: false,
    image: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg'
  },
  {
    id: '4',
    name: 'Singapore',
    description: 'Push back against Chinese forces to secure the city.',
    completed: false,
    image: 'https://images.pexels.com/photos/1057840/pexels-photo-1057840.jpeg'
  }
];

const Campaign: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMission, setSelectedMission] = React.useState<Mission>(missions[2]);

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
            
            <h1 className="text-4xl font-bf-heading font-bold text-glow">CAMPAIGN</h1>
          </motion.div>
          
          <div className="flex flex-1 space-x-6">
            <motion.div 
              className="w-1/3 bg-black/50 border border-bf-gray-700 rounded-sm p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bf-heading font-semibold mb-4">MISSIONS</h2>
              
              <div className="space-y-3">
                {missions.map((mission) => (
                  <motion.div 
                    key={mission.id}
                    className={`flex items-center p-2 cursor-pointer transition-colors ${
                      selectedMission.id === mission.id 
                        ? 'bg-bf-blue-700/30 border-l-4 border-bf-blue-500' 
                        : 'hover:bg-bf-gray-800/50'
                    }`}
                    onClick={() => setSelectedMission(mission)}
                    whileHover={{ x: 5 }}
                  >
                    <div className="mr-3">
                      {mission.completed ? (
                        <Star className="h-5 w-5 text-bf-orange-500\" fill="#FF7D1F" />
                      ) : (
                        <Star className="h-5 w-5 text-bf-gray-500" />
                      )}
                    </div>
                    <div>
                      <div className="font-bf-heading text-lg">
                        {mission.name}
                      </div>
                      <div className="text-bf-gray-300 text-sm truncate">
                        {mission.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="w-2/3 bg-black/50 border border-bf-gray-700 rounded-sm overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className="h-1/2 bg-cover bg-center" 
                style={{ backgroundImage: `url(${selectedMission.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-6">
                  <div>
                    <h2 className="text-3xl font-bf-heading font-bold text-glow">
                      {selectedMission.name}
                    </h2>
                    <p className="text-bf-gray-200 max-w-xl">
                      {selectedMission.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-bf-orange-500 mr-2" />
                    <span className="text-lg font-bf-heading">
                      {selectedMission.completed ? 'MISSION COMPLETED' : 'MISSION IN PROGRESS'}
                    </span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="text-bf-gray-300 hover:text-white">DIFFICULTY</button>
                    <button className="text-bf-gray-300 hover:text-white">COLLECTIBLES</button>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <MainButton 
                    label={
                      <div className="flex items-center">
                        <Play className="h-5 w-5 mr-2" />
                        {selectedMission.completed ? 'REPLAY MISSION' : 'PLAY MISSION'}
                      </div>
                    } 
                    onClick={() => alert(`Starting mission: ${selectedMission.name}`)}
                    highlight={!selectedMission.completed}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Campaign;