function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));

function test() {
  if (1) {
    console.log("1")
    return 1;
  } else {
    console.log("2")
    return 2;
  }
}
test(2)