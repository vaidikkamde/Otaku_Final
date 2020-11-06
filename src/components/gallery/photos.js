const images = require.context("../../images/gallery", true)
const imagePath = name => images(name, true)
function Image(imageName) {
  return `${imagePath("./" + imageName)}`
}
const numberOfImages=33
const PhotosArray = [];
for(let i=1;i<=numberOfImages;i++){
  PhotosArray.push({
    src:`${Image(`${i}.jpg`)}`
  })
  console.log(images)
}
export default PhotosArray
