import React, { useState } from 'react';
import { Play, Image as ImageIcon, Calendar, Tag, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allActivities } from '../data/mockData';

const ActivitiesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'meditation', name: language === 'mr' ? 'ध्यान' : 'Meditation' },
    { id: 'awareness', name: language === 'mr' ? 'जागरूकता' : 'Awareness' },
    { id: 'welfare', name: language === 'mr' ? 'कल्याण' : 'Welfare' },
    { id: 'religious', name: language === 'mr' ? 'धार्मिक' : 'Religious' }
  ];

  const filteredActivities = allActivities.filter(activity =>
    selectedCategory === 'all' || activity.category === selectedCategory
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      meditation: 'bg-purple-100 text-purple-800',
      awareness: 'bg-blue-100 text-blue-800',
      welfare: 'bg-green-100 text-green-800',
      religious: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('activitiesTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {language === 'mr'
              ? 'विविध सामाजिक, धार्मिक आणि शैक्षणिक क्रियाकलापांची प्रतिमा आणि व्हिडिओ. ध्यान शिबिरे, जागरूकता कार्यक्रम आणि समुदायिक कल्याण उपक्रमांचे तपशील.'
              : 'Images and videos of various social, religious, and educational activities. Details about meditation camps, awareness programs, and community welfare initiatives.'
            }
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                {language === 'mr' ? 'श्रेणी:' : 'Category:'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                <div className="relative">
                  <img
                    src={activity.images[0]}
                    alt={language === 'mr' ? activity.titleMarathi : activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setSelectedActivity(activity.id)}
                      className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
                    >
                      <ImageIcon className="w-6 h-6" />
                    </button>
                  </div>
                  {activity.images.length > 1 && (
                    <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                      +{activity.images.length - 1} {language === 'mr' ? 'अधिक' : 'more'}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(activity.category)}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {categories.find(cat => cat.id === activity.category)?.name}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(activity.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {language === 'mr' ? activity.titleMarathi : activity.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {language === 'mr' ? activity.descriptionMarathi : activity.description}
                  </p>

                  <button
                    onClick={() => setSelectedActivity(activity.id)}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                  >
                    {language === 'mr' ? 'अधिक पहा' : 'View More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const activity = allActivities.find(a => a.id === selectedActivity);
              if (!activity) return null;

              return (
                <div>
                  {/* Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                          {language === 'mr' ? activity.titleMarathi : activity.title}
                        </h2>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(activity.category)}`}>
                            {categories.find(cat => cat.id === activity.category)?.name}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(activity.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedActivity(null)}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                      >
                        ×
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {language === 'mr' ? activity.descriptionMarathi : activity.description}
                    </p>

                    {/* Image Gallery */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {activity.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${language === 'mr' ? activity.titleMarathi : activity.title} ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      ))}
                    </div>

                    {/* Videos Section (if available) */}
                    {activity.videos && activity.videos.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          {language === 'mr' ? 'व्हिडिओ' : 'Videos'}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {activity.videos.map((video, index) => (
                            <div key={index} className="relative bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                              <Play className="w-12 h-12 text-gray-500" />
                              <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                                {language === 'mr' ? 'व्हिडिओ' : 'Video'} {index + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Call to Action - Light Elegant Theme */}
      {/* Light Call to Action Section (No Image) */}
      <section className="relative py-20 text-gray-800 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'mr' ? 'आमच्या क्रियाकलापांमध्ये सहभागी व्हा' : 'Participate in Our Activities'}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {language === 'mr'
              ? 'समुदायिक सेवा, ध्यान सत्र आणि जागरूकता कार्यक्रमांमध्ये सहभागी होऊन सामाजिक बदलाचा भाग बना.'
              : 'Be part of social change by participating in community service, meditation sessions, and awareness programs.'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;