import React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import PhotosArray from "./photos.js"

/*>
    <img src="src for image" alt="Caption" />
*/
function Hero(props) {
  const options = {
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true,
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: true,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      captionTextTransform: "uppercase",
    },
    thumbnails: {
      showThumbnails: false,
    },
  }
  function createColoumnOne(photo, index) {
    if ((index + 1) % 4 == 1) {
      return <img key={index} src={photo.src} alt={photo.caption} />
    }
  }
  function createColoumnTwo(photo, index) {
    if ((index + 1) % 4 == 2) {
      return <img key={index} src={photo.src} alt={photo.caption} />
    }
  }
  function createColoumnThree(photo, index) {
    if ((index + 1) % 4 == 3) {
      return <img key={index} src={photo.src} alt={photo.caption} />
    }
  }
  function createColoumnFour(photo, index) {
    if ((index + 1) % 4 == 0) {
      return <img key={index} src={photo.src} alt={photo.caption} />
    }
  }
  console.log(PhotosArray)
  return (
    <div className="hero">
      <SRLWrapper options={options}>
        <div className="row">
          <div className="column">{PhotosArray.map(createColoumnOne)}</div>
          <div className="column">{PhotosArray.map(createColoumnTwo)}</div>
          <div className="column">{PhotosArray.map(createColoumnThree)}</div>
          <div className="column">{PhotosArray.map(createColoumnFour)}</div>
        </div>
      </SRLWrapper>
    </div>
  )
}
export default Hero
