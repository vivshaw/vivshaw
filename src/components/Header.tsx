import React from "react";
import Breadcrumbs from "../_includes/breadcrumbs";
import Navigation from "./Navigation";

const Header = () => (
  <header id="masthead">
    <div className="inner-wrap">
      <Breadcrumbs />
      <Navigation />
    </div>
  </header>
);

export default Header;
