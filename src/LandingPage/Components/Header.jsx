import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/LandingPage/images/logo.png" alt="FlashSkill Logo" className="logo-icon" />
        <span className="logo-text">FlashSkill</span>
      </div>
      <div className="actions">
        <button className="create-quiz">
          ✏️ Create Quiz
        </button>
        <button className="sign-up">
          👤 Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
