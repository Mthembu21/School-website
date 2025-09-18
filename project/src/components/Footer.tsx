import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">EH</span>
              </div>
              <h3 className="text-lg font-bold">Excellence High School</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Committed to providing quality education and nurturing future leaders through innovation, excellence, and character building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</a></li>
              <li><a href="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="/announcements" className="text-gray-400 hover:text-white transition-colors">News & Events</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Primary School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Middle School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">High School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Extracurriculars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">123 Education Street, Academic City, AC 12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">info@excellencehigh.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Excellence High School. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}