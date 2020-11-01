import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"
const images = require.context("../../images/events", true)
const imagePath = name => images(name, true)
Modal.setAppElement(`#___gatsby`)
const EventCard = props => {
  let today = new Date()
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
  const registration = props.registration
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
  console.log(
    props.eventPoster,
    props.eventName,
    props.eventCategory,
    props.registrationDeadline,
    props.registrationLink
  )
  return (
    <div className="event-cards">
      <div className="event-card-outer">
        <div className="event-card">
          <div
            className="image"
            style={{
              background: `url(${imagePath("./" + props.eventPoster)})`,
              backgroundPosition: "top center",
              imageRendering: "optimizeSpeed",
              height: "60%",
              width: "100%",
              backgroundSize: "cover",
              borderRadius: "30px 30px 0 0",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="content">
            <h3>{props.eventName}</h3>
            <h5>Registration Deadline: {props.registrationDeadline}</h5>
            <div className="registration-links">
              <a
                style={{
                  display:
                    today < new Date(props.registrationDeadline)
                      ? "block"
                      : "none",
                }}
                className="register-btn"
                href={props.registrationLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                Register
              </a>
              <div onClick={openModal} className="know-more-btn">
                Know More
              </div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Event Information"
              >
                <div className="eventModal">
                  <i
                    className="fas fa-window-close fa-lg close-btn"
                    onClick={closeModal}
                  ></i>
                  <div
                    className="modal-image"
                    style={{
                      background: `url(${imagePath("./" + props.eventPoster)})`,
                      backgroundPosition: "top center",
                      imageRendering: "optimizeSpeed",
                      height: "15rem",
                      width: "30rem",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <h2 className="modal-heading">{props.eventName}</h2>
                  <h4 className="modal-subHeading">
                    Registration Deadline {props.registrationDeadline}
                  </h4>
                  <p className="modal-description">
                    {ReactHtmlParser(props.eventDescription)}
                  </p>
                  <br />
                  <h4 className="modal-days">{props.eventDate}</h4>
                  <h4 className="modal-timings">{props.eventTimings}</h4>
                  <h4 className="registration-fees">
                    {props.registrationFees}
                  </h4>
                  <a
                    href={props.registrationLink}
                    rel="noreferrer noopener"
                    target="_blank"
                    style={{
                      display:
                        today < new Date(props.registrationDeadline)
                          ? "block"
                          : "none",
                    }}
                    className="register-btn"
                  >
                    Register
                  </a>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventCard
