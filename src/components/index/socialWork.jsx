import React from "react"
import OtakuMp4 from "../../videos/otakuOrg.mp4"
import OtakuWebM from "../../videos/otakuOrg.webm"
import videoThumb from "../../videos/videoThumb.png"
function SocialWork(props){
    return(
        <section className="social-work">
            <h1>Social Responsibilty</h1>
            <div className="contents">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, velit deserunt. Laborum laboriosam odio voluptatum amet provident omnis ratione repellendus, temporibus unde dolor itaque veniam. Dignissimos perferendis iure aperiam a harum. Est facere sunt ipsam voluptates quas iure quod maiores, ea a officiis sint, saepe nulla inventore, quibusdam cumque vero accusamus temporibus excepturi autem doloribus nesciunt hic provident aliquid. Perferendis repellendus, facilis tenetur accusamus similique non eligendi et dolores tempore fugit quasi voluptatem itaque deleniti corrupti enim? Neque asperiores qui voluptates optio ullam ab dolorem, porro possimus labore modi dicta tenetur vitae, vel consequatur natus at, temporibus delectus iure incidunt?
                    <br/>
                    <a className="donate" target="_blank" href="https://www.srisaianadhavrudhashramam.org/">Donate</a>
                </p>
                <video controls muted="true" poster={videoThumb}>

                    <source src={OtakuWebM}
                    type="video/webm"/>

                    <source src={OtakuMp4}
                    type="video/mp4"/>

                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </section>
    )
}

export default SocialWork;