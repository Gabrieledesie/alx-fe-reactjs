import React from 'react';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />

      {/* ✅ Pass props to UserProfile */}
      <UserProfile
        name="Gabriel Edesie"
        age={25}
        bio="Aspiring Full-Stack Developer and AI Enthusiast"
      />

      {/* ✅ You can add another profile like this */}
      <UserProfile
        name="Ada Lovelace"
        age={28}
        bio="Mathematician and early computer programmer"
      />

      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
