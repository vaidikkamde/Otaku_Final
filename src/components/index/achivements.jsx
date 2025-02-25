import React from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
function Achivements(props) {
  return (
    <section className="achivements">
      <h1 className="achivementHead">Our Achivements</h1>
      <div className="rows">
        
        <div className="col-1">
          <CountUp
            start={0}
            end={5000}
            duration={3}
            separator=","
            suffix="+"
          >
            {({ countUpRef, start}) => (
              <VisibilitySensor onChange={(isVisible)=>{
                  if(isVisible)start()
              }}>
              <div className="parcipantsNum">
                <h1 ref={countUpRef} />
                <h2>Participants</h2>
              </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <CountUp
            start={0}
            end={30}
            duration={5}
            separator=" "
            decimal=","
            suffix="+"
          >
            {({ countUpRef, start}) => (
              <VisibilitySensor onChange={(isVisible)=>{
                  if(isVisible)start()
              }}>
              <div className="eventNum">
                <h1 ref={countUpRef} />
                <h2>Events Organized</h2>
              </div>
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
        <div className="col-2">
        <CountUp
            start={0}
            end={100000}
            duration={3}
            suffix="+"
          >
            {({ countUpRef, start}) => (
              <VisibilitySensor onChange={(isVisible)=>{
                  if(isVisible)start()
              }}>
              <div className="liveinteractionNum">
                <h1 ref={countUpRef} />
                <h2>Views On Live Interactions</h2>
              </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <CountUp
            start={0}
            end={60}
            duration={5}
          >
            {({ countUpRef, start}) => (
              <VisibilitySensor onChange={(isVisible)=>{
                  if(isVisible)start()
              }}>
              <div className="teamNum">
                <h1 ref={countUpRef} />
                <h2>Members Strong</h2>
              </div>
              </VisibilitySensor>
            )}
          </CountUp>
        </div>
      </div>
    </section>
  )
}

export default Achivements
