const unSquareCode = function (message) {
  let cols = message.split(' ').length
  let text = ''

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < message.length; j++) {
      text += message[j];
    }
    text += ' ';
  }
  return text
};





console.log(unSquareCode('clu hlt io'))
console.log(unSquareCode('fto ehg ee dd'))
console.log(unSquareCode('hae and via ecy'))
console.log(unSquareCode('imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau'))