import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import logo from "../public/static/logodt3.png";
import Image from "next/image";
const Container = styled.div`
  padding: 0px 180px;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: ${(props) =>
    props.noSearch ? `flex-start` : `space-between`};
  align-items: center;
  background: #fff;
  position: fixed;
  z-index: 1000;
  top: 0;
  box-shadow: rgb(0 0 0 / 30%) 5px 5px 10px, rgb(255 255 255) -5px -5px 10px 5px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  img {
    cursor: pointer;
  }
  svg {
    margin: 0px 12px;
  }
  input {
    width: 250px;
    height: 100%;
    max-height: 40px;
    font-weight: bold;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #000;
    }
    :-ms-input-placeholder {
      color: #000;
    }
  }
`;

const Header = ({ setSearchTerm, noSearch }) => {
  return (
    <Container noSearch={noSearch}>
      <Link href={{ pathname: "/" }}>
        <Image src={logo} alt="Picture of the author" width={90} height={40} />
      </Link>
      {!noSearch && (
        <div>
          <FaSearch color={"#000"} />
          <input
            type="text"
            placeholder="Procure um produto"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default Header;
