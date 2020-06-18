const pipizzaToppings = 'tomato sauce,cheese,pepperoni'
const pizzaToppings = pipizzaToppings.split(',')
console.log(pizzaToppings)

function newPizza(string) {
  let array = string.split(',')
  return array
}
console.log(newPizza('tomato sauce,cheese,pepperoni'))

let newP = (s) => {
  let array = s.split(',')
  console.log(array)
}
newP('andre, ligia, hikari, lar de luz, lhl')


let newF = (s) => { console.log(s.split(',')) }
newF('andre, ligia, hikari, lar de luz, lhl')

