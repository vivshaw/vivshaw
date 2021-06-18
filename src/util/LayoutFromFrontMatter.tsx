import React from "react";
import Archive from "../templates/archive";
import Article from "../_layouts/article";
import Home from "../templates/home";

interface LayoutProps {
  children: React.ReactNode;

  pageContext: {
    frontmatter: {
      layout?: string;
    };
  };
}

/*
 * This wrapper component reads the "layout" parameter specified in each page's frontmatter,
 * and applies that specific layout to the page.
 */
//FIXME: Name this better
const LayoutFromFrontMatter = ({ pageContext, children }: LayoutProps) => {
  // Default layout
  let Layout = Article;

  if (pageContext.frontmatter.layout === "home") {
    Layout = Home;
  }

  if (pageContext.frontmatter.layout === "archive") {
    Layout = Archive;
  }

  if (pageContext.frontmatter.layout === "article") {
    Layout = Article;
  }

  return <Layout pageContext={pageContext}>{children}</Layout>;
};

export default LayoutFromFrontMatter;
