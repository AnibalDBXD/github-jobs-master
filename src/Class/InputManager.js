"use strict";
export default class InputManager {
  constructor(renderFunction) {
    this.render = renderFunction;

    this.search_input = document.getElementById("search_input");
    this.search_button = document.getElementById("search_button");

    this.location_input = document.getElementById("location_input");

    this.search_button.addEventListener("click", (e) => {
      e.preventDefault();
      this.render();
    });
    this.search_input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.render();
      }
    });
  }

  getQuery() {
    return this.search_input.value;
  }
}
