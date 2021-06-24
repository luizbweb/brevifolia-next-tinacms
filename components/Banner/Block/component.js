import React, { MouseEvent, useMemo, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import classnames from "classnames";

import { Title } from "../Title/component";
import { Content } from "../Content/component";
import { Images } from "../Image/component";
import { Video } from "../Video/component";
import { Actions } from "../Actions/component";
// import { Props } from "./types";

export const Block = ({
  screen,
  content,
  className,
  key,
  padding_left,
  padding_right,
  background_color_alpha,
  vertical_alignment,
  horizontal_alignment,
  width,
  height,
  debug,
  padding,
  setPadding,
}) => {
  const [open, setOpen] = useState(false);
  console.log(content);
  const openCard = useCallback((event) => {
    event.stopPropagation();
    setOpen(true);
  }, []);

  const toggleCard = useCallback((event) => {
    event.stopPropagation();
    setOpen((open) => !open);
  }, []);

  const isText = useMemo(
    () =>
      content &&
      content.some(
        (content) =>
          content._template === "TitleBlock" ||
          content._template === "ContentBlock"
      ),
    [content]
  );
  const isImage = useMemo(
    () =>
      content && content.some((content) => content._template === "ImageBlock"),
    [content]
  );
  const isVideo = useMemo(
    () =>
      content && content.some((content) => content._template === "VideoBlock"),
    [content]
  );
  const isTitle = useMemo(
    () =>
      content && content.every((content) => content._template === "TitleBlock"),
    [content]
  );

  // key={`banner-block-${index}`}
  // padding_left={block.padding_left}
  // padding_right={block.padding_right}
  // background_color_alpha={block.background_color_alpha}
  // vertical_alignment={block.vertical_alignment}
  // horizontal_alignment={block.horizontal_alignment}
  // width={block.width || `${100 / blocks.length}%`}
  // height={"auto"}
  // debug={block.debug}
  console.log("content", content);

  return (
    <StyledBlock
      onClick={openCard}
      className={classnames(
        className,
        screen ? `screen__${screen}` : "screen__all",
        {
          text: isText,
          title: isTitle,
          image: isImage,
          video: isVideo,
          open,
        }
      )}
      padding_left={padding_left}
      padding_right={padding_right}
      background_color_alpha={background_color_alpha}
      vertical_alignment={vertical_alignment}
      horizontal_alignment={horizontal_alignment}
      width={width}
      height={height}
      debug={debug}
    >
      {content &&
        content.map((content, index) => {
          switch (content._template) {
            case "TitleBlock":
              return (
                <Title
                  key={`block-content-${index}`}
                  foreground={content.foreground}
                  font_weight={content.font_weight}
                  font_size={content.font_size}
                  text_alignment={content.text_alignment}
                  line_height={content.line_height}
                  margin_top={content.margin_top}
                  margin_bottom={content.margin_bottom}
                  title={content.title}
                />
              );
            case "ContentBlock":
              return (
                <Content
                  key={`block-content-${index}`}
                  foreground={content.foreground}
                  font_weight={content.font_weight}
                  font_size={content.font_size}
                  text_alignment={content.text_alignment}
                  line_height={content.line_height}
                  margin_top={content.margin_top}
                  margin_bottom={content.margin_bottom}
                  content={content.content}
                />
              );
            case "ActionsBlock":
              return <Actions key={`block-content-${index}`} {...content} />;
            case "ImageBlock":
              return (
                <Images
                  key={`block-content-${index}`}
                  {...content}
                  padding={padding}
                  setPadding={setPadding}
                />
              );
            case "VideoBlock":
              return (
                <Video
                  key={`block-content-${index}`}
                  {...content}
                  setPadding={setPadding}
                />
              );
          }
        })}

      {/* {isText && (
        <button className="card-control" onClick={toggleCard}>
          <FontAwesomeIcon icon={["fas", "chevron-up"]} className="up" />
          <FontAwesomeIcon icon={["fas", "chevron-down"]} className="down" />
        </button>
      )} */}
    </StyledBlock>
  );
};

const StyledBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: ${(props) =>
    props.background_color_alpha?.color?.replace(
      ")",
      `,${(props?.background_color_alpha?.opacity || 100) / 100})`
    )};

  padding: ${(props) => (props.debug ? "8px" : "0px")};
  border-width: ${(props) => (props.debug ? "2px" : "0px")};
  border-color: #ff6f00;
  border-style: solid;

  max-width: 100%;
  width: 100%;

  p {
    font-size: 20px;
    font-weight: 100;
  }
  h2 {
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 0px;
  }

  @media (max-width: 959px) {
    &.screen__desktop {
      display: none;
    }

    &.image {
      order: 1;
    }
    &.text {
      order: 2;
    }

    &.text {
      background: #ffffff;
    }

    &.text h2:not(:first-of-type) {
      margin-top: 18px;
    }

    &.background.image p,
    &.background.image h2 {
      /* padding-left: var(--page-side-gap, 16px); */
      /* padding-right: var(--page-side-gap, 16px); */
    }

    &.background.image p {
      /* padding-bottom: var(--page-side-gap, 16px); */
    }

    &.background.image h2 {
      /* padding-top: var(--page-side-gap, 16px); */
    }
  }

  @media (min-width: 960px) {
    height: ${(props) => props.height || "auto"};
    width: ${(props) => props.width || "auto"};
    justify-content: ${(props) => props.vertical_alignment || "flex-start"};
    align-items: ${(props) => props.horizontal_alignment || "flex-start"};

    &.screen__mobile {
      display: none;
    }

    &.text {
      padding-top: 24px;
      padding-bottom: 24px;
    }

    &.background.image ${Images} {
      display: none;
    }

    :first-child {
      padding-left: ${(props) =>
        // props.stretch ? "0px" : "var(--padding-left)"};
        props.stretch && "0px"};
    }

    :last-child {
      padding-right: ${(props) =>
        // props.stretch ? "0px" : "var(--padding-right)"};
        props.stretch && "0px"};
    }

    :not(:first-child).text {
      padding-left: ${(props) => props.padding_left || "4vw"};
    }

    :not(:last-child).text {
      padding-right: ${(props) => props.padding_right || "4vw"};
    }
  }
`;

export default StyledBlock;
