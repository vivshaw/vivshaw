import classNames from "classnames";
import React from "react";
import bgImg from "../images/plant-691971_1280.jpg";

const BackgroundImage = ({ slant }) => (
  <>
    <img
      src={bgImg}
      className={classNames(["bg", slant && "slant"])}
      alt="background containing ivy vines growing over a wall"
    />

    {/* Fix page legibility for browsers without clip-path */}
    {slant && <div id="clipless"></div>}
  </>
);

export default BackgroundImage;
