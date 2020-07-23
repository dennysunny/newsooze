import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
      <div>
        <h3 className="newshead">
          <a href="https://moviedatabase.dennysunny.co">
            <b className="newspaper"> Looking for Movies Instead ? </b>
          </a>
          <a
            href="https://moviedatabase.dennysunny.co"
            target="_blank"
            rel="noreferrer noopener"
            className="footer"
          >
            - Lets Go
          </a>
        </h3>{" "}
        <br></br>
        <ul>
          <li>
            <Link to="/search" className="searchnews">
              <h3>
                {" "}
                <b> Search All News </b>{" "}
              </h3>
            </Link>
          </li>

          <h3 className="newshead">Categories</h3>

          <li>
            <Link to="/kerala">
              <b>Top Kerala</b>
            </Link>
          </li>

          <li>
            <Link to="/covid">Covid-19 News</Link>
          </li>

          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/science">Science</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/tech">Technology</Link>
          </li>
          <br></br>
          <h3 className="newshead">Top </h3>
          <li>
            <Link to="/bbc">BBC-News</Link>
          </li>
          <li>
            <Link to="/tc">TechCrunch</Link>
          </li>
          <li>
            <Link to="/bra">Bleacher Report</Link>
          </li>
          <li>
            <Link to="/wsj">Wall Street Journal</Link>
          </li>
        </ul>
        <br></br>
        <h3 className="newshead">
            <a href="https://hackernews.dennysunny.co">
            <b className="newspaper"> Lets Go Read Some HackerNews ? </b>
            </a>
        </h3>
      </div>
    );
};

export default SideBar;
