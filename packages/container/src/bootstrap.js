import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//This file is added because if we directly add our code in index.js
// Then when running independly and our project needs some files. It will not wait.
// So importing bootstap in index will give browser some time and tell browser to load
// these imports before loading bootstrap

//Steps: mount function to startup the app.

ReactDOM.render(<App />, document.querySelector("#root"));
