import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ViharPage from './pages/ViharPage';
import GalleryPage from './pages/GalleryPage';
import TeachingsPage from './pages/TeachingsPage';
import SalagnSanstha from './pages/SalagnSanstha';
import Bhante from './pages/Bhante';

function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* <div className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-400">
          <div className="min-h-screen bg-sky-100"> 
          <div className="min-h-screen bg-gray-50">
          */}

        <div className="min-h-screen bg-sky-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/vihar" element={<ViharPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/teachings" element={<TeachingsPage />} />
              <Route path="/salagnsanstha" element={<SalagnSanstha />} />
              <Route path="/bhante" element={<Bhante />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;