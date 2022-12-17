import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <h2>
        Designed by{" "}
        <a
          className="githubLink"
          href="https://github.com/JBryan98"
          target="_blank"
          rel="noreferrer"
        >
          <span>JBryan98</span>
        </a>
      </h2>
      <h3>
        Data Source:
        <a
          href="https://developers.themoviedb.org/3/getting-started/introduction"
          target="_blank"
          rel="noreferrer"
        >
          <span> TMDB API</span>
        </a>
      </h3>
    </div>
  );
};

export default Footer;
