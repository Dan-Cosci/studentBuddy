import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Left */}
        <div className="footer__brand">
          <span className="footer__logo">StudentBuddy</span>
          <p className="footer__text">
            Helping students organize notes, tasks, and learning.
          </p>
        </div>

        {/* Middle */}
        <nav className="footer__nav">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>

        {/* Right */}
        <div className="footer__socials">
        
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} StudentBuddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
