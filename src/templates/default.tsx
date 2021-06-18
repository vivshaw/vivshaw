import React from "react";

import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Default: React.FC = ({ children }) => {
  return (
    <>
      <BackgroundImage slant />
      <Header />

      <div id="page-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Default;
