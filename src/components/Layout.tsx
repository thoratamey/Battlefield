// src/components/Layout.tsx (or wherever your Layout component is)
// import React, { ReactNode } from 'react';
import ServerInfoDisplay from '../pages/ServerInfoDisplay';// Adjust path if necessary

interface LayoutProps {
  // If your layout is generic and wraps pages, you might use children
  // children?: ReactNode; 
  
  // For this specific case, we'll render ServerInfoDisplay directly
  // Or, if ServerInfoDisplay is a page, your router would render it within this layout
}

// IMPORTANT: Replace this with the actual path or URL to YOUR background image
const yourGameBackgroundImageUrl = '/server-bg.jpg'; 
// Example: if it's in public/images/my-bg.jpg, use '/images/my-bg.jpg'

const Layout: React.FC<LayoutProps> = (/*{ children }*/) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${yourGameBackgroundImageUrl})` }}
    >
      {/* You could have a Navbar or Header here if needed */}
      {/* <header className="fixed top-0 left-0 right-0 h-16 bg-black/30 backdrop-blur-md z-50">
        <p className="text-white p-4">My Game Site</p>
      </header> */}

      {/* Main content area - This is key for centering the ServerInfoDisplay panel */}
      <main className="min-h-screen w-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
        {/* If your Layout component wraps other children (pages):
          You would render {children} here. 
          Then, the page that uses this layout would contain the <ServerInfoDisplay />
          and that page's main container might also need flex centering.

          For direct rendering of ServerInfoDisplay in this Layout:
        */}
        <ServerInfoDisplay />
      </main>

      {/* You could have a Footer here */}
      {/* <footer className="text-center p-4 text-xs text-gray-400">
        <p>&copy; 2025 Your Game</p>
      </footer> */}
    </div>
  );
};

export default Layout;
