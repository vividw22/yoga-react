import React from 'react';
import profileImage from './img/profile.png';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img className="profile-image" src={profileImage} alt="Profile" />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">YOGA BIRAWANTO</h2>
        <p className="profile-bio">Rekayasa Perangkat Lunak</p>
        <div className="social-icons">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
