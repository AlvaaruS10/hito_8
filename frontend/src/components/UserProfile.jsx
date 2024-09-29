import React, { useEffect } from 'react';
import { useUser } from '/src/components/UserContext';

const UserProfile = () => {
  const { userProfile, fetchUserProfile } = useUser();

  useEffect(() => {
    if (!userProfile) {
      fetchUserProfile();  
    }
  }, [fetchUserProfile, userProfile]); 

  if (!userProfile) {
    return <p>Loading profile...</p>; 
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {userProfile.email}</p>
    </div>
  );
};

export default UserProfile;
