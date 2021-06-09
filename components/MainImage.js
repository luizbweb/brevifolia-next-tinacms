import React from "react";

const MainImage = ({ image }) => {
  console.log(image);
  return (
    <>
      <img
        src={image}
        alt=""
        style={{ objectFit: "contain", objectPosition: "center", margin: '0px' }}
      />
    </>
  );
};

export default MainImage;
