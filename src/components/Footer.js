import React from 'react';

import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import profileImage from '../images/nybildportfolio.jpg';

const Footer = () => {
  return (
    <section className="contact-container">
      <div className="contact">
        <h2>Time to talk</h2>
        <img className="profile-image" src={profileImage} alt="Nina" />

        <div className="information-name">
          <h1>Nina Waldréus</h1>
          <h3>Frontend developer</h3>
          <h6>+ pharmacist</h6>
          <h1>
            <a href="mailto:waldreus@gmail.com">waldreus@gmail.com</a>
          </h1>
          <h3><a href="tel:+46707405478">+46 707405478</a></h3>
        </div>

        <div className="icon-container">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nina-waldr%C3%A9us-b46abb104/"
                aria-label="View Nina Waldreus linkedin"
                aria-hidden="true"
                rel="noreferrer">
                <FaLinkedin size={40} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/NinaWald"
                aria-label="View Nina Waldreus github"
                aria-hidden="true"
                rel="noreferrer">
                <FaGithub size={40} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://stackoverflowteams.com/c/technigo/users/411/?tab=profile"
                aria-label="View Nina Waldreus stack overflow"
                aria-hidden="true"
                rel="noreferrer">
                <FaStackOverflow size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
