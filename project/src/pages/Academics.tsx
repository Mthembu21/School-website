import React from 'react';
import { BookOpen, Users, Award, Clock, Calculator, Globe, Atom, Palette, Music, Trophy } from 'lucide-react';

export default function Academics() {
  const programs = [
    {
      icon: Calculator,
      title: 'Economics Program',
      description: 'Comprehensive study of economic principles, business management, and financial literacy.',
      grades: 'Grades 9-12',
      features: ['Microeconomics', 'Macroeconomics', 'Business Studies', 'Accounting', 'Entrepreneurship', 'Financial Planning']
    },
    {
      icon: Atom,
      title: 'Science Program',
      description: 'Rigorous scientific education covering all major disciplines with laboratory and research components.',
      grades: 'Grades 9-12',
      features: ['Biology', 'Chemistry', 'Physics', 'Environmental Science', 'Computer Science', 'Research Methods']
    },
    {
      icon: Palette,
      title: 'Art Culture Program',
      description: 'Creative exploration of visual arts, performing arts, and cultural studies.',
      grades: 'Grades 9-12',
      features: ['Visual Arts', 'Music', 'Drama', 'Dance', 'Cultural Studies', 'Art History', 'Creative Writing']
    },
    {
      icon: Globe,
      title: 'Engineering Program',
      description: 'Technical education in engineering principles, design, and innovation.',
      grades: 'Grades 9-12',
      features: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Computer Engineering', 'Design & Technology', 'Robotics']
    }
  ];

  const subjects = [
    { icon: Calculator, name: 'Economics', level: 'Micro & Macro Economics' },
    { icon: Atom, name: 'Science', level: 'Biology, Chemistry, Physics' },
    { icon: Palette, name: 'Art Culture', level: 'Visual Arts, Music, Drama' },
    { icon: Globe, name: 'Engineering', level: 'Mechanical, Electrical, Civil' },
    { icon: BookOpen, name: 'English Literature', level: 'All Levels' },
    { icon: Users, name: 'Business Studies', level: 'Management & Finance' }
  ];

  const extracurriculars = [
    { icon: Trophy, name: 'Sports Teams', description: 'Basketball, Soccer, Tennis, Swimming' },
    { icon: BookOpen, name: 'Academic Clubs', description: 'Debate, Chess, Math Olympiad, Science Bowl' },
    { icon: Palette, name: 'Creative Arts', description: 'Drama Club, Art Society, Photography' },
    { icon: Users, name: 'Service Clubs', description: 'Community Service, Environmental Club, Volunteer Corps' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl lg:text-2xl text-green-100 leading-relaxed">
              Comprehensive programs designed to challenge, inspire, and prepare students for success in higher education and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Specialized Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized academic programs cater to diverse interests and career aspirations, providing pathways to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {program.grades}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Subjects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum covers all essential subjects with advanced placement options available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                      <p className="text-gray-600 text-sm">{subject.level}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule & Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Academic Schedule</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">School Hours</h3>
                    <p className="text-gray-600">8:00 AM - 3:30 PM (Monday - Friday)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <span className="text-gray-700">Period 1</span>
                    <span className="text-gray-600">8:00 - 8:50 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <span className="text-gray-700">Period 2</span>
                    <span className="text-gray-600">9:00 - 9:50 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <span className="text-gray-700">Break</span>
                    <span className="text-gray-600">9:50 - 10:10 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <span className="text-gray-700">Period 3</span>
                    <span className="text-gray-600">10:10 - 11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <span className="text-gray-700">Period 4</span>
                    <span className="text-gray-600">11:10 - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                    <span className="text-gray-700">Lunch</span>
                    <span className="text-gray-600">12:00 - 12:45 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Graduation Requirements</h2>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Credit Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>English</span>
                      <span className="font-medium">4 credits</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mathematics</span>
                      <span className="font-medium">4 credits</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Science</span>
                      <span className="font-medium">3 credits</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Social Studies</span>
                      <span className="font-medium">3 credits</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Foreign Language</span>
                      <span className="font-medium">2 credits</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Arts</span>
                      <span className="font-medium">1 credit</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Physical Education</span>
                      <span className="font-medium">1 credit</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Electives</span>
                      <span className="font-medium">6 credits</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between font-semibold text-gray-900">
                      <span>Total Required</span>
                      <span>24 credits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Beyond the Classroom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your educational experience with our diverse range of extracurricular activities and clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{activity.name}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}