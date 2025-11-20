import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [isAboutOpen, setIsAboutOpen] = useState(false); // For mobile submenu
  const [isAboutOpen, setIsAboutOpen] = useState<string | false>(false);

  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('home') },
    {
      path: '/about',
      label: t('about'),
      submenu: [
        { path: '/about', label: t('about') },
        { path: '/salagnsanstha', label: t('salagnsanstha') },
        { path: '/bhante', label: t('bhante') },
      ],
    },
    { path: '/events', label: t('events') },
    { path: '/activities', label: t('activities') },
    { path: '/vihar', label: t('vihar') },
    { path: '/members', label: t('members') },
    { path: '/gallery', label: t('gallery') },
    { path: '/teachings', label: t('teachings') },
    { path: '/contact', label: t('contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sky-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-800 leading-tight">
                {language === 'mr' ? 'डॉ. बाबासाहेब आंबेडकर' : 'Dr. Babasaheb Ambedkar'}
              </h1>
              <p className="text-sm text-gray-600">
                {language === 'mr' ? 'बौद्ध संस्कार मंडळ' : 'Bouddha Sanskar Mandal'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-nowrap whitespace-nowrap text-[13px] relative">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`
          px-2 py-2 rounded-md font-semibold text-[12px] transition-colors duration-200 flex items-center gap-1
          ${isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}
        `}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3 h-3 mt-[1px]" />}
                </Link>

                {/* Dropdown — stays open while hovering submenu */}
                {item.submenu && (
                  <div
                    className="absolute left-0 top-full bg-white border border-gray-200 rounded-md shadow-md mt-1 w-44 
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200 ease-in-out"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 ${isActive(sub.path) ? 'bg-blue-600 text-white' : 'text-gray-700'
                          }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>


          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'en' ? 'मराठी' : 'English'}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.path}
                      onClick={() => {
                        if (!item.submenu) setIsMenuOpen(false);
                        else setIsAboutOpen(isAboutOpen === item.path ? false : item.path);
                      }}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex-1 ${isActive(item.path)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                        }`}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() =>
                          setIsAboutOpen(isAboutOpen === item.path ? false : item.path)
                        }
                        className="px-3 text-gray-500"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isAboutOpen === item.path ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.submenu && isAboutOpen === item.path && (
                    <div className="ml-6 mt-1 flex flex-col space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-3 py-1.5 rounded-md text-sm ${isActive(sub.path)
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
