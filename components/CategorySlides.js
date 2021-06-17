import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 0px 1.6rem;
`;

const Slide = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    object-fit: contain;
    width: 100%;
    max-width: 300px;
    height: 220px;
    max-height: 220px;
    margin: auto;
  }
  h3 {
    margin: 0px;
  }
`;

const mystyle = {
  // color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const CategorySlides = ({ slides }) => {
  console.log(slides);
  return (
    <>
      <Container>
        <Carousel
          itemsToShow={8}
          itemsToScroll={3}
          enableMouseSwipe={false}
          pagination={false}
          // renderArrow={pointer.myArrow}
          // showArrows={}
        >
          {slides &&
            slides.map((slide, index) => (
              <Slide>
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
              </Slide>
            ))}
        </Carousel>
      </Container>
      {/* <Carousel>
        <img src={slides[0].image} alt={slides[0].title} />
        <img src={slides[0].image} alt={slides[0].title} />
      </Carousel> */}
      {/* <Carousel itemsToShow={3}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Carousel> */}
    </>
  );
};
export default CategorySlides;
