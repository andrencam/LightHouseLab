/**Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.
 * Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
 */
const urlEncode = function (text) {
  let space = ' '
  let replace = '%20'
  for (let i = 0; i < text.length; ++i) {
    if (text.substring(i, i + space.length) == space) {
      text = text.substring(0, i) + replace + text.substring(i + space.length, text.length)
    }
  }
  return text
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
