import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/index/head"
import AboutUS from "../components/index/about"
import Review from "../components/index/review"
import Team from "../components/index/team"
import SocialWork from "../components/index/socialWork"
import Achivements from "../components/index/achivements"
import Sponsors from "../components/index/sponsors"
import useWindowDimensions from "../components/widthHook"
const IndexPage = props => {
  const { height, width } = useWindowDimensions()
  console.log(props.location.pathname)
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Home" />
      <>
        <Head />
        <AboutUS />
        <Achivements/>
        <Review />
        <Sponsors/>
        <Team />
        <SocialWork />
      </>
    </Layout>
  )
}
export default IndexPage
