import React from "react";
import Carousel from 'nuka-carousel';

import useWindowDimensions from "../widthHook";
import ReviewsCard from "./reviewsCard";
import reviewsArray from "./reviewsArray";
const Review = (props)=>{
    const { height, width } = useWindowDimensions();
    console.log(height,width);
    function createReviews(review,index) {
        return(
            <ReviewsCard
            key={index}
            image={review.image}
            review={review.review}
            department={review.department}
            name={review.name}
            />
        )
    }
    return(
        <section class="reviews">
            <h1 class="header-pc">What Students Say About Us ?</h1>
            <h1 class="header-mobile">What Students Say <br/> About Us ?</h1>
            <h5 class="sub-header-pc">Click and drag to view more</h5>
            <h5 class="sub-header-mobile">Swipe To View More</h5>
            
            <Carousel
                withoutControls={width>1025?false:true}
                renderBottomCenterControls={false}
                heightMode={"current"}
                autoplay={true}
                autoplayInterval={4000}
                wrapAround={true}
                cellAlign={"right"}
                >
                    {reviewsArray.map(createReviews)}
                    {/* <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div>
                    <div class="review_card_outer">
                        <div class="review_card">
                            <img src={Avtar} class="avatar" alt="Avtar Img"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, consequatur, nemo illo incidunt, similique a repellat laboriosam facilis obcaecati temporibus aliquam sed unde natus? Maiores pariatur nam consectetur natus quod!</p>
                            <h3>~~Sample Name, CSE</h3>
                        </div>
                    </div> */}
            </Carousel>
        </section>
    )
}

export default Review;