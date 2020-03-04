import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Link to="/">
      <Img fixed={data.icon.childImageSharp.fixed} alt="header-image" />
    </Link>
  )
}
