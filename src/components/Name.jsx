// src/Name.js
import React from "react";
import Card from "react-bootstrap/Card";
import product from "../product";
const Name = () => {
  return <Card.Title>{product.name}</Card.Title>;
};

export default Name;
