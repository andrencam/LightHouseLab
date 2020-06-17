/*The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0].*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north', 'south', 'south', 'east']

const finalPosition = function (moves) {
  let newMoves = [0, 0]
  for (moves of moves) {
    if (moves === 'north') {
      newMoves[1] += 1
    } else if (moves === 'south') {
      newMoves[1] -= 1
    } else if (moves === 'west') {
      newMoves[0] -= 1
    } else if (moves === 'east') {
      newMoves[0] += 1
    }
  } return newMoves
}

console.log(finalPosition(moves))
// [-1, 4]