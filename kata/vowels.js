/*In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
*/
const numberOfVowels = function (data) {
  let vowels = 0
  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) === "a" || data.charAt(i) === "e" || data.charAt(i) === "i" || data.charAt(i) === "o" || data.charAt(i) === "u") {
      vowels++
    }
  }
  return vowels
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

