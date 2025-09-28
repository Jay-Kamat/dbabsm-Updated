import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Search, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allEvents } from '../data/mockData';

const EventsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>('');

  const categories = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'festival', name: language === 'mr' ? 'सण' : 'Festivals' },
    { id: 'educational', name: language === 'mr' ? 'शैक्षणिक' : 'Educational' },
    { id: 'community', name: language === 'mr' ? 'सामुदायिक' : 'Community' }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      (language === 'mr' ? event.titleMarathi : event.title)
        .toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date());

  const handleRegistration = (eventId: string) => {
    setSelectedEvent(eventId);
    setShowRegistrationForm(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('events')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {language === 'mr' 
              ? 'बौद्ध सण, शैक्षणिक कार्यक्रम आणि सामुदायिक मेळाव्यांची नियमित अपडेट्स'
              : 'Regular updates on Buddhist festivals, educational programs, and community gatherings'
            }
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'mr' ? 'कार्यक्रम शोधा...' : 'Search events...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t('upcomingEvents')}</h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={language === 'mr' ? event.titleMarathi : event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {language === 'mr' ? 'आगामी' : 'Upcoming'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-orange-600 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {language === 'mr' ? event.titleMarathi : event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {language === 'mr' ? event.descriptionMarathi : event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {language === 'mr' ? event.locationMarathi : event.location}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleRegistration(event.id)}
                        className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                      >
                        <Users className="w-4 h-4 inline mr-2" />
                        {language === 'mr' ? 'नोंदणी करा' : 'Register'}
                      </button>
                      <button className="px-4 py-2 border border-orange-500 text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-colors">
                        {language === 'mr' ? 'तपशील' : 'Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">
                {language === 'mr' ? 'सध्या कोणतेही आगामी कार्यक्रम नाहीत' : 'No upcoming events at the moment'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t('pastEvents')}</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift opacity-75">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={language === 'mr' ? event.titleMarathi : event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {language === 'mr' ? 'संपन्न' : 'Completed'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {language === 'mr' ? event.titleMarathi : event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {language === 'mr' ? event.descriptionMarathi : event.description}
                    </p>
                    
                    <button className="w-full px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors flex items-center justify-center">
                      {language === 'mr' ? 'फोटो पहा' : 'View Photos'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {language === 'mr' ? 'कार्यक्रम नोंदणी' : 'Event Registration'}
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'mr' ? 'पूर्ण नाव' : 'Full Name'}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'mr' ? 'ईमेल' : 'Email'}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'mr' ? 'फोन नंबर' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  {language === 'mr' ? 'नोंदणी करा' : 'Register'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegistrationForm(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {language === 'mr' ? 'रद्द करा' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;