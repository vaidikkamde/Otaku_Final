import React from "react"
import Carousel from 'nuka-carousel';
import useWindowDimensions from "../widthHook";
import EventCard from "./eventCard"
const images = require.context('../../images/events', true)
const imagePath = name => images(name, true)
const AllEvents = (props)=>{
    const { height, width } = useWindowDimensions();
    return(
        <>
            <section class="events">
            <h1 class="header-pc">Ongoing Events</h1>
            <h5 class="sub-header-pc">Click and drag to view more</h5>
            <h5 class="sub-header-mobile">Swipe To View More</h5>
            <Carousel
                withoutControls={width>1025?false:true}
                renderBottomCenterControls={false}
                heightMode={"current"}
                autoplay={true}
                autoplayInterval={5000}
                wrapAround={true}
                cellAlign={"right"}
                slidesToShow={width>1025?3:1}
                slidesToScroll={1}
                >
            <EventCard registration={true}/>
            </Carousel>
         </section>
         <section class="events">
            <h1 class="header-pc">Upcoming Events</h1>
            <h5 class="sub-header-pc">Click and drag to view more</h5>
            <h5 class="sub-header-mobile">Swipe To View More</h5>
            <Carousel
                withoutControls={width>1025?false:true}
                renderBottomCenterControls={false}
                heightMode={"current"}
                autoplay={true}
                autoplayInterval={5000}
                wrapAround={true}
                cellAlign={"right"}
                slidesToShow={width>1025?3:1}
                slidesToScroll={1}
                >
            <EventCard registration={true}/>
            </Carousel>
         </section>
         <section class="events">
            <h1 class="header-pc">Past Events</h1>
            <h5 class="sub-header-pc">Click and drag to view more</h5>
            <h5 class="sub-header-mobile">Swipe To View More</h5>
            <Carousel
                withoutControls={width>1025?false:true}
                renderBottomCenterControls={false}
                heightMode={"current"}
                autoplay={true}
                autoplayInterval={5000}
                wrapAround={true}
                cellAlign={"right"}
                slidesToShow={width>1025?3:1}
                slidesToScroll={1}
                >
            <EventCard registration={false}/>
            </Carousel>
         </section>
        </>
    )
}

export default AllEvents