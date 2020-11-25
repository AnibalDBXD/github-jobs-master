("use strict");
export default class Job {
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.company = data.company;
    this.location = data.location;
    this.title = data.title;
    this.company_logo =
      data.company_logo ||
      "https://storiavoce.com/wp-content/plugins/lightbox/images/No-image-found.jpg";
    this.created_at = this.cleaningDate(data.created_at);
  }

  cleaningDate(date) {
    let cleanDate = date.split(" ");
    cleanDate = cleanDate[1] + " " + cleanDate[2];
    return cleanDate;
  }

  createBadge() {
    return `<div class="container job-poster bg-white p-2 mt-4">
     <div class="row">
       <div class="col-2 job-img my-auto"><img
            src=${this.company_logo}
            alt=${this.company}></div>
        <div class="col-6 job-body">
          <ul class="font-blue list-unstyled">
            <li class="job-company">${this.company}</li>
            <li>
              <h5>${this.title}</h5>
            </li>
            <li><span class="outline-job-time">${this.type}</span></li>
          </ul>
        </div>
        <div class="job-info col-4 d-flex flex-row-reverse align-items-end">
          <div class="mx-auto"><span>${this.created_at}</span></div>
          <div class="mx-auto"><span>${this.location}</span></div>
        </div>
      </div>
    </div>`;
  }
}
