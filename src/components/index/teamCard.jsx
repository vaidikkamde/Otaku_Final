import React from "react"
const images = require.context("../../images/members", true)
const imagePath = name => images(name, true)
const TeamCard = props => {
  return (
    <div className="team-cards">
      <div class="team-card-outer">
        <div class="team-card">
          <div
            class="image"
            style={{
              background: `url(${imagePath("./" + props.image)})`,
              backgroundPosition: "top left",
              imageRendering: "optimizeSpeed",
              height: "60%",
              width: "100%",
              backgroundSize: "cover",
              borderRadius: "30px 30px 0 0",
            }}
          ></div>
          <div class="content">
            <h2>{props.name}</h2>
            <h4>{props.designation}</h4>
            <div class="social-links">
              Check Out My
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={props.linkedin}
                class="fab fa-linkedin fa-2x"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
