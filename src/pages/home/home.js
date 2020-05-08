import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

import PreviewPost from "../../components/preview-post"
import Layout from "../../components/layout"
import Aside from "../../components/aside"
import "./home.scss"

const HeaderMid = styled.div`
  display: flex;
  justify-content: center;
  min-height: 130px;

  img {
    max-width: 100%;
  }
`

const HeaderBottom = styled.div`
  border-top: 3px solid #ea5252;
  margin-bottom: 60px;
  background: #1a1a1a;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      padding: 11px 0;
      margin-right: 20px;
      margin-bottom: 0;
      font-size: 16px;
      text-transform: uppercase;

      a {
        color: white;
      }

      @media (max-width: 576px) {
        font-size: 12px;
        margin-right: 14px;
      }
    }
  }
`

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            category
            slug
            previewImage
            publishedDate(formatString: "MMMM YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <HeaderMid>
        <img src="images/mac.jpg" alt="main-background" />
      </HeaderMid>

      <HeaderBottom>
        <div className="rows">
          <ul>
            <li className="active">
              <Link to="/">Câu chuyện</Link>
            </li>
            <li>
              <Link to="/diary">Nhật ký</Link>
            </li>
            <li>
              <Link to="/dev-life">Chuyện nghề</Link>
            </li>
            <li>
              <a href="https://viblo.asia/u/PhamTin" target="_blank">
                Tech area
              </a>
            </li>
          </ul>
        </div>
      </HeaderBottom>
      <div className="rows">
        <div className="c-2-3">
          <div className="home">
            <div className="feed">
              {data.allContentfulBlogPost.edges.map((edge, idx) => {
                return (
                  <PreviewPost
                    key={edge + idx}
                    url={edge.node.slug}
                    title={edge.node.title}
                    date={edge.node.publishedDate}
                    imgPreview={edge.node.previewImage}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="c-1-3">
          <Aside />
        </div>
      </div>
    </Layout>
  )
}

export default Home
