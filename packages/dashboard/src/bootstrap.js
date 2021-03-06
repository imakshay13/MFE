import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

//This file is added because if we directly add our code in index.js
// Then when running independly and our project needs some files. It will not wait.
// So importing bootstap in index will give browser some time and tell browser to load
// these imports before loading bootstrap

//Steps: mount function to startup the app.

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

//Creating memory history

//2 case: one run in development(alone) and other from container

//If we are running standalone or development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//If we running from a container

export { mount };
