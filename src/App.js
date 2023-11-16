// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
// import Button from "react-bootstrap/Button";

const firstName = ""; // Replace with your first name, when name is input here, An image will display else the image behind will not display

const App = () => {
  return (
    <div
      style={{
        margin: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "16rem",
          width: "50rem",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        }}
      >
        <Image />
        <Card.Body
          style={{
            textAlign: "center",
            padding: "40px",
          }}
        >
          <Name />
          <Price />
          <Description />
          <Button
            style={{ color: "red", fontWeight: "bolder" }}
            variant="primary"
          >
            Click To Purchase
          </Button>
        </Card.Body>
      </Card>
      <p style={{ display: "grid" }}>
        Hello {firstName}
        {firstName ? <Image /> : `there!, Insert your name`}
      </p>
    </div>
  );
};

export default App;
