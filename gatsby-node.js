/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
}); // makeRequests

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getPartnerResorts = makeRequest(graphql, `
    {
      allStrapiPartnerResorts {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each partner resorts.
    result.data.allStrapiPartnerResorts.edges.forEach(({ node }) => {
      createPage({
        path: `/partner-resorts/${node.slug}`,
        component: path.resolve(`src/templates/partner-resorts.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getPartnerResorts;
}; // exports.createPages





exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getBlogs = makeRequest(graphql, `
    {
      allStrapiBlogs {
        edges {
          node {
            id
            title
            content
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each blogs.
    result.data.allStrapiBlogs.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.slug}`,
        component: path.resolve(`src/templates/blogs.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for blog nodes to use in creating pages.
  return getBlogs;
}; // exports.createPages







exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getTeam = makeRequest(graphql, `
    {
      allStrapiTeam {
        edges {
          node {
            id
            name
            slug
            profile {
              childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each team member.
    result.data.allStrapiTeam.edges.forEach(({ node }) => {
      createPage({
        path: `/team/${node.slug}`,
        component: path.resolve(`src/templates/team.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for blog nodes to use in creating pages.
  return getTeam;
}; // exports.createPages