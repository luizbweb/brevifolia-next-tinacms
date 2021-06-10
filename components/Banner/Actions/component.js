import React, { FunctionComponent } from "react";
import styled from "styled-components";

// import { Button } from '~components/Button';
// import { Props } from "./types";

export const Actions = ({ className, actions }) => {
  return (
    <div className={className}>
      {actions && actions.map((action) => <Button>{action.text}</Button>)}
    </div>
  );
};

const StyledActions = styled(Actions)`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 16px;

  border-width: ${(props) => (props.debug ? "1px" : "0px")};
  border-color: #3d5afe;
  border-style: solid;

  /* ${Button} {
    --vertical-padding: 14px;
    --horizontal-padding: 24px;
    --background: transparent;
    --foreground: #1d1d1d;
    --border-color: #1d1d1d;
    --border-radius: 4px;

    transition: color 350ms;
    font-size: 1.05rem;
    font-weight: 700;

    box-shadow: 0px 2px 5px 0px rgba(51, 51, 51, 0.59);

    :hover {
      color: rgba(var(--foreground-primary-rgb), 0.7);
    }

    :not(:last-child) {
      margin-right: 16px;
    }
  } */

  @media (max-width: 479px) {
    width: 100%;
/* 
    ${Button}:not (:last-child) {
      margin: 0px 0px 8px;
    }

    ${Button} {
      width: 100%;
      text-align: center;
    } */
  }
`;

export default StyledActions;
