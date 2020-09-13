import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: -1.25em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.primary};
    color: white;
    font-size: 0.9em;
    padding: 0.65rem 1.75em;
    border-radius: 4px;
    text-decoration: none;
    transition: 0.2s;
    box-shadow: 0px 5px 15px #c2c2c2;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }

    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      padding: 0.7rem 1.25em;
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  font-weight: 400;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  font-weight: 400;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`${props.basePath}/${props.previous.slug}/`}>
            Bài mới hơn
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`${props.basePath}/${props.next.slug}/`}>
            &nbsp;Bài cũ hơn&nbsp;
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
