import React from 'react';

const UserProfile = ({ name, age, bio }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{bio}</span></p>
    </div>
  );
};

export default UserProfile;
