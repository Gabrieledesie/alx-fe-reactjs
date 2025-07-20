// src/components/MainContent.jsx
import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <UserProfile name="Gabriel Edesie" age={25} bio="Aspiring Full-Stack Developer and AI Enthusiast" />
      <UserProfile name="Ada Lovelace" age={28} bio="Mathematician and early computer programmer" />
    </main>
  );
};

export default MainContent;
