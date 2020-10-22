import React from "react";
import {Link} from "gatsby"

function Footer(){
    return(
        <footer>
            <div className="links">
                <div className="footer-links">
                    <h2>CLUB OTAKU</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/eventwinners">Event Winners</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="address">
                    <h2>Visit Us</h2>
                    <p>
                        Block - 13,
                        <br/>
                        Lovely Professional University,
                        <br/>
                        Delhi G.T.Road (NH-1),
                        <br/>
                        Phagwara, Punjab,144411
                        <br/>
                        INDIA
                    </p>
                </div>
            </div>
            <div className="extras">
                <Link to="/sitemap.xml">Sitemap</Link>
                <span>&#169; Student Organization Otaku</span>
            </div>
            <div className="madeBy">
                <span>Designed And Developed By <a href="https://vaidikkamde.tk">Vaidik Kamde</a></span>
            </div>
        </footer>
    )
}

export default Footer;