import React from "react"
import { Link } from "gatsby"

import "./category.scss"

const Category = () => {
  return (
    <div className="category">
      <h5>Danh mục</h5>
      <ul style={{ listStyleType: "circle" }}>
        <li>
          <Link>Bài viết</Link>
        </li>
        <li>
          <Link>Nhật ký</Link>
        </li>
        <li>
          <Link>Chuyện nghề</Link>
        </li>
        <li>
          <a href="https://viblo.asia/u/PhamTin">Tech area</a>
        </li>
      </ul>
    </div>
  )
}

export default Category
