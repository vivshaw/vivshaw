import React from "react";

import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Header from "../components/Header";

//FIXME: add navigation-sliding
const Default = ({ children }) => {
  return (
    <>
      <BackgroundImage slant />
      <Header />
      {/* include navigation-sliding.html */}

      <div id="page-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Default;
