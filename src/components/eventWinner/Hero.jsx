import React from 'react'
const images = require.context("../../images/eventwinners", true)
const imagePath = name => images(name, true)
function Hero(props) {
    return (
        <div className="event-repeater">
            <h2>{props.eventname}</h2>
            <div className="eventwinnerImage"><img src={`${imagePath("./"+props.winnerimage)}`}/></div>            
        </div>
    )
}

export default Hero
