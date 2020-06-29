/**
 * Create a function named camelCase that will convert a string to camel case, and return the result.
 * Expect Output
 * thisIsAString
   loopyLighthouse
   supercalifragalisticexpialidocious  
 */

const camelCase = function (input) {
  return input.split(" ").map((s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
}


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));