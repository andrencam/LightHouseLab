/* QUIZ REQUIREMENTS
* 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
* 2. Your code should include an `if...else` conditional statement
* 3. Your code should produce the expected output
* 4. Your code should not be empty
* 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. */

var balance = -10
var checkBalance = true
var isActive = true

if (checkBalance === true) {
  if (isActive === true && balance > 0) {
    console.log('Your balance is $' + balance.toFixed(2) + ".")
  } else if (isActive == true && balance == 0) {
    console.log("Your account is empty")
  } else if (isActive == true && balance < 0) {
    console.log("You balance is negative. Please contact bank")
  } else if (isActive !== true) {
    console.log("Your account is no longer active")
  }
} else {
  console.log("Thank you. Have a nice day!")
}