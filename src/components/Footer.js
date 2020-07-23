import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <p className="footer">
        WhatAboutSome
        <a
          href="https://hackernews.dennysunny.co"
          target="_blank"
          rel="noreferrer noopener"
          className="footer"
        >
          HackerNews
        </a>
        Articles
      </p>
        <p className="footer">
         2020 | dEN | 
          <a
            className="api"
            target="_blank"
            rel="noreferrer noopener"
            href="https://gnews.io/"
          >
            {" "}
            GNews API
          </a>
        </p>
    </div>
  );
};

export default Footer;
