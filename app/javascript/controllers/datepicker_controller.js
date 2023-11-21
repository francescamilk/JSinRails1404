import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

// Connects to data-controller="datepicker"
export default class extends Controller {
  connect() {
    // 1. data-controller
    // 2. data-target (s)
    // 3. data-action
    flatpickr(this.element, {});
  }
}
