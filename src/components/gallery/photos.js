const images = require.context("../../images/gallery", true)
const imagePath = name => images(name, true)
function Image(imageName) {
  return `${imagePath("./" + imageName)}`
}
const numberOfImages=6
const PhotosArray = [];
for(let i=numberOfImages;i>0;i--){
  PhotosArray.push({
    src:`${Image(`${i}.jpeg`)}`
  })
}
export default PhotosArray
