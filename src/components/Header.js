import React from 'react';

import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import sunsetImage from '../images/sunsetgreece.jpg';
import ninasImage from '../images/nybildportfolio.jpg'

const Header = () => {
  return (

    <section className="top-section">

      <div className="header-container">
        <img
          className="header-image"
          src={sunsetImage}
          alt="sunset in greece" />
      </div>

      <div className="profile-information">
        <img
          className="profile-image"
          src={ninasImage}
          alt="Nina" />

        <div className="information-name">
          <h1>Nina Waldréus</h1>
          <h3>Frontend developer</h3>
          <h6>+ pharmacist</h6>

          <article> Nina is passionate junior frontend developer with a background in pharmacy.
                After spending several years in the healthcare industry,
                she realized that her true passion lies in creating beautiful,
                user-friendly web applications that make a difference in peoples lives.
                She made a career change and went all-in for a bootcamp in frontend development.
                Nina has a bachelors degree in pharmacy and many years experience in that field.
                Previous to her pharmacist career she studied art in highschool.
                She creates user-friendly applications and has a creative and colourful soul.
                Her immence background and drive for excellence makes her a valuable asset
                to any project and a standout in the technology field.
          </article>
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
      </div>
    </section>
  );
};
export default Header