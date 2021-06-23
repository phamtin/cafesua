import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0 0.25em 0;
  a {
    float: left;
    padding: 6px 12px;
    color: #e3294a;
    font-size: 16px;
    font-weight: bold;
    font-family: calibri;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s;
    backface-visibility: hidden !important;
    -webkit-backface-visibility: hidden !important;
    border-radius: 6px;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 3px 10px rgba(240, 43, 60, 0.1);
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`${props.basePath}/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
