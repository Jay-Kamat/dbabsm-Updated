import { Member, Event, Activity, GalleryItem, Teaching } from '../types';

export const members: Member[] = [
  {
    id: '1',
    name: 'Rajesh Kumar Sharma',
    nameMarathi: 'राजेश कुमार शर्मा',
    role: 'President',
    roleMarathi: 'अध्यक्ष',
    photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    contact: '+91 98765 43210',
    email: 'president@ambedkarmandal.org'
  },
  {
    id: '2',
    name: 'Priya Devi Patil',
    nameMarathi: 'प्रिया देवी पाटील',
    role: 'Secretary',
    roleMarathi: 'सचिव',
    photo: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    contact: '+91 87654 32109',
    email: 'secretary@ambedkarmandal.org'
  },
  {
    id: '3',
    name: 'Amit Singh Jadhav',
    nameMarathi: 'अमित सिंग जाधव',
    role: 'Treasurer',
    roleMarathi: 'खजिनदार',
    photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    contact: '+91 76543 21098',
    email: 'treasurer@ambedkarmandal.org'
  },
  {
    id: '4',
    name: 'Sunita Bai More',
    nameMarathi: 'सुनिता बाई मोरे',
    role: 'Vice President',
    roleMarathi: 'उपाध्यक्ष',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    contact: '+91 65432 10987',
    email: 'vicepresident@ambedkarmandal.org'
  },
  {
    id: '5',
    name: 'Prakash Ramesh Gaikwad',
    nameMarathi: 'प्रकाश रमेश गायकवाड',
    role: 'Cultural Secretary',
    roleMarathi: 'सांस्कृतिक सचिव',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    contact: '+91 54321 09876',
    email: 'cultural@ambedkarmandal.org'
  },
  {
    id: '6',
    name: 'Kavita Ashok Kamble',
    nameMarathi: 'कविता अशोक कांबळे',
    role: 'Women\'s Wing Coordinator',
    roleMarathi: 'महिला शाखा समन्वयक',
    photo: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    contact: '+91 43210 98765',
    email: 'women@ambedkarmandal.org'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Buddha Purnima Celebration 2024',
    titleMarathi: 'बुद्ध पूर्णिमा उत्सव 2024',
    description: 'Join us for the grand celebration of Buddha Purnima with meditation, prayers, and cultural programs.',
    descriptionMarathi: 'ध्यान, प्रार्थना आणि सांस्कृतिक कार्यक्रमांसह बुद्ध पूर्णिमेच्या भव्य उत्सवात सामील व्हा.',
    date: '2024-05-23',
    time: '06:00 AM - 08:00 PM',
    location: 'Community Hall, Ambedkar Nagar',
    locationMarathi: 'सामुदायिक हॉल, आंबेडकर नगर',
    image: 'https://images.pexels.com/photos/6976901/pexels-photo-6976901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'festival'
  },
  {
    id: '2',
    title: 'Dr. Ambedkar Jayanti',
    titleMarathi: 'डॉ. आंबेडकर जयंती',
    description: 'Commemorating the birth anniversary of Dr. B.R. Ambedkar with lectures and discussions.',
    descriptionMarathi: 'व्याख्यान आणि चर्चेसह डॉ. बी.आर. आंबेडकरांची जयंती साजरी करणे.',
    date: '2024-04-14',
    time: '09:00 AM - 06:00 PM',
    location: 'Ambedkar Bhawan',
    locationMarathi: 'आंबेडकर भवन',
    image: 'https://images.pexels.com/photos/6976900/pexels-photo-6976900.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'educational'
  },
  {
    id: '3',
    title: 'Community Welfare Drive',
    titleMarathi: 'सामुदायिक कल्याण अभियान',
    description: 'Monthly community service initiative including free health checkups and educational workshops.',
    descriptionMarathi: 'विनामूल्य आरोग्य तपासणी आणि शैक्षणिक कार्यशाळांसह मासिक सामुदायिक सेवा उपक्रम.',
    date: '2024-03-15',
    time: '10:00 AM - 04:00 PM',
    location: 'Various Locations',
    locationMarathi: 'विविध ठिकाणी',
    image: 'https://images.pexels.com/photos/6995094/pexels-photo-6995094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'community'
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Weekly Meditation Sessions',
    titleMarathi: 'साप्ताहिक ध्यान सत्र',
    description: 'Regular meditation sessions to promote mental peace and spiritual growth.',
    descriptionMarathi: 'मानसिक शांती आणि आध्यात्मिक विकासासाठी नियमित ध्यान सत्रे.',
    images: [
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/7978764/pexels-photo-7978764.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'meditation',
    date: '2024-02-01'
  },
  {
    id: '2',
    title: 'Educational Awareness Program',
    titleMarathi: 'शैक्षणिक जागरूकता कार्यक्रम',
    description: 'Programs focused on spreading awareness about education and social rights.',
    descriptionMarathi: 'शिक्षण आणि सामाजिक हक्कांबद्दल जागरूकता पसरवण्यावर केंद्रित कार्यक्रम.',
    images: [
      'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'awareness',
    date: '2024-01-15'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.pexels.com/photos/6976901/pexels-photo-6976901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Buddha Purnima Celebration',
    titleMarathi: 'बुद्ध पूर्णिमा उत्सव',
    description: 'Community gathering for Buddha Purnima',
    descriptionMarathi: 'बुद्ध पूर्णिमेसाठी सामुदायिक मेळावा',
    category: 'festivals',
    date: '2024-05-23'
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Meditation Session',
    titleMarathi: 'ध्यान सत्र',
    description: 'Weekly community meditation',
    descriptionMarathi: 'साप्ताहिक सामुदायिक ध्यान',
    category: 'meditation',
    date: '2024-02-01'
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.pexels.com/photos/6995094/pexels-photo-6995094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Community Service',
    titleMarathi: 'सामुदायिक सेवा',
    description: 'Monthly welfare activities',
    descriptionMarathi: 'मासिक कल्याणकारी क्रियाकलाप',
    category: 'service',
    date: '2024-03-15'
  }
];

export const teachings: Teaching[] = [
  {
    id: '1',
    title: 'The Four Noble Truths',
    titleMarathi: 'चार आर्य सत्ये',
    author: 'Buddha',
    content: 'The Four Noble Truths are the foundation of Buddhist teaching. They explain the nature of suffering and the path to liberation.',
    contentMarathi: 'चार आर्य सत्ये बौद्ध शिकवणीचा पाया आहेत. ते दुःखाचे स्वरूप आणि मुक्तीचा मार्ग स्पष्ट करतात.',
    category: 'teaching',
    source: 'Dhammacakkappavattana Sutta'
  },
  {
    id: '2',
    title: 'Educate, Agitate, Organize',
    titleMarathi: 'शिक्षा घ्या, संघटित व्हा, संघर्ष करा',
    author: 'Ambedkar',
    content: 'Dr. Ambedkar\'s famous mantra for social transformation and empowerment of the oppressed.',
    contentMarathi: 'सामाजिक बदल आणि दडपशाहीतील लोकांच्या सशक्तिकरणासाठी डॉ. आंबेडकरांचा प्रसिद्ध मंत्र.',
    category: 'principle',
    source: 'Dr. Ambedkar\'s Speeches'
  },
  {
    id: '3',
    title: 'The Noble Eightfold Path',
    titleMarathi: 'आष्टांगिक मार्ग',
    author: 'Buddha',
    content: 'The Eightfold Path is the way to end suffering and achieve enlightenment. It consists of right understanding, intention, speech, action, livelihood, effort, mindfulness, and concentration.',
    contentMarathi: 'आष्टांगिक मार्ग हा दुःख संपवून ज्ञान प्राप्त करण्याचा मार्ग आहे. यात सम्यक दृष्टी, संकल्प, वाणी, कर्म, आजीविका, व्यायाम, स्मृती आणि समाधी यांचा समावेश आहे.',
    category: 'teaching',
    source: 'Dhammacakkappavattana Sutta'
  },
  {
    id: '4',
    title: 'Religion is for Man',
    titleMarathi: 'धर्म माणसासाठी आहे',
    author: 'Ambedkar',
    content: 'Dr. Ambedkar believed that religion should serve humanity and promote equality, not create divisions or support oppression.',
    contentMarathi: 'डॉ. आंबेडकरांचा असा विश्वास होता की धर्माने मानवतेची सेवा करावी आणि समानतेला प्रोत्साहन द्यावे, विभाजन निर्माण करू नये किंवा दडपशाहीला पाठिंबा देऊ नये.',
    category: 'principle',
    source: 'The Buddha and His Dhamma'
  },
  {
    id: '5',
    title: 'Compassion for All Beings',
    titleMarathi: 'सर्व प्राण्यांवर करुणा',
    author: 'Buddha',
    content: 'Buddhism teaches us to have compassion for all living beings, as all beings seek happiness and wish to avoid suffering.',
    contentMarathi: 'बौद्ध धर्म आपल्याला सर्व जीवांवर करुणा ठेवण्यास शिकवतो, कारण सर्व प्राणी सुख शोधतात आणि दुःख टाळू इच्छितात.',
    category: 'teaching',
    source: 'Metta Sutta'
  },
  {
    id: '6',
    title: 'Education is the Milk of Lioness',
    titleMarathi: 'शिक्षण हे सिंहिणीचे दूध आहे',
    author: 'Ambedkar',
    content: 'Dr. Ambedkar emphasized that education is the most powerful tool for social transformation and individual empowerment.',
    contentMarathi: 'डॉ. आंबेडकरांनी भर दिला की शिक्षण हे सामाजिक बदल आणि वैयक्तिक सशक्तिकरणासाठी सर्वात शक्तिशाली साधन आहे.',
    category: 'quote',
    source: 'Dr. Ambedkar\'s Speeches'
  }
];

// Extended Events Data
export const allEvents: Event[] = [
  ...events,
  {
    id: '4',
    title: 'Dhamma Chakra Pravartan Din',
    titleMarathi: 'धम्म चक्र प्रवर्तन दिन',
    description: 'Commemorating Dr. Ambedkar\'s historic conversion to Buddhism with special prayers and discussions.',
    descriptionMarathi: 'डॉ. आंबेडकरांच्या ऐतिहासिक बौद्ध धर्म स्वीकाराच्या स्मरणार्थ विशेष प्रार्थना आणि चर्चा.',
    date: '2024-10-14',
    time: '08:00 AM - 06:00 PM',
    location: 'Deekshabhoomi, Nagpur',
    locationMarathi: 'दीक्षाभूमी, नागपूर',
    image: 'https://images.pexels.com/photos/6976900/pexels-photo-6976900.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'festival'
  },
  {
    id: '5',
    title: 'Meditation Workshop for Beginners',
    titleMarathi: 'नवशिक्यांसाठी ध्यान कार्यशाळा',
    description: 'Learn the basics of Buddhist meditation techniques and mindfulness practices.',
    descriptionMarathi: 'बौद्ध ध्यान तंत्र आणि सजगता अभ्यासाची मूलभूत माहिती शिका.',
    date: '2024-04-20',
    time: '10:00 AM - 04:00 PM',
    location: 'Community Center',
    locationMarathi: 'सामुदायिक केंद्र',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'educational'
  },
  {
    id: '6',
    title: 'Blood Donation Camp',
    titleMarathi: 'रक्तदान शिबिर',
    description: 'Annual blood donation drive to serve the community and save lives.',
    descriptionMarathi: 'समुदायाची सेवा करण्यासाठी आणि जीव वाचवण्यासाठी वार्षिक रक्तदान मोहीम.',
    date: '2024-05-01',
    time: '09:00 AM - 05:00 PM',
    location: 'Local Hospital',
    locationMarathi: 'स्थानिक रुग्णालय',
    image: 'https://images.pexels.com/photos/6995094/pexels-photo-6995094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'community'
  }
];

// Vihar Construction Data
export interface ViharUpdate {
  id: string;
  title: string;
  titleMarathi: string;
  date: string;
  description: string;
  descriptionMarathi: string;
  images: string[];
  progress: number;
  category: 'foundation' | 'structure' | 'interior' | 'completion';
}

export interface DonationTier {
  id: string;
  name: string;
  nameMarathi: string;
  amount: number;
  benefits: string[];
  benefitsMarathi: string[];
  color: string;
}

export const viharUpdates: ViharUpdate[] = [
  {
    id: '1',
    title: 'Foundation Work Completed',
    titleMarathi: 'पायाभरणीचे काम पूर्ण',
    date: '2024-01-15',
    description: 'The foundation work for the new Vihar has been successfully completed with proper reinforcement and waterproofing.',
    descriptionMarathi: 'नवीन विहारासाठी पायाभरणीचे काम योग्य मजबुतीकरण आणि जलरोधकतेसह यशस्वीरित्या पूर्ण झाले आहे.',
    images: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    progress: 25,
    category: 'foundation'
  },
  {
    id: '2',
    title: 'Main Structure Rising',
    titleMarathi: 'मुख्य संरचना उभी होत आहे',
    date: '2024-02-28',
    description: 'The main structure walls and pillars are being constructed with traditional Buddhist architectural elements.',
    descriptionMarathi: 'पारंपारिक बौद्ध स्थापत्य घटकांसह मुख्य संरचनेच्या भिंती आणि स्तंभांचे बांधकाम केले जात आहे.',
    images: [
      'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    progress: 60,
    category: 'structure'
  },
  {
    id: '3',
    title: 'Interior Work in Progress',
    titleMarathi: 'आंतरिक कामे सुरू',
    date: '2024-03-10',
    description: 'Interior decoration and Buddha statue installation work is currently underway.',
    descriptionMarathi: 'आंतरिक सजावट आणि बुद्ध मूर्ती स्थापनेचे काम सध्या सुरू आहे.',
    images: [
      'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    progress: 85,
    category: 'interior'
  }
];

export const donationTiers: DonationTier[] = [
  {
    id: '1',
    name: 'Supporter',
    nameMarathi: 'समर्थक',
    amount: 1000,
    benefits: ['Certificate of Appreciation', 'Name in Donor List'],
    benefitsMarathi: ['कृतज्ञता प्रमाणपत्र', 'दाता यादीत नाव'],
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Patron',
    nameMarathi: 'संरक्षक',
    amount: 5000,
    benefits: ['Bronze Plaque', 'Special Invitation to Events', 'Certificate'],
    benefitsMarathi: ['कांस्य फलक', 'कार्यक्रमांसाठी विशेष आमंत्रण', 'प्रमाणपत्र'],
    color: 'bg-blue-600'
  },
  {
    id: '3',
    name: 'Benefactor',
    nameMarathi: 'उपकारक',
    amount: 25000,
    benefits: ['Silver Plaque', 'VIP Event Access', 'Annual Report', 'Personal Thanks'],
    benefitsMarathi: ['रौप्य फलक', 'व्हीआयपी कार्यक्रम प्रवेश', 'वार्षिक अहवाल', 'वैयक्तिक धन्यवाद'],
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Major Donor',
    nameMarathi: 'मुख्य दाता',
    amount: 100000,
    benefits: ['Gold Plaque', 'Permanent Recognition', 'Naming Rights', 'Lifetime Membership'],
    benefitsMarathi: ['सुवर्ण फलक', 'कायमची ओळख', 'नामकरण अधिकार', 'आजीवन सदस्यत्व'],
    color: 'bg-yellow-500'
  }
];

// Extended Activities Data
export const allActivities: Activity[] = [
  ...activities,
  {
    id: '3',
    title: 'Community Kitchen Service',
    titleMarathi: 'सामुदायिक स्वयंपाकघर सेवा',
    description: 'Weekly community kitchen serving free meals to the underprivileged and visitors.',
    descriptionMarathi: 'गरीब आणि पाहुण्यांना मोफत जेवण देणारे साप्ताहिक सामुदायिक स्वयंपाकघर.',
    images: [
      'https://images.pexels.com/photos/6995094/pexels-photo-6995094.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6995070/pexels-photo-6995070.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'welfare',
    date: '2024-01-01'
  },
  {
    id: '4',
    title: 'Buddhist Festival Celebrations',
    titleMarathi: 'बौद्ध सण साजरे करणे',
    description: 'Organizing and celebrating major Buddhist festivals with traditional rituals and community participation.',
    descriptionMarathi: 'पारंपारिक विधी आणि समुदायिक सहभागासह प्रमुख बौद्ध सण आयोजित करणे आणि साजरे करणे.',
    images: [
      'https://images.pexels.com/photos/6976901/pexels-photo-6976901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/7978764/pexels-photo-7978764.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'religious',
    date: '2024-02-15'
  },
  {
    id: '5',
    title: 'Youth Leadership Program',
    titleMarathi: 'युवा नेतृत्व कार्यक्रम',
    description: 'Training young community members in leadership skills and Buddhist values.',
    descriptionMarathi: 'तरुण समुदाय सदस्यांना नेतृत्व कौशल्य आणि बौद्ध मूल्यांचे प्रशिक्षण देणे.',
    images: [
      'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'awareness',
    date: '2024-03-01'
  }
];

// Extended Gallery Data
export const allGalleryItems: GalleryItem[] = [
  ...galleryItems,
  {
    id: '4',
    type: 'image',
    src: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Women\'s Empowerment Workshop',
    titleMarathi: 'महिला सशक्तिकरण कार्यशाळा',
    description: 'Monthly workshop for women\'s education and empowerment',
    descriptionMarathi: 'महिला शिक्षण आणि सशक्तिकरणासाठी मासिक कार्यशाळा',
    category: 'workshops',
    date: '2024-01-20'
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.pexels.com/photos/6995070/pexels-photo-6995070.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Health Camp',
    titleMarathi: 'आरोग्य शिबिर',
    description: 'Free health checkup camp for community members',
    descriptionMarathi: 'समुदाय सदस्यांसाठी मोफत आरोग्य तपासणी शिबिर',
    category: 'health',
    date: '2024-02-10'
  },
  {
    id: '6',
    type: 'video',
    src: 'https://images.pexels.com/photos/7978764/pexels-photo-7978764.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Dhamma Teaching Session',
    titleMarathi: 'धम्म शिक्षण सत्र',
    description: 'Weekly Dhamma teaching and discussion session',
    descriptionMarathi: 'साप्ताहिक धम्म शिक्षण आणि चर्चा सत्र',
    category: 'teachings',
    date: '2024-03-05'
  },
  {
    id: '7',
    type: 'image',
    src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Cultural Program',
    titleMarathi: 'सांस्कृतिक कार्यक्रम',
    description: 'Annual cultural program showcasing Buddhist traditions',
    descriptionMarathi: 'बौद्ध परंपरा दर्शविणारा वार्षिक सांस्कृतिक कार्यक्रम',
    category: 'cultural',
    date: '2024-01-26'
  },
  {
    id: '8',
    type: 'image',
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    title: 'Educational Seminar',
    titleMarathi: 'शैक्षणिक परिसंवाद',
    description: 'Seminar on importance of education in Buddhist philosophy',
    descriptionMarathi: 'बौद्ध तत्त्वज्ञानातील शिक्षणाच्या महत्त्वावर परिसंवाद',
    category: 'education',
    date: '2024-02-28'
  }
];

// Digital Resources Data
export interface DigitalResource {
  id: string;
  title: string;
  titleMarathi: string;
  type: 'book' | 'article' | 'video' | 'audio';
  author: string;
  authorMarathi: string;
  description: string;
  descriptionMarathi: string;
  url: string;
  thumbnail: string;
  category: 'buddha' | 'ambedkar' | 'general';
  language: 'en' | 'mr' | 'both';
  downloadCount: number;
}

export const digitalResources: DigitalResource[] = [
  {
    id: '1',
    title: 'The Buddha and His Dhamma',
    titleMarathi: 'बुद्ध आणि त्यांचा धम्म',
    type: 'book',
    author: 'Dr. B.R. Ambedkar',
    authorMarathi: 'डॉ. बी.आर. आंबेडकर',
    description: 'Dr. Ambedkar\'s comprehensive work on Buddhism and its teachings.',
    descriptionMarathi: 'बौद्ध धर्म आणि त्याच्या शिकवणींवर डॉ. आंबेडकरांचे सर्वसमावेशक कार्य.',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'ambedkar',
    language: 'both',
    downloadCount: 1250
  },
  {
    id: '2',
    title: 'Dhammapada',
    titleMarathi: 'धम्मपद',
    type: 'book',
    author: 'Buddha',
    authorMarathi: 'बुद्ध',
    description: 'Collection of sayings of the Buddha in verse form.',
    descriptionMarathi: 'श्लोक स्वरूपात बुद्धांच्या वचनांचा संग्रह.',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'buddha',
    language: 'both',
    downloadCount: 980
  },
  {
    id: '3',
    title: 'Meditation Techniques',
    titleMarathi: 'ध्यान तंत्रे',
    type: 'video',
    author: 'Buddhist Masters',
    authorMarathi: 'बौद्ध गुरू',
    description: 'Video series on various Buddhist meditation techniques.',
    descriptionMarathi: 'विविध बौद्ध ध्यान तंत्रांवरील व्हिडिओ मालिका.',
    url: '#',
    thumbnail: 'https://images.pexels.com/photos/7978764/pexels-photo-7978764.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'general',
    language: 'both',
    downloadCount: 750
  }
];