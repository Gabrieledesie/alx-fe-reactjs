import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f8ff' }}>
      <UserProfile name="Alice" age={25} bio="Frontend Developer from Lagos." />
      <UserProfile name="Bob" age={30} bio="Backend Developer from Abuja." />
      <UserProfile name="Charlie" age={28} bio="Full Stack Engineer from Nairobi." />
    </main>
  );
}

export default MainContent;
