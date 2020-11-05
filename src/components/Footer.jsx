import React, { useState } from "react"
import { Link } from "gatsby"
import Modal from "react-modal"
import Privacy from "./Privacy"
Modal.setAppElement(`#___gatsby`)
function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "85vh",
      backgroundColor: "#f4f4f4",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
  }
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
    document.body.classList.add("stop-scrolling")
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
    document.body.classList.remove("stop-scrolling")
  }
  return (
    <footer>
      <div className="links">
        <div className="footer-links">
          <h2>CLUB OTAKU</h2>
          <div className="footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/eventwinners">Event Winners</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-links-pc">
          <h4>Follow Us @</h4>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.facebook.com/Otaku-organisation-102318237915165/"
            className="fab fa-facebook-square fa-2x"
          ></a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://instagram.com/otaku_org?igshid=udcp29v43n4z"
            className="fab fa-instagram fa-2x"
          ></a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://twitter.com/OTAKUORGANIZAT1?s=08"
            className="fab fa-twitter-square fa-2x"
          ></a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/company/otaku-organization"
            className="fab fa-linkedin fa-2x"
          ></a>
        </div>
        <div className="address">
          <h2>Visit Us</h2>
          <p>
            Block - 13,
            <br />
            Lovely Professional University,
            <br />
            Delhi G.T.Road (NH-1),
            <br />
            Phagwara, Punjab,144411
            <br />
            INDIA
          </p>
        </div>
        <div className="social-links-mobile">
          <h4>Follow Us @</h4>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/Otaku-organisation-102318237915165/"
            className="fab fa-facebook-square fa-2x"
          ></a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://instagram.com/otaku_org?igshid=udcp29v43n4z"
            className="fab fa-instagram fa-2x"
          ></a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/OTAKUORGANIZAT1?s=08"
            className="fab fa-twitter-square fa-2x"
          ></a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/company/otaku-organization"
            className="fab fa-linkedin fa-2x"
          ></a>
        </div>
      </div>
      <div className="extras">
        <Link to="/sitemap.xml">Sitemap</Link>
        <span>&copy; {year} Student Organization Otaku</span>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          Privacy Policy
        </span>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Event Information"
        >
          <div className="privacy">
            <i
              className="fas fa-window-close fa-lg close-btn"
              onClick={closeModal}
            ></i>
            <Privacy />
          </div>
        </Modal>
      </div>
      <div className="madeBy">
        <span>
          Designed And Developed By{" "}
          <a
            target="_blank"
            href="https://vaidikkamde.tk"
            rel="noreferrer noopener"
          >
            Vaidik Kamde
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
