import React from "react"
import { graphql } from "gatsby"
import Pager from "../components/pager/Pager"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Aside from "../components/aside"
import Layout from "../components/layout"
import "./blog.scss"

export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    contentfulBlogPost(slug: { eq: $slug }, skip: $skip, limit: $limit) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  const { prev, next } = pageContext

  return (
    <Layout>
      <div className="rows">
        <div className="main-section">
          <div className="c-2-3">
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <div className="main-content">
              <p>{props.data.contentfulBlogPost.publishedDate}</p>
              {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
              )}
            </div>
          </div>
          <div className="c-1-3">
            <Aside />
          </div>
        </div>
      </div>
      <Pager pageContext={props.pageContext} />
    </Layout>
  )
}

export default Blog
