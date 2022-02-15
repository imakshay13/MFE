import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//This file is added because if we directly add our code in index.js
// Then when running independly and our project needs some files. It will not wait.
// So importing bootstap in index will give browser some time and tell browser to load
// these imports before loading bootstrap

//Steps: mount function to startup the app.

const mount = (el) => {
  ReactDOM.render(<App />, el);
};
//2 case: one run in development(alone) and other from container

//If we are running standalone or development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//If we running from a container

export { mount };
