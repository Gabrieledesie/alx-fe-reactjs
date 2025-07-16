import React from 'react';

const MainContent = () => {
  return (
    <main style={{
      minHeight: '300px',
      padding: '20px',
      backgroundColor: '#fff',
      margin: '10px auto',
      maxWidth: '800px'
    }}>
      <h2 style={{ fontSize: '22px', color: '#333' }}>Main Content</h2>
      <p style={{ lineHeight: '1.6', color: '#666' }}>
        This is the main content area of the application. Add your content here.
      </p>
    </main>
  );
};

export default MainContent;