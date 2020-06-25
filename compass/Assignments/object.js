// var umbrella = {
//   color: "pink",
//   isOpen: true,
//   open: function () {
//     if (umbrella.isOpen === true) {
//       return "The umbrella is already opened!";
//     } else {
//       umbrella.isOpen = true;
//       return "Julia opens the umbrella!";
//     }
//   },
//   // your code goes here
// }

// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   },
//   printAccountSummary()
// }




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

const judgeVegetable = function (vegetables, metric) {
  for (let veget of vegetables) {
    console.log(veget.met)

  }
}

const metric = 'redness'

judgeVegetable(vegetables, metric)