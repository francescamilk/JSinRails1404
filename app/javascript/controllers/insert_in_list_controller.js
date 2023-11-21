import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = [ "form", "items" ]
  
  connect() {
    // console.log(this.formTarget)
    // console.log(this.itemsTarget)
  }
  
  add(event) {
    // 1. prevent default behaviour (stop form)
    event.preventDefault()
    
    // 2. retrieve data from form
    // 3. send POST request to Rails Controller
    fetch(this.formTarget.action, {
      method: "POST", // Could be dynamic with Stimulus values
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
    .then(response => response.json())
    .then((data) => {
      // console.log(data)
      this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
      this.formTarget.reset()
    })
  }
}
