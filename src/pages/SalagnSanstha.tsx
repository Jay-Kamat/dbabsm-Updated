import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
    BookOpenText,
    Landmark,
    HeartHandshake,
    Users2,
} from 'lucide-react';

const SalagnSanstha: React.FC = () => {
    const { language } = useLanguage();

    const affiliated = [
        {
            icon: <BookOpenText className="w-8 h-8" />,
            gradient: 'from-orange-500 to-yellow-500',
            title: language === 'mr' ? 'नालंदा सार्वजनिक ग्रंथालय' : 'Nalanda Public Library',
            desc: language === 'mr'
                ? 'बुद्ध, धम्म, संघ यांची अनुक्रमे व विश्वविख्यात व्यक्तींच्या डॉ. बाबासाहेब आंबेडकर यांच्या आदर्शांचा प्रभाव लोकांवर पडण्यासाठी डॉ. बाबासाहेब आंबेडकर संस्कार मंडळाने सन २००८ मध्ये नालंदा सार्वजनिक ग्रंथालयाची स्थापना केली आहे. यामध्ये शहर व परिसरातील वाचकांसाठी बौद्ध धम्म व डॉ. बाबासाहेब आंबेडकर यांच्या विषयांवरील ग्रंथांची संपन्न अशी संख्या आहे. तसेच बालकांकरिता, महिला व इतर नागरिकांसाठी तसेच विद्यार्थ्यांसाठी विविध स्पर्धात्मक पुस्तकें व संदर्भ ग्रंथ ठेवण्यात आले आहेत. सध्या ग्रंथालयामध्ये सुमारे १५०० इतकी पुस्तके आहेत. सभासद संख्या १०० असून विद्यार्थ्यांसाठी स्वतंत्र अभ्यासिकेची सोय आहे. या अभ्यासिकेतिल ५ विद्यार्थी एम.पी.एस.सी. व यू.पी.एस.सी. परीक्षा पास होऊन महाराष्ट्र शासन व केंद्रशासन सेवेमध्ये रुजू झाले आहेत. ही बाब या ग्रंथालयासाठी अभिमानाची गोष्ट आहे.अशोक सामाजिक संस्था (नांदेड) मार्फत आयोजित देशभर राबवले असलेला १८ तास अभ्यास अभियान हा उपक्रमही ग्रंथालयाच्या वतीने राबविण्यात आला. गेल्या वर्षी ३० विद्यार्थ्यांनी यात भाग घेऊन डॉ. बाबासाहेबांना अभिवादन केले. त्यांचे सर्व व्यवस्थापन संस्थेच्या वतीने करण्यात आले.'
                : 'The Nalanda Public Library was founded in 2008 to spread the teachings of Buddha, Dhamma, and Dr. Ambedkar’s ideals. It holds over 1,500 books on Buddhism, Ambedkarite thought, and educational materials. Around 100 members use its reading facilities, and five students have passed MPSC/UPSC exams. It also ran the nationwide “18-Hour Study Campaign” by Ashok Social Organization (Nanded).',
        },
        {
            icon: <Landmark className="w-8 h-8" />,
            gradient: 'from-green-600 to-emerald-400',
            title: language === 'mr' ? 'पंचशील नागरी सहकारी पतसंस्था मर्यादित, जयसिंगपूर' : 'Panchsheel Urban Cooperative Credit Society Ltd, Jaysingpur',
            desc: language === 'mr'
                ? 'राजर्षी शाहू महाराजांनी देशात ‘सहकार बिना नाही उद्धार’ ही प्रतिमा निर्माण केली. सहकार चळवळीने आर्थिक, सामाजिक, शैक्षणिक क्षेत्रात आमूलाग्र बदल केला. सह. साखर कारखाने, सुतगिरण्या सुरु झाल्या. कुशल-अकुशल तरुणांना रोजगार मिळून त्यांचे आर्थिक जीवनमान उंचावले. या संस्थेने शैक्षणिक संस्था, सहकारी ग्राहक भांडार, निर्मिती करून वस्तूंच्या गुणवत्तेत उत्तम वस्तूंचा पुरवठा केला जात आहे. सहकार चळवळीने सामान्यांच्या जीवनमानात अमूल्य लाभ दिला. डॉ. बाबासाहेब आंबेडकर बौद्ध संस्कार मंडळ आणि परिवारातील सदस्यांनी आपल्या आर्थिक गरजांच्या पूर्ततेसाठी क.क.पू. आ. कांबळेसाहेब यांच्या नेतृत्वाखाली दिनांक १५/०२/१९९५ रोजी पंचशील नागरी सहकारी पतसंस्थेची स्थापना केली. ‘पंचशील’ अंगीकारून सामाजिक बांधिलकी जोपासत आणि सहकारी कार्यपद्धतीचे पालन करत संस्था सध्या सुरु आहे. आर्थिक दुर्बल असणाऱ्यांना कर्ज वाटप करणे हे संस्थेचे ध्येय आहे.'
                : 'Rajarshi Shahu Maharaj’s vision “No progress without cooperation” inspired this movement. Established in 1995 under A. Kamble Saheb, this society uplifts weaker sections through savings, financial aid, and cooperative principles. It plays a key role in local economic empowerment and self-reliance.',
        },
        {
            icon: <HeartHandshake className="w-8 h-8" />,
            gradient: 'from-pink-500 to-rose-400',
            title: language === 'mr' ? 'सुमंगल बौद्ध-वर संमेलन केंद्र' : 'Sumangal Buddhist Marriage & Community Center',
            desc: language === 'mr'
                ? 'डॉ. बाबासाहेब आंबेडकर बौद्ध संस्कार मंडळाने बौद्ध समाजातील लोकांच्या बौद्ध-वर निवड व इतर सामाजिक समस्या सोडविण्यासाठी आणि बौद्ध-वरांच्या योग्य मार्गदर्शन करण्यासाठी व त्यांना सुसंस्कृत पद्धतीने विवाह नोंदणी करता यावी म्हणून सन २००२ मध्ये सुमंगल बौद्ध-वर संमेलन केंद्र स्थापन केले आहे. या केंद्राच्या माध्यमातून कल्याण, सांगली, सातारा, पुणे, मुंबई, सोलापूर, रत्नागिरी, कोल्हापूर अशा विविध जिल्ह्यातील युवक-युवतींना आपसात विवाहसंस्थेच्या माध्यमातून परिचय करून देऊन समाजात आजवर सुमारे १००० हून अधिक विवाह यशस्वीरीत्या पार पाडण्यात आले आहेत. मंगल वातावरणात, शांत परिसरात आणि सौम्यतेने सुसंस्कारित अशा हॉल मध्ये बौद्ध विवाह, नामकरण, सामाजिक सोहळे यासाठी सर्वांना आनंददायी वातावरण प्राप्त होते.'
                : 'Established in 2002, the Sumangal Center connects Buddhist youths for matrimonial purposes and resolves related social issues. It has successfully organized over 1,000 marriages across Maharashtra, offering a serene venue for weddings, naming ceremonies, and community gatherings.',
        },
        {
            icon: <Users2 className="w-8 h-8" />,
            gradient: 'from-purple-600 to-indigo-500',
            title: language === 'mr' ? 'रमाई उपासिका संघ' : 'Ramai Upasika Sangh',
            desc: language === 'mr'
                ? '‘रमाई’ चा आदर्श महिलांपुढे उभा राहावा या हेतूने पु. भ. दीपंकर महाथेरो यांच्या प्रेरणेने रमाई उपासिका संघाची स्थापना करण्यात आली आहे. या संघाच्या वतीने वर्धापन दिन म्हणून साजरा करणे, यावेळी पूजाभाव, वंदना झाल्यानंतर सर्व उपासकांना खिरदान देणे तसेच धम्म परिसरांच्यावेळी सजावटपासून ते शिस्तीपर्यंत तसेच भंडाऱ्याचे भोजनदान अशा कार्यक्रमांमध्ये संघ तत्पर असतो. मंडळातील महिला धडाडीच्या व प्रयत्नवादी आहेत. धम्म विचाराने प्रेरित झालेला ध्येयवादी महिला संघ नेहमीच डॉ. बाबासाहेब आंबेडकर जयंती, बुद्ध पौर्णिमा, वर्षावास या कार्यक्रमांमध्ये हिरिरीने सहभाग घेत असतो. यावेळी लहान मुलांवर संस्कार करण्यासाठी तसेच महिलांवरही धम्म संस्कार होण्यासाठी विविध स्पर्धांचे आयोजन करतात. १० रु. मासिक गणगीतातून दान स्वरूपात मिळणारी सर्व रक्कम पंचशील पतसंस्थेमध्ये ठेवली आहे. यातून ४० हजार रुपये एवढी बचत केली आहे. जयसिंगपूरच्या महाबोधी विहारासाठी १ लाख रुपयांचा निधी गोळा करण्यास मान्यता आहे. या संघाच्या माध्यमातून विविध उपक्रम राबविले जातात त्यामध्ये आरोग्य शिबीर, महिला बचत गटांना मार्गदर्शन करणे तसेच बौद्ध संस्कार मंडळाने घेतलेल्या सर्व कार्यक्रमांमध्ये रमाई उपासिका संघ नेहमीच आघाडीवर असतो. या संघाच्या अध्यक्षा आयु. रंजन बाळकृष्ण तसेच आयु. सुमन कांबळे, मिष्मिला कांबळे यांच्या कुशल मार्गदर्शनाखाली संघाचे कामकाज कार्यक्षम पद्धतीने सुरु आहे.'
                : 'Founded under Ven. Dipankar Mahathero’s guidance, this association empowers women through Dhamma-based activities, health drives, and competitions promoting compassion and equality. Under Ay. Ranjana Balkrushna’s leadership, it continues to be a pillar of women’s empowerment within the Mandal.',
        },
    ];

    return (
        <div className="min-h-screen pt-16 bg-white">
            {/* Hero Section */}
            <section className="py-20 gradient-bg text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6">
                        {language === 'mr' ? 'सलग्न संस्था' : 'Affiliated Organizations'}
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                        {language === 'mr'
                            ? 'संस्थेच्या कार्यात सहकार्य करणाऱ्या अनेक सलग्न संघटना समाजाच्या विविध स्तरांवर कार्यरत आहेत.'
                            : 'Several affiliated organizations collaborate in our mission to serve different sectors of society.'}
                    </p>
                </div>
            </section>

            {/* Organization Cards */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {affiliated.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                <p className="text-gray-700 text-sm text-justify leading-relaxed whitespace-pre-line">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SalagnSanstha;
