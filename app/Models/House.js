


export default class House {
  constructor(data) {
    this._id = data._id
    this.year = data.year
    this.squareFootage = data.squareFootage
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.description = data.description
  }

  get Template() {
    return `
        <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title">year: ${this.year}<br>  bedrooms: ${this.bedrooms}<br>  bathrooms: ${this.bathrooms}<br> Square Footage: ${this.squareFootage}</h5>
                    <p class="card-text">Description: ${this.description}</p>
                    <p><sm>$${this.price}</sm></p>
                    <button class="btn btn-info mt-2" onclick="app.controllers.houseController.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger mt-2" onclick="app.controllers.houseController.delete('${this._id}')">Delete House</button>
                </div >
            </div >
        </div >
            `
  }
}