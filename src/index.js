import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import $ from "jquery";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import taskReducer from "./reducers/taskReducer";

import { Provider } from "react-redux";

let store = createStore(taskReducer, [
  {
    id: 1,
    title: "task 1",
    owner: "Jim",
    status: "Not Done"
  },
  {
    id: 2,
    title: "task 2",
    owner: "Mike",
    status: "Done"
  },
  {
    id: 3,
    title: "task 3",
    owner: "Joe",
    status: "Not Done"
  },
  {
    id: 4,
    title: "task 1",
    owner: "Jim",
    status: "Not Done"
  },
  {
    id: 5,
    title: "task 2",
    owner: "Mike",
    status: "Done"
  },
  {
    id: 6,
    title: "task 3",
    owner: "Joe",
    status: "Not Done"
  }
]);

window.jQuery = $;
require("bootstrap/dist/js/bootstrap.min.js");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
