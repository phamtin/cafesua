import React from "react"
import { Link } from "gatsby"

import "./post.scss"

const PreviewPost = ({ title, date, url, imgPreview }) => {
  return (
    <div className="post">
      <div className="post-preview">
      <Link to={`/blog/${url}`}>
        <img
          src={imgPreview}
          alt="preview"
        />
        </Link>
      </div>
      <div className="post-main">
        <div className="heading">
          <small><strong>{date}</strong></small>
          <h4>
            <Link to={`/blog/${url}`}>{title}</Link>
          </h4>
        </div>
        <div className="content">
          <p>
            Nếu bạn có kinh nghiệm làm việc với các stylesheets của các ứng dụng
            web lớn
          </p>
        </div>
        <div className="tags">
          <small> REACT </small>
        </div>
      </div>
    </div>
  )
}

export default PreviewPost
