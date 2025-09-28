import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(language === 'mr' ? 'संदेश पाठवला गेला!' : 'Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('contactTitle')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {language === 'mr' 
              ? 'आम्ही आपल्याशी संवाद साधण्यास उत्सुक आहोत. कृपया आपले प्रश्न, सूचना किंवा अभिप्राय आमच्याशी शेअर करा.'
              : 'We\'re excited to hear from you. Please share your questions, suggestions, or feedback with us.'
            }
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('getInTouch')}</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('address')}</h3>
                    <p className="text-gray-600">
                      123 Buddhism Street<br />
                      Ambedkar Nagar<br />
                      Maharashtra 411001<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('phone')}</h3>
                    <p className="text-gray-600">+91 12345 67890</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('email')}</h3>
                    <p className="text-gray-600">info@ambedkarmandal.org</p>
                    <p className="text-gray-600">contact@ambedkarmandal.org</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {language === 'mr' ? 'कार्यवेळ' : 'Office Hours'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'mr' ? 'सोमवार - शनिवार: 9:00 AM - 6:00 PM' : 'Monday - Saturday: 9:00 AM - 6:00 PM'}
                    </p>
                    <p className="text-gray-600">
                      {language === 'mr' ? 'रविवार: 10:00 AM - 4:00 PM' : 'Sunday: 10:00 AM - 4:00 PM'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">
                  {language === 'mr' ? 'नकाशा येथे दिसेल' : 'Interactive Map Coming Soon'}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('sendMessage')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'mr' ? 'नाव' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder={language === 'mr' ? 'आपले पूर्ण नाव' : 'Your full name'}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'mr' ? 'ईमेल' : 'Email'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder={language === 'mr' ? 'आपला ईमेल' : 'Your email'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'mr' ? 'फोन' : 'Phone'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder={language === 'mr' ? 'आपला फोन नंबर' : 'Your phone number'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'mr' ? 'विषय' : 'Subject'}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">{language === 'mr' ? 'विषय निवडा' : 'Select subject'}</option>
                      <option value="membership">{language === 'mr' ? 'सदस्यत्व' : 'Membership'}</option>
                      <option value="events">{language === 'mr' ? 'कार्यक्रम' : 'Events'}</option>
                      <option value="donation">{language === 'mr' ? 'देणगी' : 'Donation'}</option>
                      <option value="general">{language === 'mr' ? 'सामान्य चौकशी' : 'General Inquiry'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'mr' ? 'संदेश' : 'Message'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      placeholder={language === 'mr' ? 'आपला संदेश इथे लिहा...' : 'Write your message here...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors hover-lift flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('sendMessage')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;