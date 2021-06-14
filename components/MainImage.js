import React from "react";

const MainImage = ({ image }) => {
  console.log(image);
  return (
    <>
      <div style={{ backgroundColor: "#1d1d1d" }}>
        <img
          src={image}
          alt=""
          style={{
            objectFit: "contain",
            objectPosition: "center",
            margin: "0px",
          }}
        />
      </div>
    </>
  );
};

export default MainImage;
