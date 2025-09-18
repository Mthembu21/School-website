import React from 'react';
import { Award, Users, Target, Heart, BookOpen, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '1,250+', label: 'Students' },
    { icon: Award, value: '85', label: 'Teachers' },
    { icon: BookOpen, value: '42', label: 'Programs' },
    { icon: Globe, value: '25+', label: 'Years of Excellence' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in education, encouraging students to achieve their full potential.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We foster honesty, respect, and ethical behavior in all aspects of school life.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build strong relationships and create an inclusive environment for all.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to enhance the learning experience.'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Principal',
      bio: 'With over 20 years in education, Dr. Johnson leads our school with vision and dedication.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Vice Principal',
      bio: 'Prof. Chen oversees curriculum development and academic excellence initiatives.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      name: 'Ms. Emily Rodriguez',
      position: 'Academic Director',
      bio: 'Ms. Rodriguez coordinates academic programs and student support services.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Ikusasa-College</h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              For over 25 years, we have been committed to providing exceptional education that prepares students for success in college, career, and life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
                alt="Students learning"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide a comprehensive, innovative education that empowers students to become confident, 
                  compassionate, and capable leaders who contribute positively to their communities and the world.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be recognized as a premier educational institution that inspires lifelong learning, 
                  fosters creativity, and develops global citizens prepared for the challenges of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our school's vision and ensure excellence in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Ikusasa-College was founded in 1999 with a vision to provide quality education
                  that combines academic rigor with character development. What started as a small
                  institution with 150 students has grown into a thriving educational community.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the years, we have consistently evolved our programs and facilities to meet the 
                  changing needs of our students and society. Our commitment to innovation in education 
                  has earned us recognition as one of the leading schools in the region.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we continue to build on our legacy while embracing new technologies and 
                  teaching methodologies that prepare our students for the challenges of the 21st century.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg"
                alt="School building"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}