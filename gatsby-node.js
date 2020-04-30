const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/template/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  paginate({
    createPage,
    items: res.data.allContentfulBlogPost.edges,
    itemsPerPage: 3,
    pathPrefix: "/tech-area",
    component: path.resolve("src/templates/blog-archive.js"),
  })

  // res.data.allContentfulBlogPost.edges.forEach(edge => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${edge.node.slug}`,
  //     context: {
  //       slug: edge.node.slug,
  //       prev: index === 0 ? null : posts[index - 1].node,
  //       next: index === (posts.length - 1) ? null : posts[index + 1].node
  //     },
  //   })
  // })
}
