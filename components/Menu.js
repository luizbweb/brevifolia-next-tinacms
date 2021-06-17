import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px;
  text-align: center;
  background-color: #1d1d1d;

  h1 {
    margin: 0px;
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.4rem 0px;
  margin: 0px;
  height: 100%;

  div {
    margin: 0px;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 1rem;
    margin: 0px;
    color: #fff;
  }
`;

const Menu = ({ items }) => {
  return (
    <>
      <Container>
        <MenuWrapper>
          {items &&
            items.map((item, index) => (
              <div>
                <a href={item.link}>
                  <h1>{item.text}</h1>
                </a>
              </div>
            ))}
        </MenuWrapper>
      </Container>
    </>
  );
};

export default Menu;
