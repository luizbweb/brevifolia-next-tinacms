import React, { FunctionComponent } from "react";
import styled from "styled-components";

// import { Props } from './types';

export const Video = ({ className, src, width, height }) => {
  if (!src) return null;

  return (
    <iframe
      className={className}
      controls={false}
      autoPlay={true}
      muted={true}
      loop={true}
      src={src}
      width={width}
      height={height}
    />
  );
};

const StyledVideo = styled(Video)`
  pointer-events: none;
`;

export default StyledVideo;
