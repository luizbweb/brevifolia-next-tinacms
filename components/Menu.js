import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem 0px;
  text-align: center;
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
  div {
    margin: 0px;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 1rem;
    margin: 0px;
  }
`;

const Menu = ({ items }) => {
  console.log("ITEM", items);
  return (
    <>
      <Container>
        <h1>Menu</h1>

        <MenuWrapper>
          {items &&
            items.map((item, index) => (
              <div>
                <h1>{item.text}</h1>
              </div>
            ))}
        </MenuWrapper>
      </Container>
    </>
  );
};

export default Menu;
