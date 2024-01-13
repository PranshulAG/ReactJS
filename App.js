import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React to Pranshul Agarwal"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, " NAMASTE 🚀 "),
    React.createElement("p", { id: "p" }, " Hello i am pranshul tag "),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
