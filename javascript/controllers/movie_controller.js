import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'input', 'list' ]

  connect() {
    console.log('Hello from movie_controller.js')
    console.log(this.inputTarget)
  }

  displayMovie(movies) {
    this.listTarget.innerHTML = ""
    movies.forEach((movie) => {
      const movieCard = `
        <li class="list-group-item">
          <img src="${movie.Poster}" alt="${movie.Title}" />
          <p>${movie.Title}</p>
        </li>
      `
      this.listTarget.insertAdjacentHTML("beforeend", movieCard)
    })
  }

  search(event) {
    event.preventDefault()
    console.log("clicked")
    fetch(`http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data)
        this.displayMovie(data.Search)
      })
  }
}