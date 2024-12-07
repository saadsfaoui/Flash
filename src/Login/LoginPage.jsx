import React from 'react';
import './LoginPage.css'; // Importez le fichier CSS pour le style

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="login-options">
          <div className="separator">or</div>
          <div className="social-login">
            <button className="google-login">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width="30" />



            </button>
            <button className="apple-login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" width="30" />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;