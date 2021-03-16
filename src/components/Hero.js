import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  /* width: 100%; */
  position: relative;
  min-height: 280px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`
const BgImg = styled(Img)`
  position: absolute;
  width: 100%;
  height: 100%;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  z-index: 2;
  font-size: 2.5em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-decoration:underline;
  user-select: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */


  @media (max-width: 576px) {
    top: 50%;
  }
`

const Hero = props => (
  <Wrapper height={props.height}>
    <BgImg fluid={props.image.fluid} backgroundColor={'#eee'} />
    <Title>{props.title}</Title>
  </Wrapper>
)

export default Hero
