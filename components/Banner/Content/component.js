import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Markdown from "react-markdown";

// import { Props } from './types';

export const Content = ({
  className,
  content,
  foreground,
  font_size,
  font_weight,
  text_align,
  line_height,
  margin_top,
  margin_bottom,
}) => {
  if (!content) return null;
  console.log(content);

  return (
    <StyledContent
      foreground={foreground}
      font-size={font_size}
      font-weight={font_weight}
      text-align={text_align}
      line-height={line_height}
      margin-top={margin_top}
      margin-bottom={margin_bottom}
    >
      <Markdown className={className} source={content}>
        {content}
      </Markdown>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  border-width: ${(props) => (props.debug ? "1px" : "0px")};
  border-color: #d500f9;
  border-style: solid;
  p {
    line-height: 1.25em;
  }

  p:not(:last-child) {
    margin-bottom: 5px;
  }

  a {
    color: var(--foreground-highlight);
    position: relative;
  }

  a::after {
    content: "";
    width: 0px;
    height: 1px;
    display: inline-block;
    transform: translateX(-50%);
    position: absolute;
    bottom: -2px;
    left: 50%;

    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
  }

  a:visited {
    color: var(--foreground-highlight-dark);
  }

  a:not(:visited)::after {
    background: var(--foreground-highlight);
  }

  a:hover::after {
    background: var(--foreground-highlight);
    width: 100%;
  }

  a:visited::after {
    background: var(--foreground-highlight-dark);
  }

  blockquote {
    quotes: "“" "”" "‘" "’";
    display: block;
    border-width: 2px 0;
    border-style: solid;
    border-color: #eeeeee;
    padding: 1em 1em 0.75em;
    margin: 1em 0em 0.35em;
    position: relative;
    text-align: center;
    font-style: italic;

    ::before {
      content: "”";
      color: #dddddd;
      background: #ffffff;
      font-style: normal;
      display: inline-block;
      line-height: 1em;
      font-size: 5.5em;
      height: 0.4em;
      transform: translate3d(-50%, -50%, 0);
      position: absolute;
      left: 50%;
      top: 0;
    }
  }

  @media (max-width: 959px) {
    p {
      color: #1d1d1d;
      font-size: 1rem;
    }
  }

  @media (min-width: 960px) {
    p {
      color: ${(props) => props.foreground || "#FFF"};
      font-size: ${(props) => props.font_size || "calc(1rem + 0.25vw)"};
      font-weight: ${(props) => props.font_weight || "300"};
      text-align: ${(props) => props.text_alignment || "left"};
      line-height: ${(props) => props.line_height || "1.35em"};
      margin-top: ${(props) => props.margin_top};
      margin-bottom: ${(props) => props.margin_bottom};
    }
  }
`;

StyledContent.defaultProps = {
  foreground: "#FFF",
  margin_top: "0px",
  margin_bottom: "0px",
  text_alignment: "left",
  line_height: "1.35em",
  font_weight: "400",
  font_size: "1rem",
};

export default StyledContent;
