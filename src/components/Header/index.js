import React from 'react';
import profileImage from '../../assets/images/me.jpg'; // Import the image

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-text">
          <h1 id="header_H1">Luca Leyva</h1>
          <p className="header_P">Agile & Leadership Coach</p>
          <p className="header_P">Full Stack Developer</p>
          <p className="header_P">Extreme Programming (XP) Practitioner</p>
        </div>
        <img src={profileImage} alt="Luca Leyva" className="profile-image" /> {/* Use the imported image */}
      </div>
    </header>
  );
}

export default Header;