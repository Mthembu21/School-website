import React, { useEffect, useState } from 'react';
import { Calendar, GraduationCap, Bell, BookOpen, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

export default function StudentPortal() {
  const { userProfile } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    announcements: [],
    grades: [],
    todaySchedule: [],
    loading: true
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // In a real implementation, these would fetch actual data
      setDashboardData({
        announcements: [
          { id: 1, title: 'Midterm Exam Schedule', date: '2024-01-15', content: 'Midterm examinations will begin next week.' },
          { id: 2, title: 'Science Fair Registration', date: '2024-01-10', content: 'Register for the annual science fair.' }
        ],
        grades: [
          { subject: 'Mathematics', grade: 'A-', percentage: 89 },
          { subject: 'English', grade: 'B+', percentage: 87 },
          { subject: 'Science', grade: 'A', percentage: 94 },
          { subject: 'History', grade: 'B', percentage: 82 }
        ],
        todaySchedule: [
          { time: '8:00 AM', subject: 'Mathematics', teacher: 'Mr. Johnson', room: '101' },
          { time: '9:00 AM', subject: 'English', teacher: 'Ms. Smith', room: '205' },
          { time: '10:10 AM', subject: 'Science', teacher: 'Dr. Brown', room: '301' },
          { time: '11:10 AM', subject: 'History', teacher: 'Mr. Davis', room: '150' }
        ],
        loading: false
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setDashboardData(prev => ({ ...prev, loading: false }));
    }
  };

  if (dashboardData.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {userProfile?.name}!</h1>
          <p className="text-gray-600">Here's what's happening in your academic journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">GPA</p>
                <p className="text-2xl font-bold text-gray-900">3.85</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Subjects</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Attendance</p>
                <p className="text-2xl font-bold text-gray-900">96%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Bell className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Notifications</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dashboardData.todaySchedule.map((class_, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{class_.subject}</h3>
                      <p className="text-sm text-gray-600">{class_.teacher} • Room {class_.room}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{class_.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Grades */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-green-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Recent Grades</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dashboardData.grades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{grade.subject}</h3>
                      <p className="text-sm text-gray-600">{grade.percentage}%</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {grade.grade}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="bg-white rounded-xl shadow-sm lg:col-span-2">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Bell className="text-orange-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">Recent Announcements</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dashboardData.announcements.map((announcement) => (
                  <div key={announcement.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <p className="text-gray-600">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}