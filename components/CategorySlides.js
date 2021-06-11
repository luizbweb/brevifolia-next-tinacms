import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const Slide = styled.div`
  width: 100%;
  border: 1px solid black;
  img {
    object-fit: contain;
    width: 100%;
    max-width: 300px;
    height: 100px;
    max-height: 100px;
    margin: 0px;
  }
  h3 {
    margin: 0px;
  }
`;

const CategorySlides = ({ slides }) => {
  return (
    <>
      <Container>
        {slides &&
          slides.map((slide, index) => (
            <Slide>
              <img src={slide.image} alt={slide.title} />
              <h3>{slide.title}</h3>
            </Slide>
          ))}
      </Container>
    </>
  );
};

export default CategorySlides;
