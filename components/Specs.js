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
  img {
    object-fit: contain;
    width: 50%;
    height: 100%;
    max-height: 460px;
  }
`;

const Specs = ({ front, side }) => {
  return (
    <>
      <div id={"especificacoes"}>
        <Container>
          {front && <img src={front} alt="" />}
          {side && <img src={side} alt="" />}
        </Container>
      </div>
    </>
  );
};

export default Specs;
