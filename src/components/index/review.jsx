import React from "react"
import Carousel from "nuka-carousel"

import useWindowDimensions from "../widthHook"
import ReviewsCard from "./reviewsCard"
import reviewsArray from "./reviewsArray"
const Review = props => {
  const { height, width } = useWindowDimensions()
  console.log(height, width)
  function createReviews(review, index) {
    return (
      <ReviewsCard
        key={index}
        image={review.image}
        review={review.review}
        department={review.department}
        name={review.name}
      />
    )
  }
  return (
    <section class="reviews">
      <h1 class="header-pc">What Students Say About Us ?</h1>
      <h1 class="header-mobile">
        What Students Say <br /> About Us ?
      </h1>
      <h5 class="sub-header-pc">Click and drag to view more</h5>
      <h5 class="sub-header-mobile">Swipe To View More</h5>

      <Carousel
        withoutControls={width > 1025 ? false : true}
        renderBottomCenterControls={false}
        heightMode={width > 1025 ? "max" : "current"}
        autoplay={width > 1025 ? true : false}
        autoplayInterval={4000}
        wrapAround={true}
        cellAlign={"left"}
      >
        {reviewsArray.map(createReviews)}
      </Carousel>
    </section>
  )
}

export default Review
