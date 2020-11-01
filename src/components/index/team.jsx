import React from "react"
import Carousel from "nuka-carousel"
import useWindowDimensions from "../widthHook"
import membersArray from "./membersArray"

import TeamCard from "./teamCard"
const Team = props => {
  const { height, width } = useWindowDimensions()
  function createMembers(member, index) {
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
  return (
    <section class="team">
      <h1 class="header-pc">Our Team</h1>
      <h5 class="sub-header-pc">Click and drag to view more</h5>
      <h5 class="sub-header-mobile">Swipe To View More</h5>
      <Carousel
        withoutControls={width > 1025 ? false : true}
        renderBottomCenterControls={true}
        heightMode={"max"}
        autoplay={false}
        wrapAround={false}
        cellAlign={"left"}
        slidesToShow={width > 1025 ? 3 : 1}
        slidesToScroll={width > 1025 ? 3 : 1}
      >
        {membersArray.map(createMembers)}
      </Carousel>
    </section>
  )
}
export default Team
