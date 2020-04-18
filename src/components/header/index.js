import React from "react"
import styled from "styled-components"

const Headers = styled.header`
  overflow: hidden;
`

const HeaderTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const HeaderTop = styled.div`
  background-color: #77d8d8;
`
const Nav = styled.nav`
  display: flex;
  align-self: center;

  a {
    display: block;
    margin-left: 10px;
    padding: 8px 20px;
    border: 1px solid navy;
  }
`

const LogoWrap = styled.div`
  width: 60px;
  margin-left: -10px;
`
const Logo = styled.img`
  max-width: 100%;
`
const HeaderMid = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
  }
`

const HeaderBottom = styled.div`
  background: #1f1f1f; 

  ul {
    display: flex;
    list-style-type: none;
    color:white;
    margin: 0;
    padding: 0;

    li {
      padding: 19px 0;
      margin-right:30px;
      font-size:18px;
    }
  }
`

const Header = () => {
  return (
    <Headers>
      <HeaderTop>
        <div className="container">
          <HeaderTopWrap>
            <LogoWrap>
              <Logo src="images/ava.png" />
            </LogoWrap>
            <Nav>
              <a href="default.asp">Home</a>
              <a href="news.asp">News</a>
              <a href="contact.asp">Contact</a>
              <a href="about.asp">About</a>
            </Nav>
          </HeaderTopWrap>
        </div>
      </HeaderTop>

      <HeaderMid>
        <img src="images/mac.jpg" alt="main-background"/>
      </HeaderMid>

      <HeaderBottom>
        <div className="container">
        <ul>
          <li>Coding</li>
          <li>About life</li>
          <li>Get a job</li>
          <li>Get in touch</li>
        </ul>
        </div>
      </HeaderBottom>
    </Headers>
  )
}

export default Header
