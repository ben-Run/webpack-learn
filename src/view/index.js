const map = new Map()
map.set('name', 'joel')

class Person {
  name = ''
  age = 0
  address = ''
  constructor () {
  }
  say () {
    console.log(this.name)
  }
  run () {
    console.log(this.address)
  }
}


export {
  Person
}
