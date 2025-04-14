import React from "react";
import style from "./HtmlOutput.module.css";

const HtmlOutput = ({ children }) => {
  return (
    <div
      style={{
        padding: "10px 5px",
        borderRadius: "6px",
        border: "2px solid #dee2e6",
        // backgroundColor: "#f1f3f5",
        // color: "black",
      }}
      className={style.anchor}
    >
      {children}
    </div>
  );
};

export default HtmlOutput;
