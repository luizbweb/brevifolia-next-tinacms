import React, { FunctionComponent } from "react";
import styled from "styled-components";

// import { Props } from './types';

export const Video = ({ className, src }) => {
  if (!src) return null;

  return (
    <video
      className={className}
      controls={false}
      autoPlay={true}
      muted={true}
      loop={true}
      src={src}
    />
  );
};

const StyledVideo = styled(Video)`
  pointer-events: none;
`;

export default StyledVideo;
