import React from "react";
import Carousel from 'nuka-carousel';
import useWindowDimensions from "../widthHook";
import membersArray from "./membersArray";

import TeamCard from "./teamCard"
const Team = (props)=>{
    const { height, width } = useWindowDimensions();
    function createMembers(member,index){
        return(
            <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            designation={member.designation}
            socialLinks={member.socialLinks}
            />
        )
    }
    return(
        <section class="team">
        <h1 class="header-pc">Our Team</h1>
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
        {membersArray.map(createMembers)}
        </Carousel>
    </section>
    )
}
export default Team;