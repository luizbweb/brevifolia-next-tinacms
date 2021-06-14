import React from "react";

import styled from "styled-components";

const Container = styled.table`
  color: var(--foreground-primary);
  background: white;
  width: 100%;

  th,
  td {
    line-height: 1.35em;
  }

  th:nth-child(odd),
  td:nth-child(odd) {
    text-align: right;
    width: 50%;
  }

  th:nth-child(even),
  td:nth-child(even) {
    text-align: left;
    width: 50%;
  }

  @media (max-width: 599px) {
    padding: 4px 0px;

    th,
    td {
      font-size: 0.88rem;
      padding: 6px 8px;
    }
  }

  @media (min-width: 600px) and (max-width: 959px) {
    padding: 8px 0px;

    td,
    th {
      padding: 8px 16px;
    }
  }

  @media (min-width: 960px) {
    padding: 12px 0px;

    td,
    th {
      padding: 10px 16px;
    }
  }
`;

const Table = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Table;
