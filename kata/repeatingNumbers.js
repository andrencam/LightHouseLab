/**
 * Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.
 * Expected Output
    1111111111
    11, 222
    10101010, 343434343434, 9292
 */

const repeatNumbers = function (data) {
  let fullString = '';

  data.forEach((element, i) => {

    let partialString = ''
    for (let i = 0; i < element[1]; i++) {
      partialString += element[0]
    }
    fullString += partialString + ', '
  })
  return fullString.substring(0, fullString.length - 2)
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

