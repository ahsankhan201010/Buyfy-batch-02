import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./Button.css";

const Button = ({
  children,
  background = "purple",
  style = {},
  color = "white",
  fontSize,
  fontWeight,
}) => {
  return (
    <button style={{ background, color, ...style }} className="button">
      <Paragraph color fontSize={fontSize} fontWeigh={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
