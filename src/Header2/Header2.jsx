import React from 'react';
import './Header2.css';

const Header2 = () => {
  return (
    <header className="header2">
      <div className="logo">FlashSkill</div>
      <div className="nav-container">
        <nav className="nav-links">
          <a href="/" className="nav-link active">Home</a>
          <a href="/login" className="nav-link">Log In</a> {/* Lien vers la connexion */}
          <a href="/contact" className="nav-link">Contact Us</a>
          <a href="/create" className="nav-link">Create</a>
        </nav>
        <div className="user-profile">
         <div className="user-avatar"></div>
          <span className="user-name">Taha</span>
           
        </div>
      </div>
    </header>
  );
};

export default Header2;
