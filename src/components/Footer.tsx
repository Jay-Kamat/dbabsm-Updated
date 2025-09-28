import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">॥</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Babasaheb Ambedkar</h3>
                <p className="text-sm text-gray-300">Bouddha Sanskar Mandal</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Dedicated to preserving Buddhist values and Dr. Ambedkar's vision of equality, education, and social justice.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-orange-500 transition-colors">Events</a></li>
              <li><a href="/activities" className="text-gray-300 hover:text-orange-500 transition-colors">Activities</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors">Gallery</a></li>
              <li><a href="/teachings" className="text-gray-300 hover:text-orange-500 transition-colors">Teachings</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Meditation Sessions</li>
              <li className="text-gray-300">Community Welfare</li>
              <li className="text-gray-300">Educational Programs</li>
              <li className="text-gray-300">Buddhist Festivals</li>
              <li className="text-gray-300">Spiritual Guidance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  123 Buddhism Street<br />
                  Ambedkar Nagar<br />
                  Maharashtra, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <p className="text-gray-300">+91 12345 67890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <p className="text-gray-300">info@ambedkarmandal.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Dr. Babasaheb Ambedkar Bouddha Sanskar Mandal. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;