("use strict");

import CheckboxManager from "./CheckboxManager.js";
import Job from "./Job.js";

import FetchAPI from "../api/FetchAPI.js";
import config from "../api/config.js";

export default class JobsContainer {
  constructor() {
    this.Input = "";
    this.jobs_container = document.getElementById("jobs-container");
    this.CheckboxManager = new CheckboxManager(
      this.render.bind(
        this
      ) /* bind() is to anchor the context of this object to the CheckboxManager */
    );
    this.FetchAPI = new FetchAPI(config.URL + "description=&location=");
  }

  render() {
    this.FetchAPI.changeURL(
      config.URL +
        `description=&location=${this.CheckboxManager.CheckBoxesToString(
          this.CheckboxManager.getActiveCheckBoxes()
        )}`
    );
    this.postJob();
  }

  createJob(data) {
    return new Job(data);
  }

  postJob() {
    this.jobs_container.innerHTML = "";
    this.FetchAPI.getData().then((result) =>
      result.forEach(
        (job) =>
          (this.jobs_container.innerHTML += this.createJob(job).createBadge())
      )
    );
  }
}
