const squareCode = function (message) {
  let str = message.split(' ').join('')
  let length = str.length
  let cols = (Math.ceil(Math.sqrt(length)))
  let block = ''

  for (let i = 0; i < cols; i++) {
    for (let j = i; j < str.length; j += cols) {
      block += str[j];
    }
    block += ' ';
  }
  return block
};





console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
