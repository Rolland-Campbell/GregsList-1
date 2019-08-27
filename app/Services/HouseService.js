import House from "../Models/House.js";

// @ts-ignore
let _houseApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/houses'
})

let _state = {
  houses: []
}

let _subscribers = {
  houses: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class HouseService {

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Houses() {
    return _state.houses.map(houses => new House(houses))
  }

  getApiHouse() {
    _houseApi.get()
      .then(res => {
        let houseData = res.data.data.map(house => new House(house))
        _setState('houses', houseData)
        console.log(res) //shows what the spi returns so you can see what it needs. 
      })
      .catch(err => {
        console.error(err)
      })
  }

  addHouse(data) {
    _houseApi.post('', data)
      .then(res => {
        _state.houses.push(res.data.data)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })
  }

  deleteHouse(id) {
    _houseApi.delete(id)
      .then(res => {
        let index = _state.houses.findIndex(house => house._id == id)
        _state.houses.splice(index, 1)
        _setState('houses', _state.houses)
      })
      .catch(err => {
        console.error(err)
      })
  }

  bid(id) {
    let house = _state.houses.find(house => house._id == id)
    house.price++
    _houseApi.put(id, { price: house.price })
      .then(res => {
        _setState('houses', _state.houses)
      })
  }
}