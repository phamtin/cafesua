import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Headers = styled.header`
  overflow: hidden;
`

const HeaderTopWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`
const HeaderTop = styled.div`
  background-color: #ea5252;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: block;
    color: white;
    margin-left: 10px;
    padding: 5px 10px;

    @media (max-width: 576px) {
      padding: 5px;
      font-size: 15px;
    }
  }
`

const Header = () => {
  return (
    <Headers>
      <HeaderTop>
        <div className="rows">
          <HeaderTopWrap>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </Nav>
          </HeaderTopWrap>
        </div>
      </HeaderTop>
    </Headers>
  )
}

export default Header
