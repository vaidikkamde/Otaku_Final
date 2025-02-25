import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Logo.png"
const Header = props => {
  // useEffect(() => {
  //     // This runs the script
  //     const myScript = require('../script.js')
  //   }, [props.location])

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <Link to="/">
        <label className="logo" style={{ cursor: "pointer" }}>
          {" "}
          <img
            src={Logo}
            style={{
              top: props.location === "/contactus" ? "-3px" : undefined,
            }}
            alt="logo"
          />{" "}
          <span>{props.siteTitle}</span>
        </label>
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            style={{
              background: props.location === "/" ? "#000" : "transparent",
              textDecoration: props.location === "/" ? "underline" : "none",
              textUnderlineOffset: "4px",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            style={{
              background: props.location === "/events" ? "#000" : "transparent",
              textDecoration:
                props.location === "/events" ? "underline" : "none",
              textUnderlineOffset: "4px",
            }}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            style={{
              background:
                props.location === "/gallery" ? "#000" : "transparent",
              textDecoration:
                props.location === "/gallery" ? "underline" : "none",
              textUnderlineOffset: "4px",
            }}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            style={{
              background:
                props.location === "/contactus" ? "#000" : "transparent",
              textDecoration:
                props.location === "/contactus" ? "underline" : "none",
              textUnderlineOffset: "4px",
            }}
          >
            Contact US
          </Link>
        </li>
      </ul>
    </nav>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
