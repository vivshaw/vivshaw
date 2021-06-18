import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allNavigationYaml {
        edges {
          node {
            title
            url
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <nav role="navigation" className="menu top-menu">
      <ul className="menu-item">
        {data.allNavigationYaml.edges.map(({ node }) => {
          const domain = node.url.includes("http") ? "" : "";

          return (
            <li key={node.title}>
              <Link to={`${domain}${node.url}`}>{node.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
