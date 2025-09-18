import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  GraduationCap, 
  MessageCircle, 
  User,
  Bell,
  BookOpen,
  Users
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Sidebar() {
  const { userProfile } = useAuth();
  const location = useLocation();

  const getMenuItems = () => {
    const baseItems = [
      { icon: LayoutDashboard, label: 'Dashboard', path: `/${userProfile?.role}` },
    ];

    switch (userProfile?.role) {
      case 'student':
        return [
          ...baseItems,
          { icon: Calendar, label: 'Timetable', path: '/student/timetable' },
          { icon: GraduationCap, label: 'Grades', path: '/student/grades' },
          { icon: Bell, label: 'Announcements', path: '/student/announcements' },
          { icon: User, label: 'Profile', path: '/student/profile' },
        ];
      case 'parent':
        return [
          ...baseItems,
          { icon: Users, label: 'Children', path: '/parent/children' },
          { icon: Calendar, label: 'Timetables', path: '/parent/timetables' },
          { icon: GraduationCap, label: 'Grades', path: '/parent/grades' },
          { icon: MessageCircle, label: 'Messages', path: '/parent/messages' },
          { icon: User, label: 'Profile', path: '/parent/profile' },
        ];
      case 'teacher':
        return [
          ...baseItems,
          { icon: BookOpen, label: 'Classes', path: '/teacher/classes' },
          { icon: Users, label: 'Students', path: '/teacher/students' },
          { icon: Bell, label: 'Announcements', path: '/teacher/announcements' },
          { icon: MessageCircle, label: 'Messages', path: '/teacher/messages' },
          { icon: User, label: 'Profile', path: '/teacher/profile' },
        ];
      default:
        return baseItems;
    }
  };

  const menuItems = getMenuItems();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 capitalize">
            {userProfile?.role} Portal
          </h2>
          <p className="text-sm text-gray-500">{userProfile?.name}</p>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}