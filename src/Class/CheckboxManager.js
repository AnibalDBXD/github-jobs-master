("use strict");
export default class CheckboxManager {
  constructor(renderFunction) {
    this.ActiveCheckBoxes = [];

    this.render = renderFunction;

    this.CheckBoxes = document.querySelectorAll("input[type=checkbox]");
    this.CheckBoxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (e) =>
        e.target.checked
          ? this.addCheckbox(checkbox.id)
          : this.deleteCheckbox(checkbox.id)
      );
    });
  }

  CheckBoxesToString(CheckboxesArray) {
    let CheckBoxArrayString = "";
    CheckboxesArray.forEach((value) => (CheckBoxArrayString += `${value}+`));

    //Remove the last character
    CheckBoxArrayString = CheckBoxArrayString.substring(
      0,
      CheckBoxArrayString.length - 1
    );
    return CheckBoxArrayString;
  }

  getActiveCheckBoxes() {
    return this.ActiveCheckBoxes;
  }

  addCheckbox(CheckboxId) {
    this.ActiveCheckBoxes.push(CheckboxId);
    this.render();
  }

  deleteCheckbox(CheckboxId) {
    const index = this.ActiveCheckBoxes.indexOf(CheckboxId);
    this.ActiveCheckBoxes.splice(index, 1);
    this.render();
  }
}
