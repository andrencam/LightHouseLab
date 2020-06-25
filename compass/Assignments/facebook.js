/* QUIZ REQUIREMENTS
* - Your code should have an object `facebookProfile`
* - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
* - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
* - Carefully implement the desired functionality of each method, as decribed above
postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/
// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

let facebookProfile = {
  name: "Andre",
  friends: 2500,
  messages: ["Don't know", "Awesome", "loving this", "lastone"],
  postMessage: function (message) {
    facebookProfile.messages.push(message)
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1)
  },
  addFriend: function () {
    facebookProfile.friends += 1
  },
  removeFriend: function () {
    facebookProfile.friends -= 1
  }
}
console.log(facebookProfile.messages)
console.log(facebookProfile.deleteMessage(2))
console.log(facebookProfile.messages)

console.log(facebookProfile.friends)
console.log(facebookProfile.addFriend(3))
console.log(facebookProfile.friends)

console.log(facebookProfile.messages)
console.log(facebookProfile.postMessage("new message"))
console.log(facebookProfile.messages)
