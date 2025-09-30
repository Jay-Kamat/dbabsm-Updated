import React, { useState } from 'react';
import { Book, Download, Play, User, Search, Filter, BookOpen, Video, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { teachings, digitalResources } from '../data/mockData';

const TeachingsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'teachings' | 'resources'>('teachings');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResourceType, setSelectedResourceType] = useState<string>('all');

  const authors = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'Buddha', name: language === 'mr' ? 'बुद्ध' : 'Buddha' },
    { id: 'Ambedkar', name: language === 'mr' ? 'डॉ. आंबेडकर' : 'Dr. Ambedkar' }
  ];

  const teachingCategories = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'teaching', name: language === 'mr' ? 'शिकवणी' : 'Teachings' },
    { id: 'principle', name: language === 'mr' ? 'तत्त्वे' : 'Principles' },
    { id: 'quote', name: language === 'mr' ? 'उद्धरणे' : 'Quotes' }
  ];

  const resourceTypes = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'book', name: language === 'mr' ? 'पुस्तके' : 'Books' },
    { id: 'article', name: language === 'mr' ? 'लेख' : 'Articles' },
    { id: 'video', name: language === 'mr' ? 'व्हिडिओ' : 'Videos' },
    { id: 'audio', name: language === 'mr' ? 'ऑडिओ' : 'Audio' }
  ];

  const filteredTeachings = teachings.filter(teaching => {
    const matchesAuthor = selectedAuthor === 'all' || teaching.author === selectedAuthor;
    const matchesCategory = selectedCategory === 'all' || teaching.category === selectedCategory;
    const matchesSearch = searchTerm === '' ||
      (language === 'mr' ? teaching.titleMarathi : teaching.title)
        .toLowerCase().includes(searchTerm.toLowerCase());
    return matchesAuthor && matchesCategory && matchesSearch;
  });

  const filteredResources = digitalResources.filter(resource => {
    const matchesType = selectedResourceType === 'all' || resource.type === selectedResourceType;
    const matchesSearch = searchTerm === '' ||
      (language === 'mr' ? resource.titleMarathi : resource.title)
        .toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'book': return <Book className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      case 'audio': return <Headphones className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getResourceColor = (type: string) => {
    const colors = {
      book: 'bg-blue-100 text-blue-800',
      article: 'bg-green-100 text-green-800',
      video: 'bg-red-100 text-red-800',
      audio: 'bg-purple-100 text-purple-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('teachingsTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {language === 'mr'
              ? 'बुद्ध आणि डॉ. बाबासाहेब आंबेडकरांचे जीवन आणि शिकवणी. डिजिटल पुस्तके, लेख आणि व्हिडिओ.'
              : 'Life and teachings of Buddha and Dr. Babasaheb Ambedkar. Digital books, articles, and videos.'
            }
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('teachings')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'teachings'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-orange-600'
                  }`}
              >
                {t('buddhaTeachings')}
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'resources'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-orange-600'
                  }`}
              >
                {t('digitalResources')}
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'mr' ? 'शोधा...' : 'Search...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />

              {activeTab === 'teachings' ? (
                <>
                  <select
                    value={selectedAuthor}
                    onChange={(e) => setSelectedAuthor(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {authors.map(author => (
                      <option key={author.id} value={author.id}>
                        {author.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {teachingCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <select
                  value={selectedResourceType}
                  onChange={(e) => setSelectedResourceType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  {resourceTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {activeTab === 'teachings' ? (
            /* Teachings Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeachings.map((teaching) => (
                <div key={teaching.id} className="bg-white rounded-2xl shadow-lg p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-600">
                        {teaching.author === 'Buddha' ?
                          (language === 'mr' ? 'बुद्ध' : 'Buddha') :
                          (language === 'mr' ? 'डॉ. आंबेडकर' : 'Dr. Ambedkar')
                        }
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${teaching.category === 'teaching' ? 'bg-blue-100 text-blue-800' :
                        teaching.category === 'principle' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                      }`}>
                      {teachingCategories.find(cat => cat.id === teaching.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {language === 'mr' ? teaching.titleMarathi : teaching.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {language === 'mr' ? teaching.contentMarathi : teaching.content}
                  </p>

                  {teaching.source && (
                    <div className="text-sm text-gray-500 italic">
                      {language === 'mr' ? 'स्रोत:' : 'Source:'} {teaching.source}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Digital Resources Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                  <div className="relative">
                    <img
                      src={resource.thumbnail}
                      alt={language === 'mr' ? resource.titleMarathi : resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${getResourceColor(resource.type)}`}>
                        {getResourceIcon(resource.type)}
                        <span className="ml-1">
                          {resourceTypes.find(type => type.id === resource.type)?.name}
                        </span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                        {resource.language === 'both' ?
                          (language === 'mr' ? 'द्विभाषिक' : 'Bilingual') :
                          resource.language === 'mr' ? 'मराठी' : 'English'
                        }
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {language === 'mr' ? resource.titleMarathi : resource.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">
                      {language === 'mr' ? 'लेखक:' : 'Author:'} {language === 'mr' ? resource.authorMarathi : resource.author}
                    </p>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {language === 'mr' ? resource.descriptionMarathi : resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloadCount} {language === 'mr' ? 'डाउनलोड' : 'downloads'}
                      </div>

                      <button className="px-4 py-2 bg-blue-600 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors flex items-center">
                        {resource.type === 'video' ? <Play className="w-4 h-4 mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                        {resource.type === 'video' ?
                          (language === 'mr' ? 'पहा' : 'Watch') :
                          (language === 'mr' ? 'डाउनलोड' : 'Download')
                        }
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-orange-500 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed">
              {language === 'mr'
                ? 'शिक्षण हे सिंहिणीचे दूध आहे, जो त्याला पिऊ शकतो तो गर्जना करू शकतो.'
                : 'Education is the milk of lioness, whoever drinks it will roar.'
              }
            </blockquote>
            <cite className="text-xl text-orange-300">
              {language === 'mr' ? '- डॉ. बाबासाहेब आंबेडकर' : '- Dr. Babasaheb Ambedkar'}
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {language === 'mr' ? 'अधिक शिकवणी मिळवा' : 'Get More Teachings'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'mr'
              ? 'नवीन शिकवणी आणि संसाधनांसाठी आमच्या न्यूजलेटरची सदस्यता घ्या.'
              : 'Subscribe to our newsletter for new teachings and resources.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={language === 'mr' ? 'आपला ईमेल' : 'Your email'}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
              {language === 'mr' ? 'सदस्यता घ्या' : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingsPage;