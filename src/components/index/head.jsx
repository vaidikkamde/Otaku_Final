import React from "react"
import { Link } from "gatsby"

const Head = props => {
  return (
    <section className="head" id="head">
      <div className="blur">
        <div className="clip-path"></div>
      </div>
      <div className="content">
        <h1 className="heading-pc">WE ARE OTAKU</h1>
        <h1 className="heading-mobile">
          WE ARE <span>OTAKU</span>
        </h1>
        <h3 className="sub-heading-pc">Check out our</h3>
        <h3 className="sub-heading-mobile">
          Check out <span>our</span>
        </h3>
        <Link to="/events">
          <div className="latest-events">
            Latest Events <span>{">>"}</span>
          </div>
        </Link>
      </div>
      <div className="scroll-btn-container">
        <span>
          <a href="#about-us" className="fas fa-angle-double-down fa-2x"></a>
        </span>
      </div>
    </section>
  )
}

export default Head
