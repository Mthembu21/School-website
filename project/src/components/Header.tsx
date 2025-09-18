import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userProfile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getDashboardLink = () => {
    if (!userProfile) return '/login';
    switch (userProfile.role) {
      case 'student': return '/student';
      case 'parent': return '/parent';
      case 'teacher': return '/teacher';
      default: return '/login';
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ikusasa-College</h1>
              <p className="text-xs text-gray-500">Nurturing Future Leaders</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link to="/academics" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Academics</Link>
            <Link to="/admissions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Admissions</Link>
            <Link to="/announcements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Announcements</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user && userProfile ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to={getDashboardLink()} 
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User size={20} />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/academics" className="block py-2 text-gray-700 hover:text-blue-600">Academics</Link>
            <Link to="/admissions" className="block py-2 text-gray-700 hover:text-blue-600">Admissions</Link>
            <Link to="/announcements" className="block py-2 text-gray-700 hover:text-blue-600">Announcements</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            {user && userProfile ? (
              <>
                <Link to={getDashboardLink()} className="block py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
                <button onClick={handleSignOut} className="block py-2 text-gray-700 hover:text-red-600">Sign Out</button>
              </>
            ) : (
              <Link to="/login" className="block py-2 text-blue-600 font-medium">Login</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}