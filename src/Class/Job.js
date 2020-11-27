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
    this.howToApply = data.how_to_apply;
    this.description = data.description;
  }

  cleaningDate(date) {
    let cleanDate = date.split(" ");
    cleanDate = cleanDate[1] + " " + cleanDate[2];
    return cleanDate;
  }

  createBadge() {
    return `
    <a class="text-decoration-none" href="${window.location.href}job.html?id=${this.id}">
      <div class="container job-poster bg-white p-2 mt-4">
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
            <div class="mx-3"><span>${this.created_at}</span></div>
            <div class="mx-3"><span>${this.location}</span></div>
          </div>
        </div>
      </div>
    </a>`;
  }

  createPage() {
    return `
    <div class="col-sm-12 col-lg-4">
      <div class="row my-4">
          <a href="javascript:history.back();" class="text-decoration-none">
              ◀ Back to search
          </a>
      </div>

      <div class="row">
          <span class="text-gray">HOW TO APPLY:</span>
          <p class="my-2" id="how-to-apply">${this.howToApply}</p>
    </div>
  </div>
  <div class="mt-sm-5 mt-lg-0 col-sm-12 col-lg-8">
      <div class="container main-color">
          <div class="row">
              <div class="col-8">
                  <h1>${this.title}</h1>
              </div>
              <div class="col-4 my-auto">
                  <span class="outline-job-time">${this.type}</span>
              </div>
          </div>
          <div class="row text-gray">
              <p>${this.created_at}</p>
          </div>
          <div class="row">
              <div class="col-3 job-img">
                  <img src="${this.company_logo}" alt="">
              </div>
              <div class="col-3">
                  <h5>${this.company}</h5>
                  <p class="text-gray">${this.location}</p>
              </div>
          </div>
          <div class="row my-5">
              ${this.description}
          </div>
      </div>
</div>
      `;
  }
}
