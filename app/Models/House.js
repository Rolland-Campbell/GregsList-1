


export default class House {
  constructor(data) {
    this._id = data._id
    this.year = data.year
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
                <div class="card-body">
                    <h5 class="card-title">year: ${this.year}  bedrooms: ${this.bedrooms}  bathrooms: ${this.bathrooms}</h5>
                    <p class="card-text">Description: ${this.description}</p>
                    <p><sm>$${this.price}</sm></p>
                    <button class="btn btn-info" onclick="app.controllers.houseController.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.houseController.delete('${this._id}')">Delete House</button>
                </div >
            </div >
        </div >
            `
  }
}