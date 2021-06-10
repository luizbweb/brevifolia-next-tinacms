import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import { Block } from "./Block/component";

export const Banner = ({
  blocks,
  id,
  className,
  fullWidth,
  backgroundImage,
  horizontal_alignment,
  vertical_alignment,
  stretch,
  margin_bottom,
  margin_top,
  height,
  debug,
}) => {
  console.log(backgroundImage);
  console.log(blocks);
  return (
    <StyledBanner
      id={id}
      className={classnames(className, {
        empty: !blocks,
        "full-width": fullWidth,
        stretch: stretch,
      })}
      backgroundImage={backgroundImage}
      blocks={blocks}
      backgroundImage={backgroundImage}
      horizontal_alignment={horizontal_alignment}
      vertical_alignment={vertical_alignment}
      fullWidth={fullWidth}
      stretch={stretch}
      margin_bottom={margin_bottom}
      margin_top={margin_top}
      height={height || "70vh"}
      debug={debug}
    >
      {blocks &&
        blocks.map((block, index) => (
          <Block
            content={block.content}
            key={`banner-block-${index}`}
            padding_left={block.padding_left}
            padding_right={block.padding_right}
            background_color_alpha={block.background_color_alpha}
            vertical_alignment={block.vertical_alignment}
            horizontal_alignment={block.horizontal_alignment}
            width={block.width || `${100 / blocks.length}%`}
            height={"auto"}
            stretch={block.stretch}
            screen={block.screen}
            debug={block.debug}
            className={classnames({
              background: !!backgroundImage,
            })}
          />
        ))}
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) => props.horizontal_alignment};
  align-items: ${(props) => props.vertical_alignment};
  padding-left: 4vw;
  padding-right: 120px;
  padding-top: ${(props) => (props.debug ? "8px" : "0px")};
  padding-bottom: ${(props) => (props.debug ? "8px" : "0px")};
  border-width: ${(props) => (props.debug ? "3px" : "0px")};
  border-color: #4a148c;
  border-style: solid;
  background-image: url(${(props) => props.backgroundImage});


  color:#fff;

  @media (max-width: 420px) {
    border-radius: 8px;

    &.mobile-card {
      padding-bottom: 68px;
    }

    ${Block}.text:not (.image) {
      padding: 8px 16px 16px;
    }

    &.mobile-card ${Block}.text {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      overflow: hidden;
      height: 68px;

      transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
      transition-property: height;
      transition-duration: 250ms;

      z-index: 10;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &.mobile-card ${Block}.text.open {
      height: 100%;

      p,
      h2 {
        user-select: all;
        pointer-events: all;
      }
    }

    &.mobile-card ${Block}.text::after {
      content: "";
      width: 100%;
      height: 25px;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );

      position: absolute;
      bottom: 0;
      left: 0;
    }

    ${Block}.text h2 {
      font-size: 1rem;
      padding-right: 12px;
    }

    ${Block}.text p {
      font-size: 0.88rem;
    }

    &:not(.mobile-card) ${Block} .card-control {
      display: none;
    }

    &.mobile-card ${Block} .card-control {
      border: none;
      background: transparent;
      cursor: pointer;
      padding: 0px;
      height: 24px;
      width: 24px;

      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      position: absolute;
      right: 8px;
      top: 8px;
    }

    &.mobile-card ${Block} .card-control .up,
    &.mobile-card ${Block} .card-control .down {
      font-weight: 700;
      font-size: 10px;

      transition-timing-function: linear;
      transition-property: transform;
      transition-duration: 250ms;
    }

    &.mobile-card ${Block}.text.open .card-control {
      .up {
        transform: translateY(6px);
      }

      .down {
        transform: translateY(-7px);
      }
    }
  }

  @media (min-width: 421px) {
    ${Block} .card-control {
      display: none;
    }

    ${Block}.text {
      p,
      h2 {
        user-select: text;
        pointer-events: all;
      }
    }
  }

  @media (min-width: 421px) and (max-width: 959px) {
    border-radius:  8px 8px 0px 0px;
    margin-top: 60px;

    :last-child {
      margin-bottom: 48px;
    }

    ${Block}.text {
      /* padding: var(--page-side-gap, 16px); */
    }
  }

  @media (max-width: 959px) {
    box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.4);
    border-color: rgba(51, 51, 51, 0.2);
    border-style: solid;
    border-width: 1px;
    overflow: hidden;

    width: 100vw;
    max-width: 100%;
    position: relative;

    &:not(.mobile-card) {
      margin-bottom: 68px;
    }

    &.full-width {
      width: 100%;
      max-width: 100%;
      position: relative;
      margin-left: 0;
      margin-right: 0;
      right: 0;
      left: 0;
    }

    &.empty {
      display: none;
    }
  }

  @media (min-width: 960px) {
    height: ${(props) => props.height};
    min-height: 100px;

    margin-top: ${(props) => props.margin_top};
    margin-bottom: ${(props) => props.margin_bottom};

    background-color: ${(props) => props.backgroundColor};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &.full-width {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;

      /* &:not(.stretch) ${Block}:first-child {
        --padding-left: var(--page-side-gap);
      }

      &:not(.stretch) ${Block}:last-child {
        --padding-right: var(--page-side-gap);
      } */
    }
  }
`;

StyledBanner.defaultProps = {
  horizontal_alignment: "space-between",
  vertical_alignment: "center",
};

StyledBanner.whyDidYouRender = true;

export default React.memo(StyledBanner);
