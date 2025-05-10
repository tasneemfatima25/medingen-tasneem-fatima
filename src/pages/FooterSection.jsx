import React from 'react';
import '../styles/FooterSection.css';
import TrustBadges from './TrustBadges';

const FooterSection = () => {
  return (
    <>

      <TrustBadges />
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo">
              <div className="logo-iconn">MIG</div>
            </div>

            <h2>Medingen</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras at urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Website</h4>
              <ul>
                <li>Home</li>
                <li>Features</li>
                <li>How it works</li>
                <li>What our customers say?</li>
              </ul>
            </div>
            <div>
              <h4>Follow Us</h4>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div>
              <h4>More</h4>
              <ul>
                <li>Help Center</li>
                <li>Become Member</li>
                <li>Events</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          ©2025 Medingen. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
