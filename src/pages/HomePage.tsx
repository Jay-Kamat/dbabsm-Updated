import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BookOpen, Heart } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/mockData';

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider language={language} />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {language === 'mr' ? 'आमचे ध्येय आणि दृष्टी' : 'Our Mission & Vision'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'mr' 
                ? 'बौद्ध मूल्ये आणि डॉ. आंबेडकरांच्या विचारसरणीला प्रोत्साहन देत समाजात सकारात्मक बदल घडवून आणणे.'
                : 'Promoting Buddhist values and Dr. Ambedkar\'s ideology to bring positive change in society.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('mission')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('vision')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('upcomingEvents')}</h2>
            <p className="text-xl text-gray-600">
              {language === 'mr' ? 'आगामी कार्यक्रम आणि समुदायिक उपक्रम' : 'Join our upcoming events and community initiatives'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                <img
                  src={event.image}
                  alt={language === 'mr' ? event.titleMarathi : event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-orange-600 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {language === 'mr' ? event.titleMarathi : event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'mr' ? event.descriptionMarathi : event.description}
                  </p>
                  <Link
                    to="/events"
                    className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700"
                  >
                    {t('learnMore')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift"
            >
              {t('viewAll')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="hover-lift">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">
                {language === 'mr' ? 'सदस्य' : 'Members'}
              </div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">
                {language === 'mr' ? 'कार्यक्रम' : 'Events'}
              </div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">
                {language === 'mr' ? 'वर्षे' : 'Years'}
              </div>
            </div>
            <div className="hover-lift">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">
                {language === 'mr' ? 'सेवा केलेले' : 'Lives Touched'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'mr' ? 'आमच्या समुदायात सामील व्हा' : 'Join Our Community'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'mr' 
              ? 'सामाजिक न्याय, शिक्षण आणि बौद्ध मूल्यांसाठी आमच्या मिशनमध्ये सहभागी व्हा.'
              : 'Be part of our mission for social justice, education, and Buddhist values.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/members"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" />
              {language === 'mr' ? 'सदस्यत्व घ्या' : 'Become a Member'}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition-colors hover-lift"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;