import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuTaste from './components/MenuTaste';
import OurStory from './components/OurStory';
import SignatureDishes from './components/SignatureDishes';
import Reservation from './components/Reservation'
import ChatbotToggle from './components/ChatbotToggle';
import ChatbotUI from './components/ChatbotUI';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Reviews from './components/Reviews';
import MenuPage from './components/MenuPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(prevState => !prevState);
  };

  // Home page component - all your existing components
  const HomePage = () => (
    <>
      <Hero />
      <MenuTaste />
      <Reservation />
      <OurStory />
      <SignatureDishes />
      <Reviews />
      <Feedback />
    </>
  );

  return (
    <Router>
      <div className="bg-white text-gray-900 dark:bg-navbar-dark dark:text-white">
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:category" element={<MenuPage />} />
        </Routes>

        <ChatbotToggle toggleChatbot={toggleChatbot} />
        <ChatbotUI isChatbotOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;