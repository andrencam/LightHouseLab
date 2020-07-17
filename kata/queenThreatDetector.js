/**
 * Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
 */
let whiteQueen = [1, 3];
let blackQueen = [1, 5];

const generateBoard = (whiteQueen, blackQueen) => {
  let board = [];
  for (let line = 0; line < 8; line++) {
    board.push([]);
    for (let column = 0; column < 8; column++) {
      board[line].push(0);
    }

  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}





let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
// console.log(queenThreat(whiteQueen, blackQueen));

/**
 * [
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true
 */