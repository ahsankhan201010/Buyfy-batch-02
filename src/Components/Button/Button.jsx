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
  ...restProps
}) => {
  return (
    <button {...restProps} style={{ background, color, ...style }} className="button">
      <Paragraph color fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
