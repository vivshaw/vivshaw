import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

interface FooterProps {
  home?: boolean;
}

const Footer = ({ home = false }: FooterProps) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allFooterYaml {
        edges {
          node {
            title
            url
          }
        }
      }
      site {
        siteMetadata {
          year
        }
      }
    }
  `);

  return (
    <>
      <footer role="contentinfo" id="site-footer">
        <nav role="navigation" className="menu bottom-menu">
          <ul className="menu-item">
            {data.allFooterYaml.edges.map(({ node }) => {
              const domain = node.url.includes("http") ? "" : "";

              return (
                <li key={node.title}>
                  <Link to={`${domain}${node.url}`}>{node.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="copyright">
          &#169; {data.site.siteMetadata.year} <Link to="/">vivshaw</Link>
        </p>
      </footer>

      {!home && (
        <svg width="0" height="0">
          <defs>
            <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
              <polygon points=".8 0, 1 0, 1 1, .9 1" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

export default Footer;
