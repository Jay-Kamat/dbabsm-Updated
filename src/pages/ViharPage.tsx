import React, { useState } from 'react';
import { Building, Calendar, TrendingUp, Heart, Download, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { viharUpdates, donationTiers } from '../data/mockData';

const ViharPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [showDonationForm, setShowDonationForm] = useState(false);

  const totalProgress = 75; // Overall project progress
  const totalRaised = 2500000; // Amount raised in rupees
  const targetAmount = 5000000; // Target amount in rupees

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDonation = (tierId: string) => {
    setSelectedTier(tierId);
    setShowDonationForm(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('viharTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {language === 'mr' 
              ? 'नवीन विहार बांधकाम प्रकल्पाचे तपशीलवार अपडेट्स. स्थापत्य योजना, प्रगती अपडेट्स आणि देणगी तपशील.'
              : 'Detailed updates on the new Vihar building project. Architectural plans, progress updates, and donation details.'
            }
          </p>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Overall Progress */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{totalProgress}%</h3>
              <p className="text-gray-600">
                {language === 'mr' ? 'एकूण प्रगती' : 'Overall Progress'}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>

            {/* Funds Raised */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{formatCurrency(totalRaised)}</h3>
              <p className="text-gray-600">
                {language === 'mr' ? 'गोळा केलेली रक्कम' : 'Funds Raised'}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(totalRaised / targetAmount) * 100}%` }}
                />
              </div>
            </div>

            {/* Target Amount */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{formatCurrency(targetAmount)}</h3>
              <p className="text-gray-600">
                {language === 'mr' ? 'लक्ष्य रक्कम' : 'Target Amount'}
              </p>
              <p className="text-sm text-orange-600 mt-2">
                {formatCurrency(targetAmount - totalRaised)} {language === 'mr' ? 'बाकी' : 'remaining'}
              </p>
            </div>
          </div>

          {/* Architectural Plans */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {language === 'mr' ? 'स्थापत्य योजना' : 'Architectural Plans'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Architectural Plan"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {language === 'mr' ? 'मुख्य हॉल डिझाइन' : 'Main Hall Design'}
                </h3>
                <p className="text-gray-600">
                  {language === 'mr' 
                    ? 'पारंपारिक बौद्ध स्थापत्यकलेसह आधुनिक सुविधांचा समावेश असलेला मुख्य प्रार्थना हॉल.'
                    : 'Main prayer hall incorporating traditional Buddhist architecture with modern amenities.'
                  }
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Meditation Hall"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {language === 'mr' ? 'ध्यान हॉल' : 'Meditation Hall'}
                </h3>
                <p className="text-gray-600">
                  {language === 'mr' 
                    ? 'शांत वातावरणात ध्यान आणि आध्यात्मिक अभ्यासासाठी विशेष डिझाइन केलेला हॉल.'
                    : 'Specially designed hall for meditation and spiritual practices in a serene environment.'
                  }
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors hover-lift inline-flex items-center">
                <Download className="w-5 h-5 mr-2" />
                {language === 'mr' ? 'संपूर्ण योजना डाउनलोड करा' : 'Download Complete Plans'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Updates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            {t('constructionProgress')}
          </h2>
          
          <div className="space-y-8">
            {viharUpdates.map((update, index) => (
              <div key={update.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={update.images[0]}
                      alt={language === 'mr' ? update.titleMarathi : update.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-orange-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(update.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${update.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{update.progress}%</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {language === 'mr' ? update.titleMarathi : update.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {language === 'mr' ? update.descriptionMarathi : update.description}
                    </p>
                    
                    {update.images.length > 1 && (
                      <div className="flex space-x-2">
                        {update.images.slice(1).map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`Update ${imgIndex + 2}`}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {language === 'mr' ? 'देणगी योजना' : 'Donation Plans'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'mr' 
                ? 'विहार बांधकामात योगदान देऊन पुण्य कमावा आणि समुदायाच्या आध्यात्मिक विकासात सहभागी व्हा.'
                : 'Contribute to the Vihar construction and be part of the community\'s spiritual development.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier) => (
              <div key={tier.id} className="bg-white rounded-2xl shadow-lg p-6 hover-lift border-2 border-transparent hover:border-orange-200">
                <div className={`w-12 h-12 ${tier.color} rounded-full flex items-center justify-center mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {language === 'mr' ? tier.nameMarathi : tier.name}
                </h3>
                
                <div className="text-3xl font-bold text-gray-800 mb-4">
                  {formatCurrency(tier.amount)}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {(language === 'mr' ? tier.benefitsMarathi : tier.benefits).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleDonation(tier.id)}
                  className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  {language === 'mr' ? 'देणगी द्या' : 'Donate Now'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Modal */}
      {showDonationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {language === 'mr' ? 'देणगी फॉर्म' : 'Donation Form'}
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'mr' ? 'देणगी रक्कम' : 'Donation Amount'}
                </label>
                <input
                  type="number"
                  required
                  min="100"
                  defaultValue={selectedTier ? donationTiers.find(t => t.id === selectedTier)?.amount : ''}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  {language === 'mr' ? 'देणगी द्या' : 'Donate'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowDonationForm(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {language === 'mr' ? 'रद्द करा' : 'Cancel'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'mr' ? 'विहार बांधकामात सहभागी व्हा' : 'Be Part of Vihar Construction'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'mr' 
              ? 'आपल्या योगदानाने आम्ही एक सुंदर आणि शांत विहार बांधू शकतो जो भावी पिढ्यांसाठी आध्यात्मिक केंद्र बनेल.'
              : 'With your contribution, we can build a beautiful and peaceful Vihar that will serve as a spiritual center for future generations.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowDonationForm(true)}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift inline-flex items-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              {language === 'mr' ? 'आता देणगी द्या' : 'Donate Now'}
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition-colors hover-lift inline-flex items-center">
              <Users className="w-5 h-5 mr-2" />
              {language === 'mr' ? 'स्वयंसेवक बना' : 'Become a Volunteer'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViharPage;