const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = ingredients.length - 1
while (i >= 0) {
  console.log('With while loop', ingredients[i])
  i--
}

// Write a for loop that prints out the contents of ingredients:
for (ingredient of ingredients) {
  console.log('With for of', ingredients)
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log('With for loop, backwards array', ingredients[i])
}