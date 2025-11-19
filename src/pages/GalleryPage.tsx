import React, { useState } from 'react';
import { Play, Download, Calendar, Tag, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allGalleryItems } from '../data/mockData';

const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'festivals', name: language === 'mr' ? 'सण' : 'Festivals' },
    { id: 'meditation', name: language === 'mr' ? 'ध्यान' : 'Meditation' },
    { id: 'service', name: language === 'mr' ? 'सेवा' : 'Service' },
    { id: 'workshops', name: language === 'mr' ? 'कार्यशाळा' : 'Workshops' },
    { id: 'health', name: language === 'mr' ? 'आरोग्य' : 'Health' },
    { id: 'teachings', name: language === 'mr' ? 'शिकवणी' : 'Teachings' },
    { id: 'cultural', name: language === 'mr' ? 'सांस्कृतिक' : 'Cultural' },
    { id: 'education', name: language === 'mr' ? 'शिक्षण' : 'Education' }
  ];

  const types = [
    { id: 'all', name: language === 'mr' ? 'सर्व' : 'All' },
    { id: 'image', name: language === 'mr' ? 'फोटो' : 'Photos' },
    { id: 'video', name: language === 'mr' ? 'व्हिडिओ' : 'Videos' }
  ];

  const filteredItems = allGalleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesCategory && matchesType;
  });

  const openLightbox = (index: number) => setLightboxImage(index);
  const closeLightbox = () => setLightboxImage(null);
  const nextImage = () => lightboxImage !== null && setLightboxImage((lightboxImage + 1) % filteredItems.length);
  const prevImage = () => lightboxImage !== null && setLightboxImage((lightboxImage - 1 + filteredItems.length) % filteredItems.length);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('galleryTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {language === 'mr'
              ? 'कार्यक्रम, क्रियाकलाप आणि बौद्ध शिकवणी दर्शविणारे फोटो आणि व्हिडिओ संग्रहालय.'
              : 'Photo & Video archive showcasing events, activities, and Buddhist teachings.'}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                {language === 'mr' ? 'श्रेणी:' : 'Category:'}
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center space-x-2">
              <Tag className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                {language === 'mr' ? 'प्रकार:' : 'Type:'}
              </span>
              <div className="flex space-x-2">
                {types.map(type => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${selectedType === type.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'}`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                  <div className="relative aspect-square">
                    {/* ✅ Show video or image */}
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={language === 'mr' ? item.titleMarathi : item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                        <button
                          onClick={() => openLightbox(index)}
                          className="bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
                        >
                          {item.type === 'video' ? <Play className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.type === 'video'
                        ? 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'}`}>
                        {item.type === 'video'
                          ? (language === 'mr' ? 'व्हिडिओ' : 'Video')
                          : (language === 'mr' ? 'फोटो' : 'Photo')}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                      {language === 'mr' ? item.titleMarathi : item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {language === 'mr' ? item.descriptionMarathi : item.description}
                    </p>
                    <div className="mt-2">
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {categories.find(cat => cat.id === item.category)?.name || item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl text-gray-500">
                {language === 'mr' ? 'या श्रेणीत कोणतेही आयटम नाहीत' : 'No items found in this category'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ✅ Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative">
              {filteredItems[lightboxImage].type === 'video' ? (
                <video
                  src={filteredItems[lightboxImage].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <img
                  src={filteredItems[lightboxImage].src}
                  alt={language === 'mr' ? filteredItems[lightboxImage].titleMarathi : filteredItems[lightboxImage].title}
                  className="max-w-full max-h-full object-contain"
                />
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {language === 'mr' ? filteredItems[lightboxImage].titleMarathi : filteredItems[lightboxImage].title}
                </h3>
                <p className="text-sm opacity-90">
                  {language === 'mr'
                    ? filteredItems[lightboxImage].descriptionMarathi
                    : filteredItems[lightboxImage].description}
                </p>
                <div className="flex items-center justify-between mt-2 text-xs opacity-75">
                  <span>{new Date(filteredItems[lightboxImage].date).toLocaleDateString()}</span>
                  <span>{lightboxImage + 1} / {filteredItems.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'mr' ? 'आपले फोटो शेअर करा' : 'Share Your Photos'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'mr'
              ? 'आमच्या कार्यक्रमांचे आणि क्रियाकलापांचे फोटो आणि व्हिडिओ आमच्यासोबत शेअर करा.'
              : 'Share your photos and videos from our events and activities with us.'}
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift">
            {language === 'mr' ? 'फोटो अपलोड करा' : 'Upload Photos'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
