import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Award, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { supabase, Announcement } from '../lib/supabase';
import unnamedImage from '../images/unnamed.jpg';

export default function Home() {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    classes: 0,
  });
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch stats (these would come from actual tables in production)
      setStats({
        students: 1250,
        teachers: 85,
        classes: 42,
      });

      // Fetch latest public announcements
      const { data: announcementData, error } = await supabase
        .from('announcements')
        .select('*')
        .in('target_audience', ['public', 'all'])
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        console.error('Error fetching announcements:', error);
        // Use mock data for demo
        setAnnouncements([
          {
            id: '1',
            title: 'Welcome to New Academic Year 2024-25',
            content: 'We are excited to welcome all students back for another year of learning and growth.',
            target_audience: 'public',
            created_at: '2024-01-15T00:00:00Z',
            author: 'Principal Office'
          },
          {
            id: '2',
            title: 'Science Fair Registration Open',
            content: 'Students can now register for the annual science fair. Deadline is March 15th.',
            target_audience: 'public',
            created_at: '2024-01-10T00:00:00Z',
            author: 'Science Department'
          }
        ]);
      } else {
        setAnnouncements(announcementData || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Fallback mock data
      setAnnouncements([
        {
          id: '1',
          title: 'Welcome to New Academic Year 2024-25',
          content: 'We are excited to welcome all students back for another year of learning and growth.',
          target_audience: 'public',
          created_at: '2024-01-15T00:00:00Z',
          author: 'Principal Office'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Excellence in Education,
                <span className="text-blue-200 block">Nurturing Future Leaders</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Welcome to Ikusasa-College, where we inspire students to reach their full potential through innovative learning, character development, and academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={unnamedImage}
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-700 p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">{stats.students.toLocaleString()}</div>
              <div className="text-gray-600 font-medium">Active Students</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">{stats.teachers}</div>
              <div className="text-gray-600 font-medium">Qualified Teachers</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-purple-700 mb-2">{stats.classes}</div>
              <div className="text-gray-600 font-medium">Classes Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Excellence High School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive education that prepares students for success in higher education and life beyond school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">
                Rigorous curriculum designed to challenge and inspire students to achieve their academic potential.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-600">
                Dedicated and qualified teachers committed to nurturing each student's growth and development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistic Development</h3>
              <p className="text-gray-600">
                Focus on character building, leadership skills, and extracurricular activities for well-rounded education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest News & Announcements</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest happenings at our school</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <Calendar className="text-blue-600 mr-2" size={16} />
                  <span className="text-sm text-gray-500">
                    {new Date(announcement.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {announcement.content}
                </p>
                <Link
                  to="/announcements"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/announcements"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Announcements
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-blue-100 mb-8">
                Have questions about admissions, academics, or want to schedule a visit? We'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-200">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-200">info@ikusasa-college.edu</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-200">123 Education Street<br />Academic City, AC 12345</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
