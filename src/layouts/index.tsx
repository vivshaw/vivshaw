import React from "react";
import PropTypes from "prop-types";

import SEO from "../components/Seo";

const Layout: React.FC = ({ children }) => (
  <>
    <SEO title="Hi!" />

    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
