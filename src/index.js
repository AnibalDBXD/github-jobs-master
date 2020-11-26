("use strict");

import JobsContainer from "./Class/JobsContainer.js";

window.onload = () => {
  const App = new JobsContainer();
  App.postJob();
};
