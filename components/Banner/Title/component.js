import React, { FunctionComponent } from "react";
import styled from "styled-components";

// import { Props } from "./types";

// const Title = ({className, title}) => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default component

export const Title = ({
  className,
  title,
  foreground,
  font_weight,
  font_size,
  text_alignment,
  line_height,
  margin_top,
  margin_bottom,
}) => {
  return (
    <StyledTitle
      foreground={foreground}
      font_weight={font_weight}
      font_size={font_size}
      text_alignment={text_alignment}
      line_height={line_height}
      margin_top={margin_top}
      margin_bottom={margin_bottom}
    >
      <h2 className={className}>{title}</h2>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  margin-bottom: 0.35em;

  border-width: ${(props) => (props.debug ? "1px" : "0px")};
  border-color: #f50057;
  border-style: solid;
  padding: 0px 4vw;

  h2 {
    /* font-size: 12px !important;
     */
    font-family: "Poppins", sans-serif !important;
  }

  @media (max-width: 959px) {
    color: #1d1d1d;
    font-size: 1.35rem;
    font-weight: 700;
  }

  @media (min-width: 960px) {
    color: ${(props) => props.foreground || "var(--foreground-primary)"};
    font-weight: ${(props) => props.font_weight || 700};
    font-size: ${(props) => props.font_size || "calc(1.60rem + 1vw)"};
    text-align: ${(props) => props.text_alignment || "left"};
    line-height: ${(props) => props.line_height || "1em"};
    margin-top: ${(props) => props.margin_top};
    margin-bottom: ${(props) => props.margin_bottom || "0.5vw"};
  }
`;

StyledTitle.defaultProps = {
  foreground: "var(--foreground-primary)",
};

export default StyledTitle;
