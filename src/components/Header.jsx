import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#f0f0f0',
      padding: '20px',
      textAlign: 'center',
      borderBottom: '2px solid #ccc'
    }}>
      <h1 style={{ margin: 0, fontSize: '24px', color: '#333' }}>Welcome to My App</h1>
    </header>
  );
};

export default Header;