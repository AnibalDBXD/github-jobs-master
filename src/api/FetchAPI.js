("use strict");
export default class FetchAPI {
  constructor(url) {
    this.url = url;
    this.data;
  }

  changeURL(newUrl) {
    this.url = newUrl;
    return this.url;
  }

  async fetchData() {
    let response = await fetch(this.url);
    if (response.status !== 200) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    } else {
      return response.json();
    }
  }

  async getData() {
    this.data = await this.fetchData();
    return this.data;
  }
}
