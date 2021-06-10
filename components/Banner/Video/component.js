import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Video as Player } from "../../Video";
// import { Props } from "./types";

export const Video = ({ className, video }) => {
  return <Player src={video} className={className} />;
};

const StyledVideo = styled(Video)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  border-width: ${(props) => (props.debug ? "1px" : "0px")};
  border-color: #d6001c;
  border-style: solid;
`;

StyledVideo.defaultProps = {
  width: "100%",
  height: "100%",
};

export default StyledVideo;
