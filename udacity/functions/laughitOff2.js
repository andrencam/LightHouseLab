function laugh(num) {
  let message = ""
  for (let n = num; n > 0; n--) {
    message += "ha"
  }
  return message + "!"
}
console.log(laugh(3))
console.log(laugh(5))

//another possible solutions:
var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

console.log(laugh(3));