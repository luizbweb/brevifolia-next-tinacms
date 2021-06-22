import React, { FunctionComponent } from "react";
import styled from "styled-components";

// import { ResponsiveImage } from "~components/ResponsiveImage";
// import { Button } from "~components/Button";
// import { Props } from './types';

export const Images = ({
  className,
  image,
  objectFit,
  objectPosition,
  link,
}) => {
  // console.log(image);
  return (
    <>{image && <img src={image.desktop_image} alt={link} />}
    
    </>

    // <Button className={className} href={link}>
    //   <ResponsiveImage
    //     objectPosition={objectPosition}
    //     objectFit={objectFit}
    //     image={image}
    //   />
    // </Button>

    // {image ? <img src={image.desktop_image} alt={link} /> : null}
  );
};

const StyledImage = styled.div`
  --background: transparent;
  --horizontal-padding: 0px;
  --vertical-padding: 0px;
  --border-width: 0px;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  overflow: hidden;

  border-width: ${(props) => (props.debug ? "1px" : "0px")};
  border-color: #007ac1;
  border-style: solid;

  position: relative;

  &.button {
    cursor: auto;
  }
  img {
    objectfit: contain;
  }
`;

// /*
//   .gatsby-image-wrapper {
//     width: 100%;
//     height: 100%;
//     position: static !important; /** sorry /; **/
//   } */

export default StyledImage;
