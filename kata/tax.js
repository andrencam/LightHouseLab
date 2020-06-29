/**
 * output: Andre: 2017 = 12345, 2018 = xxxxx, 2019 = xxxx
 * output: Ligia: 2017 = 12345, 2018 = xxxxx, 2019 = xxxx
 * 
 */
const taxResult = () => {
  persons.forEach((element) => {
    element.income.forEach(element => {
      let year2017 = element[2017] * 2
      console.log(year2017)
    })
  })
}

let persons = [
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
    2017: 0.4071
  },
  {
    2018: 0.3566
  },
  {
    2019: 0.3371
  }
]

console.log(taxResult())