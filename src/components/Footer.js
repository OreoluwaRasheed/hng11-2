import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column footer-column-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur
            maximus quam.
          </p>
        </div>
        <div className="footer-column">
          <h3>Footer Title</h3>
          <ul>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Footer Title</h3>
          <ul>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Footer Title</h3>
          <ul>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Footer Title</h3>
          <ul>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
            <li>
              <a href="#">Footer Link</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Timbu Cloud Shop. All rights reserved.</p>
        <div className="social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
