import React,{useState} from "react"
import Carousel from "nuka-carousel"
import useWindowDimensions from "../widthHook"
import membersArray from "./membersArray"

import TeamCard from "./teamCard"
const Team = props => {
  const { height, width } = useWindowDimensions()
  function createCore(member, index) {
    if(member.position==="core"){
    return (
      <TeamCard
        key={index}
        image={member.image}
        name={member.name}
        designation={member.designation}
        linkedin={member.linkedin}
      />
    )
    }
  }
  function createTeam(member, index) {
    if(member.position!=="core"){
    return (
      <TeamCard
        key={index}
        image={member.image}
        name={member.name}
        designation={member.designation}
        linkedin={member.linkedin}
      />
    )
    }
  }
  return (
   <> 
    <section class="team">
      <h1 class="header-pc">Core Members</h1>
      <h5 class="sub-header-mobile">Swipe To View More</h5>
      <Carousel
        withoutControls={true}
        renderBottomCenterControls={true}
        heightMode={"max"}
        autoplay={false}
        wrapAround={false}
        cellAlign={"left"}
        slidesToShow={width > 1023 ? 3 :(width < 767? 1:2)}
        slidesToScroll={width > 1023 ? 3 :(width < 767? 1:2)}
      >
        {membersArray.map(createCore)}
      </Carousel>
    </section>
    <section class="team">
      <h1 class="header-pc">Our Team</h1>
      <h5 class="sub-header-pc">Click and drag to view more</h5>
      <h5 class="sub-header-mobile">Swipe To View More</h5>
      <Carousel
        withoutControls={width > 767 ? false : true}
        renderBottomCenterControls={true}
        heightMode={"max"}
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={false}
        cellAlign={"left"}
        slidesToShow={width > 1023 ? 3 :(width < 767? 1:2)}
        slidesToScroll={width > 1023 ? 3 :(width < 767? 1:2)}
      >
        {membersArray.map(createTeam)}
      </Carousel>
    </section>
    </>
  )
}
export default Team
