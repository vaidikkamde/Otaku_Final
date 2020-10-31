import React from "react"
import { Link } from "gatsby"

const AboutUS = props => {
  return (
    <section className="about-us" id="about-us">
      <div className="blur">
        <div className="background-links">
          <div className="clip-path">
            <h1>
              <span>ABOUT US</span>
            </h1>
            <p>
              Otaku is a Student Organization at Lovely Professional University.
              <br />
              <br />
              We conduct events for the students as well as provide event
              management for brands and promotional events. Our organization
              believes in following our vision of providing a more fantastic
              path for students of Lovely Professional University to enhance
              their dreams. Also, it supports innovative ideas of every single
              verto.
            </p>
            <div className="foreground-links">
              <h1>
                <span>Check Out Our</span>
              </h1>
              <div className="link_btn">
                <Link to="/gallery">
                  {" "}
                  <div className="gallery-btn">
                    Gallery <span>{">>"}</span>
                  </div>
                </Link>
                <Link to="/eventwinners">
                  {" "}
                <div className="event-winner-btn">
                  Event Winners <span>{">>"}</span>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="links">
            <h1>Check out Our</h1>
            <div className="link_btn">
              <Link to="/gallery">
                {" "}
                <div className="gallery-btn">
                  Gallery <span>{">>"}</span>
                </div>
              </Link>
              <Link to="/eventwinners">
                {" "}
              <div className="event-winner-btn">
                Event Winners <span>{">>"}</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUS
