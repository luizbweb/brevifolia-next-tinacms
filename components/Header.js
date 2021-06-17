import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
const Container = styled.div`
  padding: 0px 120px;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: flex-end;
  align-items: center;
  background: rgb(19 16 16 / 90%);
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  svg {
    margin: 0px 12px;
  }
  input {
    width: 250px;
    height: 100%;
    max-height: 40px;
    font-weight: bold;
  }
`;

const Header = ({ setSearchTerm }) => {
  return (
    <Container>
      <div>
        <FaSearch color={"white"} />
        <input
          type="text"
          placeholder="Procure um produto"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </Container>
  );
};

export default Header;
