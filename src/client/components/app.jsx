import React from "react";
import { Provider } from "react-redux";
import store from "./../store";
import Calendar from "./Calendar.jsx";

const App = () => (
  <Provider store={store}>
    <Calendar />
  </Provider>
);

export default App;
