const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return `${name} is ${age} years old.`
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Suzie", 1984, 2016));


//Another option for current year
// const ageCalculator = function (name, yearOfBirth) {
//   let year = new Date();
//   let currentYear = year.getFullYear();
//   let age = currentYear - yearOfBirth
//   return `${name} is ${age} years old.`
// }

// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));
// console.log(ageCalculator("Suzie", 1984, 2016));