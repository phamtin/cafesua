import React from "react"
import { Link } from "gatsby"

import "./footer.scss"

const Footer = () => {
  const goTop = () => window.scrollTo({ top: 0 })

  return (
    <footer>
      <div className="rows ft-top">
        <div className="f1">
          <div className="about-me">
            <h5>About me</h5>
            <p>
              Xin chào, tôi là Tín, cảm ơn đã ghé thăm cái đống lộn xộn nơi đây.
              Blog này hy vọng sẽ kéo tôi ra khỏi sự chán chường của những dòng
              code xanh đỏ lúc 1h sáng, và cũng là nơi lưu lại những suy nghĩ về
              những điều đã qua, đôi khi thất vọng, đôi khi hào hứng, nhưng có
              vậy ta mới cảm nhận được chút gì đó thú vị của cuộc sống và cũng
              để chuẩn bị cho cái tương lai chập choạng phía trước :)) từ đó có
              thêm chút động lực mà bước tiếp.
            </p>
          </div>
          <div className="contact">
            <i class="fas fa-envelope" />
            tinphamtp@gmail.com
          </div>
        </div>
        <div className="f2">
          <h5>Thông tin</h5>
          <ul>
            <li>
              <Link to="/" style={{ color: "white" }}>
                About me
              </Link>
            </li>
            <li>
              <Link to="/">About this Blog</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="f3">
          <h5>Bài viết</h5>
          <ul>
            <li>
              <Link to="/">Bài viết</Link>
            </li>
            <li>
              <Link to="/">Nhật ký</Link>
            </li>
            <li>
              <Link to="/">Chuyện nghề</Link>
            </li>
            <li>
              <Link to="/">Tech area</Link>
            </li>
          </ul>
        </div>
        <div className="f4">
          <h5>Đăng ký</h5>
          <form>
            <input />
            <br />
            <button>Đăng ký</button>
          </form>
          <span onClick={goTop}>Go top</span>
        </div>
      </div>
      <div className="rows ft-bot">
        <ul>
          <li>facebook</li>
          <li>gmail</li>
          <li>twitter</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
