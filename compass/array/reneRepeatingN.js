function repeatNumbers(array) {

  let fullString = ""

  //looping cada array, EX: [10, 4] > [34, 6] > [92, 2]]
  array.forEach((item, index) => {
    let partString = ""
    console.log(item)
    //looping o array n(item[1]) times,
    //n no caso seria o segundo argumento do array, por exmaplo 4, 6 e 2
    // EX: 10 4 vezes, 36 6 vezes, 92 2 vezes
    for (let i = 0; i < item[1]; i++) {
      console.log(item[0])
    }
  })

  return 0
}

console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));