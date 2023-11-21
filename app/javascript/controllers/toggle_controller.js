import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "togglable" ]

  connect() {
    // 1. add the data-controller
    // console.log("Hello from toggle controller!")
  }
  
  show(event) {    
    // 2. add the data-target (s)
    // 3. add the data-action
    event.preventDefault()
    this.togglableTarget.classList.remove("d-none")
  }
}
