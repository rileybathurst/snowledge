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
            pr_name
            pr_slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each partner resorts.
    result.data.allStrapiPartnerResorts.edges.forEach(({ node }) => {
      createPage({
        path: `/partner-resorts/${node.pr_slug}`,
        component: path.resolve(`src/templates/partner-resorts.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  const getBlogs = makeRequest(graphql, `
    {
      allStrapiBlogs {
        edges {
          node {
            id
            blog_title
            blog_content
            blog_slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each blogs.
    result.data.allStrapiBlogs.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.blog_slug}`,
        component: path.resolve(`src/templates/blogs.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  const getTeam = makeRequest(graphql, `
    {
      allStrapiTeam {
        edges {
          node {
            id
            team_name
            team_slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each team member.
    result.data.allStrapiTeam.edges.forEach(({ node }) => {
      createPage({
        path: `/team/${node.team_slug}`,
        component: path.resolve(`src/templates/team.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for blog nodes to use in creating pages.
  return Promise.all([
    getPartnerResorts,
    getBlogs,
    getTeam,
  ])
}; // exports.createPages