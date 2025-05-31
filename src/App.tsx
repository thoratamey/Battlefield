// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainMenu from './pages/MainMenu';
// // import Multiplayer from './pages/ServerInfoDisplay';
import ServerInfoDisplay from './pages/ServerInfoDisplay';
// import Campaign from './pages/Campaign';
// import Options from './pages/Options';
// import Store from './pages/Store';
import Layout from './components/Layout';
function App() {
  return (
     <Layout>
    <Router>
      <Routes>
        {/* <Route path="/" element={<MainMenu />} /> */}
        <Route path="/" element={<ServerInfoDisplay />} />
        {/* <Route path="/campaign" element={<Campaign />} />
        <Route path="/options" element={<Options />} />
        <Route path="/store" element={<Store />} /> */}
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;