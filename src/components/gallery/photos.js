const images = require.context("../../images/gallery", true)
const imagePath = name => images(name, true)
function Image(imageName) {
  return `${imagePath("./" + imageName)}`
}
const PhotosArray = [
  {
    src: `${Image("06.jpeg")}`,
    caption: "Caption 6",
  },
  {
    src: `${Image("05.jpeg")}`,
    caption: "Caption 5",
  },
  {
    src: `${Image("04.jpeg")}`,
    caption: "Caption 4",
  },
  {
    src: `${Image("03.jpeg")}`,
    caption: "Caption 3",
  },
  {
    src: `${Image("02.jpeg")}`,
    caption: "Caption 2",
  },
  {
    src: `${Image("01.jpeg")}`,
    caption: "Caption 1",
  },
]
export default PhotosArray
