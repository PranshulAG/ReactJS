const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React to Pranshul Agarwal"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, " I am a H1 Tag "),
    React.createElement("p", { id: "p" }, " Hello i am p tag "),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(root);
root.render(parent);
