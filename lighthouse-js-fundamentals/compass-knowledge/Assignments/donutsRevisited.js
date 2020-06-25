var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach((element) => {
  console.log(element.type + " donuts cost $" + element.cost.toLocaleString("en-US") + " forEach");
})

donuts.map((element) => {
  console.log(element.type + " donuts cost $" + element.cost.toLocaleString("en-US") + " map");
})

donuts.filter((element) => {
  console.log(element.type + " donuts cost $" + element.cost.toLocaleString("en-US") + " filter");
})
