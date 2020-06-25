function range(start, end, step) {
  let array = [];
  if (start === undefined || end === undefined || step === undefined) {
    return []
  } else if (start > end) {
    return []
  } else if (step === 0 || step < 0) {
    return []
  } else {
    for (let i = start; i <= end; i = i + step) {
      array.push(i)
    }
  } return array
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(2, 3));