("use strict");
class CheckboxManager {
  constructor() {
    this.ActiveCheckBoxes = [];

    this.CheckBoxes = document.querySelectorAll("input[type=checkbox]");
    this.CheckBoxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) =>
        e.target.checked
          ? this.addCheckbox(checkbox.id)
          : this.deleteCheckbox(checkbox.id)
      );
    });
  }

  getActiveCheckBoxes() {
    return this.ActiveCheckBoxes;
  }

  addCheckbox(CheckboxId) {
    this.ActiveCheckBoxes.push(CheckboxId);
  }

  deleteCheckbox(CheckboxId) {
    const index = this.ActiveCheckBoxes.indexOf(CheckboxId);
    this.ActiveCheckBoxes.splice(index, 1);
  }
}

export default CheckboxManager;
