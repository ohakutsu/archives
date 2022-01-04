import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "../components/MyComponent";

const initialData: any = JSON.parse(
  document.getElementById("initial-data")!.textContent!
);

ReactDOM.hydrate(
  <MyComponent {...initialData} />,
  document.getElementById("app")
);
