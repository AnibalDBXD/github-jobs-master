("use strict");

import FetchAPI from "../api/FetchAPI.js";
import config from "../api/config.js";

import CheckboxManager from "./CheckboxManager.js";
import Job from "./Job.js";
import InputManager from "./InputManager.js";

export default class JobsContainer {
  constructor() {
    this.jobs_container = document.getElementById("jobs-container");
    this.InputManager = new InputManager(this.render.bind(this));
    this.CheckboxManager = new CheckboxManager(
      this.render.bind(
        this
      ) /* bind() is to anchor the context of this object to the CheckboxManager */
    );
    this.FetchAPI = new FetchAPI(config.URL + "description=&location=");
  }

  render() {
    const ActiveCheckBoxes = this.CheckboxManager.CheckBoxesToString(
      this.CheckboxManager.getActiveCheckBoxes()
    );
    const Search_query = this.InputManager.getQuery();

    this.FetchAPI.changeURL(
      config.URL + `search=${Search_query}&location=${ActiveCheckBoxes}`
    );
    this.postJob();
  }

  createJob(data) {
    return new Job(data);
  }

  postJob() {
    this.jobs_container.innerHTML = "<h1>Loading...</h1>";
    this.FetchAPI.getData().then((result) => {
      this.jobs_container.innerHTML = "";
      result.forEach(
        (job) =>
          (this.jobs_container.innerHTML += this.createJob(job).createBadge())
      );
    });
  }
}
