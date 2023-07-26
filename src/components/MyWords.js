import React from 'react';

const MyWords = () => {
  return (
    <section className="my-words">
      <div className="my-words-title">
        <h5>My words</h5>
      </div>
      <div className="my-words-container">
        <div className="my-words-box">
          <img
            className="article-box"
            src="images/magic-pattern.png"
            alt="candle" />
          <div className="my-words-text-section">
            <h5>Article about ChatGPT</h5>
            <article>How ChatGPT helped me become a frontend developer</article>
            <div className="mywords-buttons">
              <a href="https://medium.com/@waldreus/how-chatgpt-helped-me-become-a-frontend-developer-3abce1c96d96">
                <button type="button">
                  <img src="/images/read-article-image.png" alt="Read article" />
                  Read article
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="my-words-box">
          <img
            className="article-box"
            src="/images/magic-pattern.png"
            alt="candle" />
          <div className="my-words-text-section">
            <h5>My first Article about tech</h5>
            <article>My Experience with a Frontend Bootcamp</article>
            <div className="mywords-buttons">
              <a href="https://medium.com/@waldreus/my-experience-with-a-frontend-bootcamp-42fa60f5645d">
                <button type="button">
                  <img src="/images/read-article-image.png" alt="Read article" />
                  Read article
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWords;
