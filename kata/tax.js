/**
 * output: Andre: 2017 = 12345, 2018 = xxxxx, 2019 = xxxx
 * output: Ligia: 2017 = 12345, 2018 = xxxxx, 2019 = xxxx
 * 
 */
const verifyTax = function (values, rates) {
  for (let y = 0; y < values.length; y++) {
    console.log(values[y])
  }

}


let values = [
  {
    nome: "Andre",
    income: [
      {
        2017: 18000,
        2018: 22000,
        2019: 32000
      }
    ]
  },
  {
    nome: "Ligia",
    income: [
      {
        2017: 18000,
        2018: 20000,
        2019: 30000
      }
    ]
  }
]


let rates = [
  {
    year: 2017,
    rate: 0.4071
  },
  {
    year: 2018,
    rate: 0.3566
  },
  {
    year: 2019,
    rate: 0.3371
  }
]

console.log(verifyTax(values, rates))
