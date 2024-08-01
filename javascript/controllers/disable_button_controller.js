import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ["resetBtn", "clickMe"]

  static values = {
    caption: String
  }

  connect() {
    // get executed at page load when data-controller is present
    // console.log("Hello from our first Stimulus controller");
    // console.log(this.resetBtnTarget);
    // console.log(this.element); // target the data-controller HTML element
    // console.log(this.captionValue);
  }

  disable(event) {
    const clickmeButton = event.currentTarget;
    clickmeButton.innerText = "💀";
    clickmeButton.disabled = true;

    this.resetBtnTarget.classList.remove("d-none");
  }

  enable() {
    this.clickMeTarget.innerText = this.captionValue;
    this.clickMeTarget.disabled = false;

    this.resetBtnTarget.classList.add("d-none");
  }
}