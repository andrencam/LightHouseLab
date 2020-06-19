function loopyLighthouse(range, multiples, words) {
  for (let n = range[0]; n <= range[1]; n++) {
    if (n % multiples[0] === 0 && n % multiples[1] === 0) {
      console.log(words[0] + words[1])
    } else if (n % multiples[0] === 0) {
      console.log(words[0])
    } else if (n % multiples[1] === 0) {
      console.log(words[1])
    } else {
      console.log(n)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);