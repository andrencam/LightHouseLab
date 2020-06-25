const judgeVegetable = function (vegetables, metric) {
  let getValues = vegetables.map(values => values[metric])
  let getMaxValue = Math.max(...getValues)
  for (let n of vegetables) {
    if (n[metric] === getMaxValue) {
      console.log(n.submitter)

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
    redness: 1,
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