// src/Price.js
import React from "react";
import Card from "react-bootstrap/Card";
import product from "../product";

const Price = () => {
  return (
    <Card.Text style={{ color: "red", fontWeight: "bolder" }}>
      {" "}
      &#8358;{product.price}{" "}
    </Card.Text>
  );
};

export default Price;
