import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/gallery/head"
import Hero from "../components/gallery/hero"
const GalleryPage = (props)=>{
    return(
        <Layout location={props.location.pathname}>
            <SEO title="Gallery" />
            <Head/>
            <Hero/>
        </Layout>
    )
}
export default GalleryPage