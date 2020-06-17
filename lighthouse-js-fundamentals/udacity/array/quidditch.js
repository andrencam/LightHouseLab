var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(team.length)

function hasEnoughPlayers(numb) {
  if (numb.length >= 7) {
    return true
  }
  return false
}
console.log(hasEnoughPlayers(team));
