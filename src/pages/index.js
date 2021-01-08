import React from "react"
import { Link, graphql } from "gatsby"

import Helmet from 'react-helmet'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import icon from '../../static/favicon.ico'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <About />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Helmet 
        title={siteTitle} 
        link={[{rel: 'icon', href: icon}]} 
      />
      <Card>
        <Header />
        <About />
        <Footer posts={posts}/>
      </Card>
    </>
        // <Layout location={location} title={siteTitle}>
    //   {/* <SEO title="All posts" /> */}
    // </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
