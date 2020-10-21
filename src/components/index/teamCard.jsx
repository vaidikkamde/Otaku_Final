import React from "react"
const images = require.context('../../images/members', true)
const imagePath = name => images(name, true)
const TeamCard  = (props)=>{
    return(
        <div className="team-cards">             
            <div class="team-card-outer">
                <div class="team-card">
                    <div class="image" style={{
                        "background": `url(${imagePath('./'+props.image)})`,
                        "backgroundPosition":"top left","imageRendering":"optimizeSpeed","height":"60%","width":"100%","backgroundSize":"cover","borderRadius":"30px 30px 0 0"
                    }}>
                    </div>
                    <div class="content">
                        <h2>{props.name}</h2>
                        <h4>{props.designation}</h4>
                        <div class="social-links">
                            <a href={props.socialLinks[0].link} class={props.socialLinks[0].media==="globe"?"fas fa-globe fa-2x":`fab fa-${props.socialLinks[0].media} fa-2x`}></a>
                            <a href={props.socialLinks[1].link} class={props.socialLinks[1].media==="globe"?"fas fa-globe fa-2x":`fab fa-${props.socialLinks[1].media} fa-2x`}></a>
                            <a href={props.socialLinks[2].link} class={props.socialLinks[2].media==="globe"?"fas fa-globe fa-2x":`fab fa-${props.socialLinks[2].media} fa-2x`}></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default TeamCard;