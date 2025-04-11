const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    const relativePath = parent.relativePath;
    const parsed = path.parse(relativePath);
    let slug = path.join("/", parsed.dir, parsed.name);
    slug = slug.replace(/\\/g, "/");
    
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
