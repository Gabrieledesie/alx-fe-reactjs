import React from 'react';

const UserProfile = () => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px auto',
      maxWidth: '600px',
      borderRadius: '5px'
    }}>
      <h2 style={{ fontSize: '20px', color: '#444' }}>User Profile</h2>
      <p style={{ margin: '5px 0', color: '#555' }}>Name: John Doe</p>
      <p style={{ margin: '5px 0', color: '#555' }}>Email: john.doe@example.com</p>
    </div>
  );
};

export default UserProfile;