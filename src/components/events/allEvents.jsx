import React from "react"
import Carousel from "nuka-carousel"
import useWindowDimensions from "../widthHook"
import EventCard from "./eventCard"
import eventsArray, { upComing, onGoing, past } from "./eventsArray.js"
const images = require.context("../../images/events", true)
const imagePath = name => images(name, true)
const AllEvents = props => {
  const { height, width } = useWindowDimensions()
  const today = new Date()
  const nullValues = [
    "No events avaliable.",
    "Keep Looking",
    "New Events Coming Soon",
  ]
  function genrateCards(card, index) {
    return (
      <EventCard
        key={index}
        eventPoster={card.eventPoster}
        eventName={card.eventName}
        registrationDeadline={card.registrationDeadline}
        registrationLink={card.registrationLink}
        eventDescription={card.eventDescription}
        eventStartDate={card.eventStartDate}
        eventEndDate={card.eventEndDate}
        eventTimings={card.eventTimings}
        eventDate={card.eventDate}
        registrationFees={card.registrationFees}
      />
    )
  }
  function genrateEvents(array) {
    if (array.length === 0) {
      return (
        <Carousel
          withoutControls={width > 1025 ? false : true}
          renderBottomCenterControls={false}
          heightMode={"max"}
          autoplay={true}
          autoplayInterval={5000}
          wrapAround={false}
          cellAlign={"left"}
          slidesToShow={width > 1025 ? 3 : 1}
          slidesToScroll={1}
        >
          {nullValues.map((nullValue, index) => {
            return (
              <div className="nullEvents" key={index}>
                {nullValue}
              </div>
            )
          })}
        </Carousel>
      )
    } else if (array.length === 1) {
      return (
        <Carousel
          withoutControls={width > 1025 ? false : true}
          renderBottomCenterControls={false}
          heightMode={"max"}
          autoplay={true}
          autoplayInterval={5000}
          wrapAround={false}
          cellAlign={"left"}
          slidesToShow={width > 1025 ? 3 : 1}
          slidesToScroll={1}
        >
          {array.map(genrateCards)}
          {nullValues.map((nullValue, index) => {
            if (index != 0)
              return (
                <div className="nullEvents" key={index}>
                  {nullValue}
                </div>
              )
          })}
        </Carousel>
      )
    } else if (array.length === 2) {
      return (
        <Carousel
          withoutControls={width > 1025 ? false : true}
          renderBottomCenterControls={false}
          heightMode={"max"}
          autoplay={true}
          autoplayInterval={5000}
          wrapAround={false}
          cellAlign={"left"}
          slidesToShow={width > 1025 ? 3 : 1}
          slidesToScroll={1}
        >
          {array.map(genrateCards)}
          {nullValues.map((nullValue, index) => {
            if (index === 2)
              return (
                <div className="nullEvents" key={index}>
                  {nullValue}
                </div>
              )
          })}
        </Carousel>
      )
    } else {
      return (
        <Carousel
          withoutControls={width > 1025 ? false : true}
          renderBottomCenterControls={false}
          heightMode={"max"}
          autoplay={true}
          autoplayInterval={5000}
          wrapAround={false}
          cellAlign={"left"}
          slidesToShow={width > 1025 ? 3 : 1}
          slidesToScroll={1}
        >
          {array.map(genrateCards)}
        </Carousel>
      )
    }
  }
  return (
    <>
      <section class="events">
        <h1 class="header-pc">Upcoming Events</h1>
        <h5 class="sub-header-pc">Click and drag to view more</h5>
        <h5 class="sub-header-mobile">Swipe To View More</h5>
        {genrateEvents(upComing)}
      </section>
      <section class="events">
        <h1 class="header-pc">Ongoing Events</h1>
        <h5 class="sub-header-pc">Click and drag to view more</h5>
        <h5 class="sub-header-mobile">Swipe To View More</h5>
        {genrateEvents(onGoing)}
      </section>
      <section class="events">
        <h1 class="header-pc">Past Events</h1>
        <h5 class="sub-header-pc">Click and drag to view more</h5>
        <h5 class="sub-header-mobile">Swipe To View More</h5>
        {genrateEvents(past)}
      </section>
    </>
  )
}

export default AllEvents
