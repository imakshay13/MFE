import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

//This file is added because if we directly add our code in index.js
// Then when running independly and our project needs some files. It will not wait.
// So importing bootstap in index will give browser some time and tell browser to load
// these imports before loading bootstrap

//Steps: mount function to startup the app.

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname != nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//Creating memory history

//2 case: one run in development(alone) and other from container

//If we are running standalone or development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

//If we running from a container

export { mount };
