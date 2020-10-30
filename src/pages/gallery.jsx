import React from "react"
import SimpleReactLightbox from "simple-react-lightbox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/gallery/head"
import Hero from "../components/gallery/hero"
const GalleryPage = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Gallery" />
      <SimpleReactLightbox>
        <Head />
        <Hero />
      </SimpleReactLightbox>
    </Layout>
  )
}
export default GalleryPage
