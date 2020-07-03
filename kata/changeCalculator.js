/**
 * We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will   be represented as whole numbers in cents. Therefore $10 will be represented as 1000.
 * Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.
 * 
 * Expected Output
 * { twoDollar: 1, dime: 1, penny: 3 }
   { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
   { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
 */

const calculateChange = function (total, cash) {
  let partialExchange = cash - total
  let twentyDollar = 0
  let tenDollar = 0
  let fiveDollar = 0
  let twoDollar = 0
  let oneDollar = 0
  let quarter = 0
  let dime = 0
  let nickel = 0
  let penny = 0
  let gradeValue = calculateGradeValue(partialExchange)

  while (partialExchange >= gradeValue) {
    switch (gradeValue) {
      case 2000:
        partialExchange -= 2000
        twentyDollar++
        break
      case 1000:
        partialExchange -= 1000
        tenDollar++
        break
      case 500:
        partialExchange -= 500
        fiveDollar++
        break
      case 200:
        partialExchange -= 200
        twoDollar++
        break
      case 100:
        partialExchange -= 100
        oneDollar++
        break
      case 25:
        partialExchange -= 25
        quarter++
        break
      case 10:
        partialExchange -= 10
        dime++
        break
      case 5:
        partialExchange -= 5
        nickel++
        break
      case 1:
        partialExchange -= 1
        penny++
        break
    }

    gradeValue = calculateGradeValue(partialExchange)

  }
  return elaborateResults(twentyDollar, tenDollar, fiveDollar, twoDollar, oneDollar, quarter, dime, nickel, penny)

}

function calculateGradeValue(partialExchange) {
  if (partialExchange >= 2000) {
    return 2000
  } else if (partialExchange >= 1000) {
    return 1000
  } else if (partialExchange >= 500) {
    return 500
  } else if (partialExchange >= 200) {
    return 200
  } else if (partialExchange >= 100) {
    return 100
  } else if (partialExchange >= 25) {
    return 25
  } else if (partialExchange >= 10) {
    return 10
  } else if (partialExchange >= 5) {
    return 5
  } else if (partialExchange >= 1) {
    return 1
  }
}

function elaborateResults(twentyDollar, tenDollar, fiveDollar, twoDollar, oneDollar, quarter, dime, nickel, penny) {
  let result = {}

  if (twentyDollar > 0) {
    result.twentyDollar = twentyDollar
  }

  if (tenDollar > 0) {
    result.tenDollar = tenDollar
  }

  if (fiveDollar > 0) {
    result.fiveDollar = fiveDollar
  }

  if (twoDollar > 0) {
    result.twoDollar = twoDollar
  }

  if (oneDollar > 0) {
    result.oneDollar = oneDollar
  }

  if (quarter > 0) {
    result.quarter = quarter
  }

  if (dime > 0) {
    result.dime = dime
  }

  if (nickel > 0) {
    result.nickel = nickel
  }

  if (penny > 0) {
    result.penny = penny
  }

  return result
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
