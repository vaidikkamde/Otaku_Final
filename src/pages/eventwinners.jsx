import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from "../components/eventWinner/Head"
import Hero from "../components/eventWinner/Hero"
import winnerArray from "../components/eventWinner/winnerArray"
function EventWinner(props){
function createWinners(item,index){
    return(
        <Hero key={index} eventname={item.eventName} winnerimage={item.winnerImage}/>
    )
}
    return(
        <Layout location={props.location.pathname}>
            <SEO title="Event Winners" />
            <Head />
            {winnerArray.map(createWinners)}
        </Layout>
    )
}

export default EventWinner