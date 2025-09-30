import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '500+',
      title: language === 'mr' ? 'सक्रिय सदस्य' : 'Active Members',
      description: language === 'mr' ? 'आमच्या संघटनेत सक्रिय सहभाग घेणारे सदस्य' : 'Members actively participating in our organization'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '50+',
      title: language === 'mr' ? 'समुदायिक कार्यक्रम' : 'Community Programs',
      description: language === 'mr' ? 'समुदायाच्या कल्याणासाठी आयोजित केलेले कार्यक्रम' : 'Programs organized for community welfare'
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: '10+',
      title: language === 'mr' ? 'वर्षांचा अनुभव' : 'Years of Service',
      description: language === 'mr' ? 'सामुदायिक सेवेत दशकभराचा अनुभव' : 'A decade of dedicated community service'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '1000+',
      title: language === 'mr' ? 'जीवनात बदल' : 'Lives Impacted',
      description: language === 'mr' ? 'आमच्या कार्यामुळे प्रभावित झालेली जीवने' : 'Lives positively impacted by our work'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('aboutTitle')}</h1>
            <p className="text-xl leading-relaxed">
              {language === 'mr'
                ? 'आम्ही डॉ. बाबासाहेब आंबेडकरांच्या आदर्शांना आणि बौद्ध धर्माच्या मूल्यांना समर्पित आहोत. समानता, न्याय आणि शिक्षणाचे संदेश पसरवणे हे आमचे ध्येय आहे.'
                : 'We are dedicated to Dr. Babasaheb Ambedkar\'s ideals and Buddhist values. Our mission is to spread the message of equality, justice, and education in our community.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('historyTitle')}</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  {language === 'mr'
                    ? 'डॉ. बाबासाहेब आंबेडकर बौद्ध संस्कार मंडळाची स्थापना २०१४ मध्ये झाली. आमचे संस्थापक सदस्य डॉ. आंबेडकरांच्या विचारसरणीने प्रेरित होऊन या संघटनेची निर्मिती केली.'
                    : 'Dr. Babasaheb Ambedkar Bouddha Sanskar Mandal was established in 2014. Our founding members, inspired by Dr. Ambedkar\'s ideology, created this organization to serve the community.'
                  }
                </p>
                <p>
                  {language === 'mr'
                    ? 'गेल्या दशकात, आम्ही शिक्षण, आरोग्य, सामाजिक न्याय आणि बौद्ध धर्म प्रचारासाठी अनेक कार्यक्रम राबवले आहेत.'
                    : 'Over the past decade, we have implemented numerous programs for education, health, social justice, and Buddhist dharma propagation.'
                  }
                </p>
                <p>
                  {language === 'mr'
                    ? 'आमचे कार्य केवळ धार्मिक कार्यक्रमांपुरते मर्यादित नाही, तर सामाजिक बदल आणि समुदायिक विकासावरही केंद्रित आहे.'
                    : 'Our work is not limited to religious programs but also focuses on social change and community development.'
                  }
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6976901/pexels-photo-6976901.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Community gathering"
                className="rounded-lg shadow-lg hover-lift"
              />
              <img
                src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Meditation session"
                className="rounded-lg shadow-lg hover-lift mt-8"
              />
              <img
                src="https://images.pexels.com/photos/6995094/pexels-photo-6995094.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Community service"
                className="rounded-lg shadow-lg hover-lift -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/7978764/pexels-photo-7978764.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Buddhist ceremony"
                className="rounded-lg shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('achievementsTitle')}</h2>
            <p className="text-xl text-gray-600">
              {language === 'mr'
                ? 'गेल्या वर्षांत आमची उपलब्धी आणि समुदायावरील प्रभाव'
                : 'Our accomplishments and impact on the community over the years'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.number}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {language === 'mr' ? 'आमची मूल्ये' : 'Our Values'}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'mr'
                  ? 'बौद्ध धर्म आणि डॉ. आंबेडकरांच्या तत्त्वांवर आधारित मूल्ये'
                  : 'Values based on Buddhist principles and Dr. Ambedkar\'s teachings'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {language === 'mr' ? 'करुणा' : 'Compassion'}
                </h3>
                <p className="text-gray-600">
                  {language === 'mr'
                    ? 'सर्व जीवांप्रती करुणा आणि दयाभाव ठेवणे'
                    : 'Showing compassion and kindness to all living beings'
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {language === 'mr' ? 'समानता' : 'Equality'}
                </h3>
                <p className="text-gray-600">
                  {language === 'mr'
                    ? 'जाती, धर्म, लिंग यांच्या पलीकडे जाऊन सर्वांना समान मानणे'
                    : 'Treating everyone equally regardless of caste, religion, or gender'
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {language === 'mr' ? 'शिक्षण' : 'Education'}
                </h3>
                <p className="text-gray-600">
                  {language === 'mr'
                    ? 'शिक्षणाची महती आणि ज्ञानाचा प्रसार करणे'
                    : 'Promoting the importance of education and spreading knowledge'
                  }
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {language === 'mr' ? 'न्याय' : 'Justice'}
                </h3>
                <p className="text-gray-600">
                  {language === 'mr'
                    ? 'सामाजिक न्याय आणि मानवी हक्कांसाठी लढणे'
                    : 'Fighting for social justice and human rights'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;