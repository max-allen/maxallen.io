import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Template from '../components/About'
import About from '../components/About'
import Footer from '../components/Footer'
import { rhythm } from '../utils/typography'
import icon from '../../static/favicon.ico'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <>
        <Helmet 
        title={siteTitle} 
        link={[{rel: 'icon', href: icon}]} 
        />
        <About />
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
