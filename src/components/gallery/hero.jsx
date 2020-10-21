import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
function Hero(props){
    return (
        <div>
            <Gallery photos={photos} direction={"column"}/>
        </div>
      );
}
export default Hero;