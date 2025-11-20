import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Bhante: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6">
                        {language === 'mr' ? 'भन्ते' : 'Bhante'}
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        {language === 'mr'
                            ? 'आमचे आदरणीय भन्ते, ज्यांनी आपले संपूर्ण आयुष्य धम्माचा प्रचार आणि समाजाच्या उन्नतीसाठी समर्पित केले आहे.'
                            : 'Our respected Bhante, who has dedicated his life to spreading the Dhamma and uplifting the community.'}
                    </p>
                </div>
            </section>

            {/* Bhante Profile Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Bhante Photo */}
                        <div className="flex justify-center">
                            <img
                                // src="https://images.pexels.com/photos/8978175/pexels-photo-8978175.jpeg?auto=compress&cs=tinysrgb&w=600"
                                src=""
                                alt="Bhante"
                                className="rounded-2xl shadow-lg w-full max-w-sm object-cover hover-lift transition-all"
                            />
                        </div>

                        {/* Bhante Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                {language === 'mr' ? 'पूज्य भदन्त प्रा. डॉ. यशकश्यपायन महास्थवीर' : 'Venerable Bhante Prof. Dr. Yashkashyapayan Mahasthavir'}
                            </h2>
                            <h3 className="text-lg text-blue-600 font-semibold mb-6">
                                {language === 'mr'
                                    ? 'वरिष्ठ भन्ते, ध्यान व धम्म शिक्षक'
                                    : 'Senior Monk, Meditation & Dhamma Teacher'}
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'mr'
                                    ? 'भन्ते आनंद थेर यांनी गेली १५ वर्षे बौद्ध धम्माच्या प्रचारासाठी आणि समाज upliftment साठी कार्य केले आहे. त्यांनी ध्यान, आचरण आणि नैतिकतेवर आधारित जीवन जगण्याचा संदेश दिला आहे.'
                                    : 'Bhante Anand Thera has spent over 15 years spreading the Dhamma and serving the community. He teaches the importance of living a life rooted in meditation, discipline, and moral values.'}
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                {language === 'mr'
                                    ? 'भन्ते यांचा उद्देश लोकांना आंतरिक शांतता, समता आणि करुणेच्या मार्गावर नेणे आहे. ते नियमितपणे ध्यान सत्रे, प्रवचन आणि सामुदायिक सेवा उपक्रम आयोजित करतात.'
                                    : 'His goal is to guide people toward inner peace, equality, and compassion. He regularly conducts meditation sessions, Dhamma talks, and community service activities.'}
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                {language === 'mr'
                                    ? 'त्यांच्या मार्गदर्शनाखाली अनेक लोकांनी बौद्ध तत्त्वज्ञान स्वीकारले आणि आपले जीवन सकारात्मकपणे बदलले आहे.'
                                    : 'Under his guidance, many individuals have embraced Buddhist philosophy and transformed their lives positively.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Message Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <blockquote className="italic text-xl text-gray-700 border-l-4 border-orange-500 pl-6">
                        {language === 'mr'
                            ? '“धम्माचा खरा अर्थ म्हणजे आत्मविकास, शांती आणि समाजसेवा.”'
                            : '“The true essence of Dhamma is self-development, peace, and service to others.”'}
                    </blockquote>
                    <p className="mt-4 text-blue-700 font-semibold">
                        — {language === 'mr' ? 'पूज्य भदन्त प्रा. डॉ. यशकश्यपायन महास्थवीर' : 'Venerable Bhante Prof. Dr. Yashkashyapayan Mahasthavir'}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Bhante;
