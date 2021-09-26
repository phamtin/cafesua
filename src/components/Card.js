import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  border-radius: 14px;
  overflow: hidden;
  background: rgb(26, 26, 26);

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2.75vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 30.5%')};
  }
  &:hover {
    box-shadow: 0 2px 5px rgba(232, 232, 232, 1);
    h2 {
      color: ${props => props.theme.colors.highlight};
      transition: 0.3s;
    }
    transition: all 0.3s;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 1em;
  font-weight: 700;
  margin: 1.25rem 1.25rem 0.75rem 1.25rem;
`

const Date = styled.h5`
  color: ${props => props.theme.colors.highlight};
  font-weight: 600;
  font-size: 0.8em;
  margin: 0 1.25rem 0.5rem 1.25rem;
`

const Excerpt = styled.p`
  font-size: 0.9em;
  margin: 0 1.25rem 1.25rem 1.25rem;
  line-height: 1.4;
  // font-weight: 600;
`

const convertDateFormat = date => {
  const day = date.split(' ')[1]
  const year = date.split(' ')[2]
  let month = date.split(' ')[0]
  switch (month) {
    case 'January':
      month = 'Jan'
      break
    case 'Febuary':
      month = 'Feb'
      break
    case 'March':
      month = 'Mar'
      break
    case 'April':
      month = 'Apr'
      break
    case 'May':
      month = 'May'
      break
    case 'June':
      month = 'Jun'
      break
    case 'July':
      month = 'Jul'
      break
    case 'August':
      month = 'Aug'
      break
    case 'September':
      month = 'Sep'
      break
    case 'October':
      month = 'Oct'
      break
    case 'November':
      month = 'Nov'
      break
    case 'December':
      month = 'Dec'
      break

    default:
      month = month
  }
  return month + ',' + day + year
}

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eee'} />
            <Title>{title}</Title>
            <Date>{convertDateFormat(publishDate)}</Date>
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
