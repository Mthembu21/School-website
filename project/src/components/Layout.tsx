import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { userProfile } = useAuth();
  const location = useLocation();
  
  const isPortalPage = location.pathname.startsWith('/student') || 
                      location.pathname.startsWith('/parent') || 
                      location.pathname.startsWith('/teacher');
  
  const showSidebar = isPortalPage && userProfile;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className={`${showSidebar ? 'flex' : ''}`}>
        {showSidebar && <Sidebar />}
        <main className={`${showSidebar ? 'flex-1 ml-64' : 'w-full'}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}