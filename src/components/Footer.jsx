import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./css/Footer.css";
import {FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Quick Links Section */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>103 Guruvarya Chikane Guruji Residency, Kshetrapal Nagar</p>
        <p>Shivtar Road, Khed, Ratnagiri-415709, Maharashtra</p>
        <p><strong>Phone:</strong> <a href="tel:+918149772397">+91 8149772397</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@puritytechsolutions.in">info@puritytechsolutions.in</a></p>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a> */}
          <a href="https://www.instagram.com/suco_food_delivery?igsh=cjZvNms2anlsdzd3" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a> */}
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom">
      <p>Copyright © {new Date().getFullYear()} Purity Tech Solutions. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
