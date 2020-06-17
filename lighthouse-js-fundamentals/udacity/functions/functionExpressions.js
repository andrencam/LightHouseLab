/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */
var laugh = function (num) {
  let syllable = ""
  for (let i = 0; i < num; i++) {
    syllable += "ha"
  }
  return syllable + "!"
}

console.log(laugh(3));