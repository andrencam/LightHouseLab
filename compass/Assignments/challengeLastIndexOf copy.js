function lastIndexOf(array, numb) {
  let index = []
  if (array === undefined || array.length == 0) {
    return -1
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] == numb) {
        index.push(i)
        break
      } else if (i === 0) {
        return -1
      }
    } return Number(index)
  }
}

console.log(lastIndexOf([7, 1, 4, 1, 2], 7), "=?", 0);
console.log(lastIndexOf([0, 8, 4, 1, 2], 8), "=?", 1);
console.log(lastIndexOf([0, 1, 4, 1, 2], 4), "=?", 2);
console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([9, 1, 4, 1, 2], 0), "=?", -1);
console.log(lastIndexOf([9, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([8, 1, 4, 1, 2], 9), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);



