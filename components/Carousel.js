import React from "react";
import { Carousel } from "react-responsive-carousel";

const ProductCarousel = ({ gallery }) => {
  return (
    <>
      <div style={{ width: "100%", paddingLeft: "88px" }}>
        <Carousel
          width="600px"
          centerMode={false}
          swipeable={true}
          emulateTouch={true}
          autoPlay={false}
          showStatus={false}
          showIndicators={true}
        >
          {gallery.slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.color} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductCarousel;
