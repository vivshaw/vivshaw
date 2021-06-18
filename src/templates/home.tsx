import React from "react";
import { Link } from "gatsby";

import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

const Home: React.FC = ({ children }) => {
  return (
    <>
      <BackgroundImage />

      <div className="page-lead">
        <div className="page-lead-content">
          <h1>Hannah Vivian Shaw</h1>
          <h2>
            <Link to="/about/" className="lead-link">
              <em>I{"'"}m a Vermont developer</em>
            </Link>{" "}
            working mainly in Javascript &amp; Python. I{"'"}m into the
            React/Redux ecosystem, functional programming, and machine learning.
          </h2>
          <Link to="/work/" className="btn-inverse">
            See my work
          </Link>{" "}
          &nbsp; or &nbsp;{" "}
          <a href="https://github.com/vivshaw/" className="btn-inverse">
            Find me on GitHub
          </a>
        </div>
      </div>

      <div id="page-wrapper">
        <div id="main" role="main">
          <div className="wrap">
            <div className="archive-wrap">
              <div className="page-content home-content">{children}</div>
            </div>
          </div>
        </div>

        <Footer home />
      </div>
    </>
  );
};

export default Home;
