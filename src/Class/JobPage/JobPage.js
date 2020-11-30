import config from "../../api/config.js";
import FetchAPI from "../../api/FetchAPI.js";
import Job from "../Job.js";

window.onload = () => {
  const jobID = window.location.search.substr(4);
  const FetchData = new FetchAPI(config.OneJobURL + "/" + jobID + ".json?");
  const job_info = document.getElementById("job-info");

  job_info.innerHTML = "<h1>Loading....</h1>";
  FetchData.getData().then((data) => {
    const JobPage = new Job(data);
    job_info.innerHTML = JobPage.createPage();
  });
};
