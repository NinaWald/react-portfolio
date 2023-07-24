import React from 'react';

const Header = () => {
  return (

    <section className="top-section">

      <div className="header-container">
        <img className="header-image" src="images/sunsetgreece.jpg" alt="sunset in greece" />
      </div>

      <div className="profile-information">
        <img className="profile-image" src="/images/nybildportfolio.jpg" alt="Nina" />

        <div className="information-name">
          <h1>Nina Waldréus</h1>
          <h3>Frontend developer</h3>
          <h6>+ pharmacist</h6>

          <article> Nina is a junior developer known for her creative solutions.
                She made a career change and went all-in for a bootcamp in frontend development.
                Nina has a bachelors degree in pharmacy and many years experience in that field.
                Previous to her pharmacist career she studied art in highschool.
                She creates user-friendly applications and has a creative and colourful soul.
                Her immence background and drive for excellence makes her a valuable asset
                to any project
                and a standout in the technology field.
          </article>

          <div className="icon-container">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nina-waldr%C3%A9us-b46abb104/"
                  className="fa fa-linkedin fa-lg"
                  aria-label="View Nina Waldreus linkedin"
                  aria-hidden="true"
                  rel="noreferrer">
                  <span className="visually-hidden">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/NinaWald"
                  className="fa fa-github fa-lg"
                  aria-label="View Nina Waldreus github"
                  aria-hidden="true"
                  rel="noreferrer">
                  <span className="visually-hidden">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://stackoverflowteams.com/c/technigo/users/411/?tab=profile"
                  className="fa fa-stack-overflow fa-lg"
                  aria-label="View Nina Waldreus stack overflow"
                  aria-hidden="true"
                  rel="noreferrer">
                  <span className="visually-hidden">Stack Overflow</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>

    </section>

  )
}

export default Header