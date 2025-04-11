import { graphql, useStaticQuery } from "gatsby";

export const useDevLogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/devlogs/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMM D,YY")
          }
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes;
};
