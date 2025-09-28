import React from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { members } from '../data/mockData';

const MembersPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('membersTitle')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {language === 'mr' 
              ? 'आमच्या संघटनेचे नेतृत्व करणारे समर्पित सदस्य ज्यांनी समुदायाच्या कल्याणासाठी आपले जीवन अर्पण केले आहे.'
              : 'Meet the dedicated members who lead our organization and have devoted their lives to community welfare.'
            }
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                <div className="relative">
                  <img
                    src={member.photo}
                    alt={language === 'mr' ? member.nameMarathi : member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">
                      {language === 'mr' ? member.nameMarathi : member.name}
                    </h3>
                    <p className="text-orange-300 font-medium">
                      {language === 'mr' ? member.roleMarathi : member.role}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    {member.contact && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{member.contact}</span>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{member.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">
                      {language === 'mr' 
                        ? 'समुदायाच्या सेवेत कार्यरत'
                        : 'Dedicated to community service'
                      }
                    </p>
                    <button className="w-full px-4 py-2 bg-orange-50 text-orange-600 rounded-lg font-medium hover:bg-orange-100 transition-colors flex items-center justify-center">
                      <User className="w-4 h-4 mr-2" />
                      {language === 'mr' ? 'संपर्क करा' : 'Contact'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {language === 'mr' ? 'आमच्यात सामील व्हा' : 'Join Our Team'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {language === 'mr' 
                ? 'समुदायाच्या सेवेत आणि सामाजिक बदलाच्या कार्यात सहभागी होण्यासाठी आमच्यात सामील व्हा.'
                : 'Join us in serving the community and working towards social change and empowerment.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift">
                {language === 'mr' ? 'सदस्यत्व घ्या' : 'Become a Member'}
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white rounded-lg font-medium transition-colors hover-lift">
                {language === 'mr' ? 'अधिक माहिती' : 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembersPage;