import React from "react";
import Default from "./default";

interface ArchiveProps {
  children: React.ReactNode;

  pageContext: {
    frontmatter: {
      title: string;
      excerpt?: string;
    };
  };
}

const Archive = ({ pageContext, children }: ArchiveProps) => (
  <Default>
    <div id="main" role="main">
      <div className="wrap">
        <div className="page-title">
          <h1>{pageContext.frontmatter.title}</h1>
          {pageContext.frontmatter.excerpt && (
            <h2>{pageContext.frontmatter.excerpt}</h2>
          )}
        </div>

        <div className="archive-wrap">
          <div className="page-content">{children}</div>
        </div>
      </div>
    </div>
  </Default>
);

export default Archive;
