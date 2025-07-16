import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
