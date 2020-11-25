export class API {
  constructor(url) {
    this.url = url;
    this.data;
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
