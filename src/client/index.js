import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";

const renderApp = () => {
  render(<App />, document.getElementById("root"));
};

renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/app.jsx", () => {
    renderApp();
  });
}
