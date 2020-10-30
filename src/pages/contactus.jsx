import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/contactus/Head"
import Form from "../components/contactus/Form"
function ContactUs(props) {
  return (
    <Layout location={props.location.pathname}>
      <SEO title="Contact Us" />
      <Head />
      <Form />
    </Layout>
  )
}

export default ContactUs
