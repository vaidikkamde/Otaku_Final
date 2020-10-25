/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./Footer"
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const options = {
    timeout: 8000,
    position: positions.TOP_CENTER
  };
  return (
    <>
    <Provider template={AlertTemplate} {...options}>
      <Header location={props.location}siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main id="main">
      {props.children}
      </main>
      <Footer/>
      </Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
