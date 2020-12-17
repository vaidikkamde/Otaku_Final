import React from "react"
import Carousel from "nuka-carousel"

import useWindowDimensions from "../widthHook"

import explore from "../../images/sponsors/explore.png"
const Sponsors = props => {
  const { height, width } = useWindowDimensions()
  console.log(height, width)

  return (
    <section class="reviews">
      <h1 class="header-pc" >Our Sponsors</h1>
      <h1 class="header-mobile">
        Our Sponsors
      </h1>
      {/* <h5 class="sub-header-pc">Click and drag to view more</h5>
      <h5 class="sub-header-mobile">Swipe To View More</h5> */}
        <Carousel
        withoutControls={true}
        renderBottomCenterControls={true}
        heightMode={"max"}
        autoplay={false}
        wrapAround={false}
        cellAlign={"center"}
        slidesToShow={width > 1023 ? 3 :(width < 767? 1:2)}
        slidesToScroll={width > 1023 ? 3 :(width < 767? 1:2)}
        dragging={false}
      >
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
              <a rel="noreferrer noopener"
                target="_blank" 
                href="http://exploretravellers.com/"
                className="sponsorImg"
                >
                  <img src={explore} alt="explore travellers"/>
              </a>
          </div>
      </Carousel>
    </section>
  )
}

export default Sponsors
