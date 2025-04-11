export default function buildTree(nodes) {
  const treeData = { name: "/", children: [] };
  const docs = {};

  for (const node of nodes) {
    const slug = node.fields.slug;
    const isFolder = slug.endsWith("/");
    const parts = slug.split("/").filter(Boolean);
    let current = treeData;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      let existing = current.children.find(child => child.name === part);

      if (!existing) {
        existing = { name: part, children: [] };
        current.children.push(existing);
      }

      const isLast = i === parts.length - 1;

      if (isLast) {
        if (!isFolder) {
          delete existing.children;
          existing.id = slug;
          docs[slug] = node.rawMarkdownBody;
        }
      }

      current = existing;
    }
  }

  return { treeData, docs };
}
