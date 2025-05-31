import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const serverDetailedInfo = {
  id: '1',
  serverImageUrl: 'https://via.placeholder.com/60x90/2A3038/AEB3B7?text=BF', // Adjusted placeholder
  nameDisplay: '#1 NASA | Noobs Welcome |',
  // Added German flag Unicode character 🇩🇪
  gameInfo: '🇩🇪 CONQUEST LARGE - SIEGE OF SHANGHAI - NORMAL - 40 HZ',
  serverProtectionInfo: 'Server protected by The-K-50 AntiCheat. Vip Rules, Questions, Request, Appeal,',
  visitInfo: 'Visit us: www.epg.gg | Discord',
  discordLink: 'https://discord.gg/3rSNK4d',
  players: '64/64',
  ping: '47ms',
  tickrate: '60 Hz',
  favorites: '13672',
  settings: [
    { label: 'REGION', value: 'EUROPE - DE' },
    { label: 'PUNKBUSTER', value: 'ON' },
    { label: 'FAIRFIGHT', value: 'ON' },
    { label: 'PASSWORD', value: 'OFF' },
    { label: 'PRESET', value: 'NORMAL' },
  ],
  advancedSettings: [
    { label: 'MINIMAP', value: 'ON' },
    { label: 'ONLY SQUAD LEADER SPAWN', value: 'OFF' },
    { label: 'VEHICLES', value: 'ON' },
    { label: 'TEAM BALANCE', value: 'ON' },
    { label: 'MINIMAP SPOTTING', value: 'ON' },
    { label: 'HUD', value: 'ON' },
    { label: '3P VEHICLE CAM', value: 'ON' },
    { label: 'REGENERATIVE HEALTH', value: 'ON' },
    { label: 'KILL CAM', value: 'ON' },
    { label: 'FRIENDLY FIRE', value: 'OFF' },
    { label: '3D SPOTTING', value: 'ON' },
    { label: 'ENEMY NAME TAGS', value: 'ON' },
  ],
  rules: [
    { label: 'TICKETS', value: '400', highlight: true },
    { label: 'VEHICLE SPAWN DELAY', value: '25', highlight: true },
    { label: 'BULLET DAMAGE', value: '100' },
    { label: 'KICK AFTER TEAM KILLS', value: '5' },
    { label: 'PLAYER HEALTH', value: '100' },
    { label: 'PLAYER RESPAWN TIME', value: '100' },
    { label: 'KICK AFTER IDLE', value: '300' },
    { label: 'BAN AFTER KICKS', value: '3' },
  ],
  mapRotationImages: [
    'https://via.placeholder.com/180x100/1A202C/EAEAEA?text=Shanghai',
    'https://via.placeholder.com/180x100/1A202C/EAEAEA?text=Locker',
    'https://via.placeholder.com/180x100/1A202C/EAEAEA?text=Golmud',
    'https://via.placeholder.com/180x100/1A202C/EAEAEA?text=Paracel',
    'https://via.placeholder.com/180x100/1A202C/EAEAEA?text=Zavod',
  ],
};

app.get('/api/servers', (req, res) => {
  res.json([serverDetailedInfo]);
});

app.get('/api/servers/:id', (req, res) => {
  if (req.params.id === serverDetailedInfo.id) {
    res.json(serverDetailedInfo);
  } else {
    return res.status(404).json({ message: 'Server not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});