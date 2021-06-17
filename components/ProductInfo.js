import React from "react";
import Markdown from "react-markdown";
import styled from "styled-components";

const Container = styled.div`
  p {
    font-size: 1rem;
    margin-bottom: 12px;
    font-family: "Open Sans", sans-serif !important;
  }
`;

export const ProductInfo = ({ info }) => {
  return (
    <Container>
      <Markdown>{info}</Markdown>
    </Container>
  );
};
