import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';

// Interface definitions (same as before)
interface ServerRule { label: string; value: string; highlight?: boolean; }
interface ServerSetting { label: string; value: string; }
interface ServerDetails {
  id: string; serverImageUrl: string; nameDisplay: string; gameInfo: string;
  serverProtectionInfo: string; visitInfo: string; discordLink: string;
  players: string; ping: string; tickrate: string; favorites: string;
  settings: ServerSetting[]; advancedSettings: ServerSetting[]; rules: ServerRule[];
  mapRotationImages: string[];
}

const ServerInfoDisplay: React.FC = () => {
  const [serverData, setServerData] = useState<ServerDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://server-wykx.onrender.com/api/servers');
        if (response.data && response.data.length > 0) {
          setServerData(response.data[0]);
        } else {
          setError('No server data found from API.');
        }
      } catch (err) {
        console.error('Error fetching server data:', err);
        setError('Failed to load server data. Check backend connection.');
      } finally {
        setLoading(false);
      }
    };
    fetchServerData();
  }, []);

  if (loading) return <div className="p-10 text-center text-xl text-gray-300 bg-black/50 rounded-lg">Loading Server Info...</div>;
  if (error || !serverData) return <div className="p-10 text-center text-xl text-red-400 bg-black/50 rounded-lg">{error || 'Server data unavailable.'}</div>;

  // Color Palette based on image:
  const textColorPrimary = 'text-[#EAEBF0]'; // Main bright text (White-ish)
  const textColorSecondary = 'text-[#A0A7B0]'; // Lighter gray for less emphasis
  const textColorMuted = 'text-[#7F8C9B]'; // Muted gray for breadcrumbs, small labels
  const accentColorYellow = 'text-[#F0B90B]'; // Yellow for highlights (Tickets, Star)
  const panelBgColor = 'bg-[#181C20]/[0.85]'; // Panel background with opacity (almost opaque)

  return (
    <div
      className={`font-sans ${panelBgColor} backdrop-blur-md p-5 sm:p-6 md:p-7 max-w-4xl w-full rounded shadow-2xl border border-black/20`}
      // Using max-w-4xl for a slightly more compact feel like the image.
      // Added border for subtle definition.
    >
      {/* Breadcrumbs */}
      <div className={`text-[10px] sm:text-xs ${textColorMuted} mb-4 md:mb-5 uppercase tracking-wider`}>
        MULTIPLAYER / SERVER BROWSER / <span className={textColorSecondary}>SERVER INFO</span>
      </div>

      {/* Server Header Section */}
      <div className="flex items-start mb-5 md:mb-6">
        {/* <img
          src={serverData.serverImageUrl} alt="Server Icon"
          className="w-[50px] h-[75px] sm:w-[60px] sm:h-[90px] object-cover mr-3 sm:mr-4 border border-black/30 rounded-sm"
        /> */}
        <div className="flex-1">
          <h1 className={`text-[22px] sm:text-2xl md:text-[28px] font-bold ${textColorPrimary} leading-tight -mt-1`}>{serverData.nameDisplay}</h1>
          <p className={`text-xs sm:text-sm ${textColorSecondary} mt-0.5 mb-1`}>{serverData.gameInfo}</p>
          <p className={`text-[11px] sm:text-xs ${textColorMuted} leading-snug`}>{serverData.serverProtectionInfo}</p>
          <p className={`text-[11px] sm:text-xs ${textColorMuted} leading-snug`}>
            {serverData.visitInfo} <a href={serverData.discordLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{serverData.discordLink}</a>
          </p>
        </div>
      </div>

      {/* Action Buttons & Favorite */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-7 space-y-3 sm:space-y-0">
        <div className="flex space-x-2 sm:space-x-3">
          <button className={`bg-[#0A84FF] hover:bg-[#0070D1] ${textColorPrimary} text-xs sm:text-sm font-semibold py-2 px-4 sm:px-5 rounded-sm transition-colors shadow-md`}>
            JOIN
          </button>
          <button className={`bg-black/30 hover:bg-black/40 ${textColorSecondary} text-xs sm:text-sm font-semibold py-2 px-4 sm:px-5 rounded-sm transition-colors`}>
            SPECTATE
          </button>
          <button className={`bg-black/30 hover:bg-black/40 ${textColorSecondary} text-xs sm:text-sm font-semibold py-2 px-4 sm:px-5 rounded-sm transition-colors`}>
            JOIN AS COMMANDER
          </button>
        </div>
        <div className={`flex items-center ${accentColorYellow} cursor-pointer`}>
          <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" fill="currentColor" />
          <span className={`text-base sm:text-lg font-semibold ${textColorPrimary}`}>{serverData.favorites}</span>
        </div>
      </div>

      {/* Stats Panel */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-black/40 p-3 sm:p-4 mb-6 md:mb-7 rounded-sm">
        {[
          { label: 'PLAYERS', value: serverData.players },
          { label: 'PING', value: serverData.ping },
          { label: 'TICKRATE', value: serverData.tickrate },
        ].map(stat => (
          <div key={stat.label} className="text-center">
            <p className={`text-[9px] sm:text-[10px] ${textColorMuted} uppercase tracking-wider mb-0.5`}>{stat.label}</p>
            <p className={`text-lg sm:text-xl md:text-2xl font-bold ${textColorPrimary} leading-none`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Settings, Advanced, Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-4 md:gap-y-0 mb-6 md:mb-7">
        {[
          { title: 'SETTINGS', data: serverData.settings },
          { title: 'ADVANCED', data: serverData.advancedSettings },
          { title: 'RULES', data: serverData.rules as (ServerSetting | ServerRule)[] } // Cast for mixed type if needed
        ].map(section => (
          <div key={section.title}>
            <h3 className={`text-[10px] sm:text-xs font-semibold ${textColorMuted} uppercase tracking-wider mb-2`}>{section.title}</h3>
            <div className="space-y-1">
              {section.data.map(item => (
                <div key={item.label} className="flex justify-between items-center text-xs sm:text-sm">
                  <span className={textColorSecondary}>{item.label}</span>
                  <span className={`font-medium ${textColorPrimary} ${(item as ServerRule).highlight ? accentColorYellow : ''}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Map Rotation Section */}
      <div>
        <h3 className={`text-[10px] sm:text-xs font-semibold ${textColorMuted} uppercase tracking-wider mb-2`}>MAP ROTATION</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
          {serverData.mapRotationImages.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Map ${index + 1}`} className="w-full h-auto aspect-[16/10] object-cover rounded-sm border border-black/20" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerInfoDisplay;
