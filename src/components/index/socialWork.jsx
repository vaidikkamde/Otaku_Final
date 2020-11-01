import React from "react"
import OtakuMp4 from "../../videos/otakuOrg.mp4"
import OtakuWebM from "../../videos/otakuOrg.webm"
import videoThumb from "../../videos/videoThumb.png"
function SocialWork(props) {
  return (
    <section className="social-work">
      <h1>Social Responsibilty</h1>
      <div className="contents">
        <p>
          As one of the leading Student Organization in our university it is our duty to help those who are in need no matter if they are from our university or not. Otaku regulary volunteers in events and drives for social cause. Last Year Otaku adopted an <span style={{"fontWeight":"bolder"}}>Old Age Home and NGO  Sri Sai Anadha Vrudhashramam.</span> Otaku regularly donates a part of revenue genrated from the events to the developement of the NGO but funds for social cause are always welcomed.<br/> So help Otaku and help Sri Sai Anadha Vrudhashramam so that we can take care and provide help to those who are in need by doanting some amount using the link Below. 
          <br />
          <br />
          <a
            className="donate"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.srisaianadhavrudhashramam.org/"
          >
            Donate
          </a>
        </p>
        <video controls muted="true" poster={videoThumb}>
          <source src={OtakuWebM} type="video/webm" />
          <source src={OtakuMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </section>
  )
}

export default SocialWork
