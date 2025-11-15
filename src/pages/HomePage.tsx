import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BookOpen, Heart, X } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/mockData';

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const upcomingEvents = events.slice(0, 3);

  // 🚀 Popup image state
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">

      {/* ⭐ Fullscreen Image Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center animate-fadeIn"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            alt="Event Full"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl animate-zoomIn"
          />


          <button
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
            onClick={() => setPopupImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

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
                ? 'तथागत भगवान गौतम बुद्ध आणि डॉ. बाबासाहेब आंबेडकरांच्या विचारसरणीला प्रोत्साहन देत समाजात सकारात्मक बदल घडवून आणणे.'
                : 'To promote the ideology of Tathagat Bhagwan Gautam Buddha and Dr. Babasaheb Ambedkar, and to bring about positive change in society'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('mission')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('missionText')}
              </p>
            </div>

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
              {language === 'mr'
                ? 'आगामी कार्यक्रम आणि समुदायिक उपक्रम'
                : 'Join our upcoming events and community initiatives'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">

                {/* ⭐ Event Image Click → Open Popup */}
                <img
                  src={event.image}
                  alt={language === 'mr' ? event.titleMarathi : event.title}
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
                  onClick={() => setPopupImage(event.image)}
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
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift"
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
          <div className="flex flex-wrap justify-center items-center gap-10 text-center text-white">

            <div className="hover-lift">
              <div className="text-4xl font-bold mb-6">10+</div>
              <div className="text-lg">{language === 'mr' ? 'वर्षे' : 'Years'}</div>
            </div>

            <div className="hover-lift">
              <div className="text-4xl font-bold mb-6">50+</div>
              <div className="text-lg">{language === 'mr' ? 'बौद्ध धम्म महापरिषद' : 'Buddhist Councils'}</div>
            </div>

            <div className="hover-lift">
              <div className="text-4xl font-bold mb-6">50+</div>
              <div className="text-lg">{language === 'mr' ? 'लोककल्याणकारी उपक्रम' : 'People-Welfare Initiative'}</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
