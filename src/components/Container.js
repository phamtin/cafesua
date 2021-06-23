import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin: 45px auto auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 2em 1.5em 2em;
  flex-grow: 1;
  text-align: justify;
  background: #2b2b2b;

  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 2em 1.3em 2em;
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
