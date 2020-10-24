import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/events/head"
import AllEvents from "../components/events/allEvents"
const EventPage = (props) =>{
    return(
        <Layout location={props.location.pathname}>
            <SEO title="Events" />
                <section style={{
                    backgroundColor:"#006666"
                }}>
                    <Head/>
                    <AllEvents/>
                </section>    
        </Layout>
    )
}
export default EventPage
