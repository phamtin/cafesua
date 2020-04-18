import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    max-width: 100%;
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
      <HeaderBottom>
        <img src="images/mac.jpg" />
      </HeaderBottom>
    </Headers>
  )
}

export default Header
