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
  disabled=false,
  ...restProps
}) => {
  return (
    <button  disabled={disabled} {...restProps} style={{ background: disabled ? "lightgray" : background, color, ...style }} className="button">
      <Paragraph  style={{ textDecoration: disabled ? "line-through" : ""}} color={disabled ? "black" : color} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
