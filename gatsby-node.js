/* eslint-env node */

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const path = createFilePath({ node, getNode });

    /* Set slug to path */
    const slug = path;

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
