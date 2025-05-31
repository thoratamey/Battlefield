import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Logo from '../components/Logo';
import ProfileInfo from '../components/ProfileInfo';
import Footer from '../components/Footer';
import MainButton from '../components/MainButton';
import { ArrowLeft, Package, Tag, Download } from 'lucide-react';

interface StoreItem {
  id: string;
  name: string;
  type: 'expansion' | 'bundle' | 'booster';
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

const storeItems: StoreItem[] = [
  {
    id: '1',
    name: 'China Rising',
    type: 'expansion',
    description: 'Fight for dominance across the vast Chinese mainland in this expansion pack.',
    price: '$14.99',
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg',
    featured: true
  },
  {
    id: '2',
    name: 'Naval Strike',
    type: 'expansion',
    description: 'Experience dynamic ocean combat as the Chinese armada takes on the U.S. Pacific Fleet.',
    price: '$14.99',
    image: 'https://images.pexels.com/photos/951408/pexels-photo-951408.jpeg'
  },
  {
    id: '3',
    name: 'Premium Bundle',
    type: 'bundle',
    description: 'Get all five expansion packs at a discounted price with Premium status.',
    price: '$49.99',
    image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg',
    featured: true
  },
  {
    id: '4',
    name: 'Soldier Shortcut Kit',
    type: 'booster',
    description: 'Instantly unlock all class weapons and attachments.',
    price: '$9.99',
    image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg'
  },
  {
    id: '5',
    name: 'Vehicle Shortcut Kit',
    type: 'booster',
    description: 'Unlock all vehicle upgrades without the grind.',
    price: '$9.99',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg'
  }
];

const Store: React.FC = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = React.useState<StoreItem | null>(
    storeItems.find(item => item.featured) || null
  );

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
            
            <h1 className="text-4xl font-bf-heading font-bold text-glow">STORE</h1>
          </motion.div>
          
          <div className="flex flex-1 space-x-6">
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-black/50 border border-bf-gray-700 rounded-sm p-4 mb-4">
                <h2 className="text-2xl font-bf-heading font-semibold mb-2">CATEGORIES</h2>
                <div className="space-y-2">
                  <button className="w-full flex items-center p-2 bg-bf-blue-700/40 hover:bg-bf-blue-700/60 transition-colors">
                    <Package className="h-5 w-5 mr-2 text-bf-blue-200" />
                    <span>All Items</span>
                  </button>
                  <button className="w-full flex items-center p-2 bg-black/30 hover:bg-bf-gray-800/50 transition-colors">
                    <Package className="h-5 w-5 mr-2 text-bf-blue-200" />
                    <span>Expansions</span>
                  </button>
                  <button className="w-full flex items-center p-2 bg-black/30 hover:bg-bf-gray-800/50 transition-colors">
                    <Package className="h-5 w-5 mr-2 text-bf-blue-200" />
                    <span>Bundles</span>
                  </button>
                  <button className="w-full flex items-center p-2 bg-black/30 hover:bg-bf-gray-800/50 transition-colors">
                    <Package className="h-5 w-5 mr-2 text-bf-blue-200" />
                    <span>Boosters</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-black/50 border border-bf-gray-700 rounded-sm p-4 h-[calc(100%-7rem)]">
                <h2 className="text-2xl font-bf-heading font-semibold mb-4">STORE ITEMS</h2>
                <div className="space-y-3 overflow-y-auto h-[calc(100%-3rem)] pr-2">
                  {storeItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      className={`flex items-center p-3 cursor-pointer transition-colors ${
                        selectedItem?.id === item.id 
                          ? 'bg-bf-blue-700/30 border-l-4 border-bf-blue-500' 
                          : 'bg-bf-gray-800/50 hover:bg-bf-gray-700/50'
                      }`}
                      onClick={() => setSelectedItem(item)}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden mr-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bf-heading text-lg text-white">
                              {item.name}
                            </div>
                            <div className="text-bf-gray-300 text-sm">
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </div>
                          </div>
                          <div className="text-bf-orange-500 font-semibold">
                            {item.price}
                          </div>
                        </div>
                        
                        {item.featured && (
                          <div className="mt-1 flex items-center">
                            <Tag className="h-4 w-4 text-bf-blue-300 mr-1" />
                            <span className="text-xs text-bf-blue-300">FEATURED</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-2/3 bg-black/50 border border-bf-gray-700 rounded-sm overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {selectedItem ? (
                <>
                  <div 
                    className="h-1/2 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${selectedItem.image})` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-6">
                      <div className="flex justify-between items-end w-full">
                        <div>
                          <div className="text-bf-gray-300 mb-1">
                            {selectedItem.type.toUpperCase()}
                          </div>
                          <h2 className="text-3xl font-bf-heading font-bold text-glow">
                            {selectedItem.name}
                          </h2>
                        </div>
                        
                        <div className="text-2xl font-bf-heading text-bf-orange-500">
                          {selectedItem.price}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bf-heading mb-4 text-bf-blue-100">
                      DESCRIPTION
                    </h3>
                    
                    <p className="text-bf-gray-200 mb-8">
                      {selectedItem.description}
                    </p>
                    
                    <div className="flex justify-between">
                      <MainButton label="ADD TO CART" onClick={() => alert(`${selectedItem.name} added to cart`)} />
                      
                      <MainButton 
                        label={
                          <div className="flex items-center">
                            <Download className="h-5 w-5 mr-2" />
                            BUY NOW
                          </div>
                        } 
                        onClick={() => alert(`Purchasing ${selectedItem.name}...`)}
                        highlight={true}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <p className="text-bf-gray-300">Select an item to view details</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Store;