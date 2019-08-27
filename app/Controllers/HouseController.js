import HouseService from "../Services/HouseService.js";

let _houseService = new HouseService()

function _draw() {
  let house = _houseService.Houses
  let template = ''
  house.forEach(house => template += house.Template)
  document.getElementById('house-cards').innerHTML = template
}

export default class HouseController {
  constructor() {
    _houseService.addSubscriber('houses', _draw)
    _houseService.getApiHouse();
  }

  addHouse(event) { //e is the event from html
    event.preventDefault(); //needed to prevent page reload
    let form = event.target
    let data = {
      year: form.year.value,
      bedrooms: form.bedrooms.value,
      imgUrl: form.imgUrl.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      description: form.description.value,
      levels: form.levels.value
    }
    _houseService.addHouse(data)
    form.reset()

  }

  delete(id) {
    if (window.confirm('Are you sure?')) {
      _houseService.deleteHouse(id)
    }
  }
  bid(id) {
    _houseService.bid(id)
  }
}