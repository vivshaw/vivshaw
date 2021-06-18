import React from "react";
import PageMeta from "../_includes/page-meta";
import Default from "../templates/default";

//FIXME: enable image in page feature
const Article = ({ pageContext, children }) => (
  <Default>
    <div id="main" role="main">
      <article className="wrap" itemScope itemType="http://schema.org/Article">
        {pageContext.frontmatter &&
          pageContext.frontmatter.image &&
          pageContext.frontmatter.image.feature && (
            <div className="page-feature">
              <div className="page-image">
                <img
                  src={pageContext.frontmatter.image.feature}
                  className="page-feature-image"
                  alt="pageContext.frontmatter.title"
                  itemProp="image"
                />
              </div>
            </div>
          )}

        <div className="page-title">
          <h1>{pageContext.frontmatter.title}</h1>
        </div>

        <div className="inner-wrap">
          <div id="content" className="page-content" itemProp="articleBody">
            {children}

            <hr />

            <footer className="page-footer">
              <PageMeta
                date={pageContext.frontmatter.date}
                modified={pageContext.frontmatter.modified}
              />
            </footer>
          </div>
        </div>
      </article>
    </div>
  </Default>
);

export default Article;
