import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* More user details can be added here */}
    </div>
  );
};

export default Profile;
