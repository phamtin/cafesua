import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  padding: 14px 0;
  background-color: #050505;
  border-bottom: ${props => props.theme.colors.highlight} 5px solid;

  button {
    position: absolute;
    color: red;
    bottom: 100px;
    right: 100px;
    padding: 20px 6px;
    border-radius: 100px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 8px 10px #d1d1d1;
    cursor: pointer;

    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      right: 50px;
    }

    img {
      transition: 0.2s;
      transform: translateY(2px);
    }

    &:hover {
      img {
        transform: translateY(-2px);
      }
    }
  }
`

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  padding: 0.25em 0;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
    img {
      height: 20px;
    }
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => {
  const goUp = () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return (
    <Wrapper>
      <button onClick={goUp}>
        <img
          src="https://i.ibb.co/cyG5Bs7/aa.png"
          style={{ height: '30px', width: 'auto' }}
        />{' '}
      </button>
      <List>
        <Item>
          <a
            href="https://www.facebook.com/tin.pham.3994"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <div className="icon" />
            <img
              src="https://i.ibb.co/gVS3Jw6/f.png"
              style={{
                height: '30px',
                width: 'auto',
                marginRight: '20px',
              }}
              alt="facebook-icon"
            />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.instagram.com/tinphamtp/?hl=vi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.ibb.co/fDgyw1g/i.png"
              style={{ height: '30px', width: 'auto' }}
              alt="facebook-icon"
            />
          </a>
        </Item>
      </List>
    </Wrapper>
  )
}

export default Footer
