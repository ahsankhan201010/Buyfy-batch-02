import React from "react";
import "./Paragraph.css";

var fontWeigtEstimater = (weightStr) => {
  switch (weightStr) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semi-bold":
      return 600;
    case "bold":
      return 700;
    default:
      return 400;
  }
};
const Paragraph = ({
  children,
  fontSize = 16,
  fontWeight = "regular",
  style = {},
  color = "black",
}) => {
  var fontWeightValue = fontWeigtEstimater(fontWeight);
  var fontSizeValue = fontSize/10;
  return (
    <div
      className="paragraph"
      style={{
        fontWeight: fontWeightValue,
        fontSize: `${fontSizeValue}em`,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Paragraph;
