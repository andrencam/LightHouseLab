const food = ['apple', 'pizza', 'pear']
console.log(food[1])


function isPrime(integer) {
  for (let x = 2; x < integer; x++) {
    if (integer % x === 0) {
      console.log(integer + " is divisible by " + x)
      return false
    }
  }
  return true
}

isPrime(15)

function isPrime(integer) {
  for (let x = 2; x < integer; x++) {
    if (integer % x === 0) {
      console.log(integer + " is divisible by " + x)
      break
    }
  }
}

isPrime(15)