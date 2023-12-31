// src/Image.js
import React from "react";
import Card from "react-bootstrap/Card";
import product from "../product";

const Image = () => {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      style={{
        width: "24rem",
        height: "10rem",
        marginTop: "70px",
        borderRadius: "1rem",
        marginLeft: "-2rem",
        boxShadow:
          "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
      }}
    />
  );
};

export default Image;
