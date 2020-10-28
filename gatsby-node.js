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
  }); // .then(result)
  
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

    // Create blog posts pages.
    const blogs = result.data.allStrapiBlogs.edges

    blogs.forEach((post, index) => {
      // Create pages for each blogs.
      result.data.allStrapiBlogs.edges.forEach(({ node }) => {

        createPage({
          path: `/blog/${node.blog_slug}`,
          component: path.resolve(`src/templates/blog.js`),
          context: {
            id: node.id,
          }, // context
        }) // createPage
      }) // result.data
    }) // blogs.forEach

    // Create blog post list pages
    const postsPerPage = 9;
    const numPages = Math.ceil(blogs.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blogs/` : `/blogs/${i + 1}`,
        component: path.resolve('./src/templates/blogs.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }, // context
      }); // createPage
    }); // Array.from
  }); // then(result)
  
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
          ambassador: node.team_name
        },
      })
    })
  });


  const getAds = makeRequest(graphql, `
    {
      allStrapiAds {
        edges {
          node {
            id
            ad_title
            ad_slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each team member.
    result.data.allStrapiAds.edges.forEach(({ node }) => {
      createPage({
        path: `/ad/${node.ad_slug}`,
        component: path.resolve(`src/templates/ad.js`),
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
    getAds
  ])
}; // exports.createPages