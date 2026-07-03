import React from "react";
import "./Footer.css";
import logo from "../assets/images/Quintessence atelier.jpg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <img src={logo} alt="Quintessence Atelier Logo" />
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">What We Do</a>
          <a href="#">Contact</a>
        </div>


        {/* SOCIAL MEDIA */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>


        {/* THE FIRM */}
        <div className="footer-column">
          <h4>The Firm</h4>
          <a href="#">Overview</a>
          <a href="#">Our People</a>
          <a href="#">Careers</a>
          <a href="#">Our Impact</a>
        </div>


        {/* OUR CLIENTS */}
        <div className="footer-column">
          <h4>Our Clients</h4>
          <a href="#">Institutional Investors</a>
          <a href="#">Financial Advisors</a>
          <a href="#">Family Offices</a>
          <a href="#">Insurers</a>
        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">
        © {new Date().getFullYear()} Quintessence Atelier. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;