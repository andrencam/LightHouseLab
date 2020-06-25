const judgeVegetable = function (vegetables, metric) {
  let max = 0
  if (metric === "redness") {
    let getValues = vegetables.map(values => values.redness)
    for (let i = 0; i < getValues.length; i++) {
      if (getValues[i] > max) {
        max = getValues[i]
      }
    }
    for (let n of vegetables) {
      if (n.redness === max) {
        console.log(n.submitter)
      }
    }
  }
  if (metric === "plumpness") {
    let getValues = vegetables.map(values => values.plumpness)
    for (let i = 0; i < getValues.length; i++) {
      if (getValues[i] > max) {
        max = getValues[i]
      }
    } for (let n of vegetables) {
      if (n.plumpness === max) {
        console.log(n.submitter)
      }
    }
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)