import React from "React";
import { Link } from "gatsby"
const Footer = (props)=>{
    var year = new Date().getFullYear();
    return(
        <footer>
        <div className="content">
            <div className="page-links">
                <h1>CLUB OTAKU</h1>
                <div className="links">
                    <div className="left">
                        <Link to="#head">Home</Link>
                        <Link to="/">EVENTS</Link>
                        <Link to="/">GALLERY</Link>            
                    </div>
                    <div className="right">
                        <Link to="/">EVENT WINNERS</Link>
                        <Link to="/">TEAM</Link>
                        <Link to="/">CONTACT US</Link>
                    </div>
                </div>
            </div>
            <div className="contact">
                <h1>Visit Us</h1>
                <p>
                    Student Organizations Cell, Block 13
                    <br/>
                    Lovely Professional University
                    <br/>
                    Phagwara, Punjab
                    <br/>
                    144411
                </p>
            </div>
        </div>
        <div className="bottom-link">
            <Link to="/">Sitemap</Link>
            <Link to="/">Privacy Policy</Link>
            <div className="copyright-pc">&#169; 2020 Student Organization Otaku</div>
        </div>
        <div className="copyright-mobile">&#169; {year} Student Organization Otaku</div>
    </footer>
    )
}

export default Footer;