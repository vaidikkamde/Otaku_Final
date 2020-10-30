import React from "react"
const images = require.context("../../images/reviews_avtar", true)
const imagePath = name => images(name, true)
const ReviewsCard = props => {
  return (
    <div class="review_card_outer">
      <div class="review_card">
        <img
          src={imagePath("./" + props.image)}
          class="avatar"
          alt={`${props.image}`}
        />
        <p>{props.review}</p>
        <h3>
          ~~{props.name}, {props.department}
        </h3>
      </div>
    </div>
  )
}

export default ReviewsCard
