import React from "react";
import { render } from "react-dom";

const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, {
      name: "Mestk",
      animal: "cat",
      breed: "sherzy",
    }),
    React.createElement(pet, {
      name: "Koko",
      animal: "Cat",
      breed: "sherzy",
    }),
    React.createElement(pet, {
      name: "Doma",
      animal: "Cat",
      breed: "sherzy",
    })
  );
};
render(React.createElement(App), document.getElementById("root"));
