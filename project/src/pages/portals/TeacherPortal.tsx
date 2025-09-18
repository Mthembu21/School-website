import React, { useEffect, useState } from 'react';
import { BookOpen, Users, Bell, MessageCircle, Calendar, Clock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function TeacherPortal() {
  const { userProfile } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    classes: [],
    students: 0,
    messages: [],
    todaySchedule: [],
    loading: true
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data - in real implementation, fetch from Supabase
      setDashboardData({
        classes: [
          { id: 1, name: 'Mathematics - Grade 10A', students: 28, subject: 'Mathematics' },
          { id: 2, name: 'Advanced Mathematics - Grade 11A', students: 24, subject: 'Mathematics' },
          { id: 3, name: 'Calculus - Grade 12A', students: 22, subject: 'Mathematics' }
        ],
        students: 74,
        messages: [
          {
            id: 1,
            from: 'Parent - Mrs. Johnson',
            subject: 'Emma Math Progress',
            date: '2024-01-15',
            content: 'Could we schedule a meeting to discuss Emma progress in mathematics?'
          },
          {
            id: 2,
            from: 'Principal Office',
            subject: 'Faculty Meeting',
            date: '2024-01-12',
            content: 'Reminder: Faculty meeting tomorrow at 3:30 PM in the conference room.'
          }
        ],
        todaySchedule: [
          { time: '8:00 AM', class: 'Mathematics - Grade 10A', room: '101', duration: '50 min' },
          { time: '9:00 AM', class: 'Advanced Mathematics - Grade 11A', room: '101', duration: '50 min' },
          { time: '10:10 AM', class: 'Calculus - Grade 12A', room: '101', duration: '50 min' },
          { time: '2:00 PM', class: 'Study Hall', room: '101', duration: '45 min' }
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
          <p className="text-gray-600">Manage your classes and connect with students and parents</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Classes</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.classes.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.students}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Messages</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.messages.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-600">Today Classes</p>
                <p className="text-2xl font-bold text-gray-900">{dashboardData.todaySchedule.length}</p>
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
                <h2 className="text-xl font-bold text-gray-900">Today Schedule</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dashboardData.todaySchedule.map((classItem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{classItem.class}</h3>
                      <p className="text-sm text-gray-600">Room {classItem.room} • {classItem.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{classItem.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My Classes */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <BookOpen className="text-green-600" size={24} />
                <h2 className="text-xl font-bold text-gray-900">My Classes</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dashboardData.classes.map((classItem) => (
                  <div key={classItem.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <h3 className="font-semibold text-gray-900">{classItem.name}</h3>
                      <p className="text-sm text-gray-600">{classItem.students} students</p>
                    </div>
                    <div className="text-blue-600 hover:text-blue-700">
                      <Users size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="text-purple-600" size={24} />
                  <h2 className="text-xl font-bold text-gray-900">Recent Messages</h2>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {dashboardData.messages.map((message) => (
                  <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{message.subject}</h3>
                      <span className="text-sm text-gray-500">{message.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">From: {message.from}</p>
                    <p className="text-gray-700">{message.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <button className="w-full flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <Bell className="text-blue-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Create Announcement</h3>
                    <p className="text-sm text-gray-600">Post updates for students and parents</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <Users className="text-green-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Grade Students</h3>
                    <p className="text-sm text-gray-600">Enter or update student grades</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <MessageCircle className="text-purple-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Message Parents</h3>
                    <p className="text-sm text-gray-600">Send updates to parent community</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                  <Calendar className="text-orange-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Schedule Meeting</h3>
                    <p className="text-sm text-gray-600">Book parent-teacher conferences</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}