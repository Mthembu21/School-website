import React, { useEffect, useState } from 'react';
import { Users, GraduationCap, Calendar, MessageCircle, Phone, Mail } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ParentPortal() {
  const { userProfile } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    children: [],
    messages: [],
    loading: true
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data - in real implementation, fetch from Supabase
      setDashboardData({
        children: [
          {
            id: 1,
            name: 'Emma Johnson',
            grade: 'Grade 10',
            gpa: 3.7,
            attendance: 95,
            subjects: [
              { name: 'Mathematics', grade: 'B+', teacher: 'Mr. Johnson' },
              { name: 'English', grade: 'A-', teacher: 'Ms. Smith' },
              { name: 'Science', grade: 'A', teacher: 'Dr. Brown' },
              { name: 'History', grade: 'B', teacher: 'Mr. Davis' }
            ]
          },
          {
            id: 2,
            name: 'Michael Johnson',
            grade: 'Grade 8',
            gpa: 3.9,
            attendance: 98,
            subjects: [
              { name: 'Mathematics', grade: 'A', teacher: 'Ms. Wilson' },
              { name: 'English', grade: 'A-', teacher: 'Mr. Clark' },
              { name: 'Science', grade: 'A+', teacher: 'Dr. Lee' },
              { name: 'Social Studies', grade: 'A-', teacher: 'Ms. Taylor' }
            ]
          }
        ],
        messages: [
          {
            id: 1,
            from: 'Mr. Johnson',
            subject: 'Math Progress Update',
            date: '2024-01-15',
            content: 'Emma is showing great improvement in algebra. Keep up the good work!'
          },
          {
            id: 2,
            from: 'Principal Office',
            subject: 'Parent-Teacher Conference',
            date: '2024-01-12',
            content: 'Please schedule your parent-teacher conference for next week.'
          }
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
          <h1 className="text-3xl font-bold text-gray-900">Welcome, {userProfile?.name}!</h1>
          <p className="text-gray-600">Monitor your children academic progress and stay connected with teachers</p>
        </div>

        {/* Children Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {dashboardData.children.map((child) => (
            <div key={child.id} className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{child.name}</h2>
                    <p className="text-gray-600">{child.grade}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Child Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">GPA</p>
                    <p className="text-2xl font-bold text-green-600">{child.gpa}</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Attendance</p>
                    <p className="text-2xl font-bold text-blue-600">{child.attendance}%</p>
                  </div>
                </div>

                {/* Recent Grades */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Grades</h3>
                  <div className="space-y-3">
                    {child.subjects.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{subject.name}</h4>
                          <p className="text-sm text-gray-600">{subject.teacher}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          subject.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {subject.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Communication Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <Calendar className="text-blue-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Schedule Conference</h3>
                    <p className="text-sm text-gray-600">Book a meeting with teachers</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <MessageCircle className="text-green-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">Send Message</h3>
                    <p className="text-sm text-gray-600">Contact teachers or administration</p>
                  </div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <GraduationCap className="text-purple-600" size={24} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">View Report Cards</h3>
                    <p className="text-sm text-gray-600">Download academic reports</p>
                  </div>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-red-600" size={20} />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-red-600" size={20} />
                    <span className="text-gray-700">emergency@excellencehigh.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}