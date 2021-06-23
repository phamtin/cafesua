import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 1.35em 0;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 10px 0 rgba(82, 82, 82, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.75em 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1.75em;
    &:first-of-type {
      position: relative;
      margin: 0;
    }
    &:first-of-type {
      margin-right: auto !important;
    }
  }

  a {
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.highlight};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a href="https://viblo.asia/u/PhamTin" target="blank">
              Tech area
            </a>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
