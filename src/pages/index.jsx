import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/index/head"
import AboutUS from "../components/index/about"
import Review from "../components/index/review"
import Team from "../components/index/team"
const IndexPage = (props) => {
  console.log(props.location.pathname)
  return(
  <Layout location={props.location.pathname}>
    <SEO title="Home" />
    <>
      <Head/>
      <AboutUS/>
      <Review/>
      <Team/>
    </>    
  </Layout>
)
}
export default IndexPage
