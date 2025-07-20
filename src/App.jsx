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
      <UserProfile />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;