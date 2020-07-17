let prompt = require("prompt-sync")();

let answer = undefined
let secrectNum = rand([])

function rand() {
  return Math.ceil(Math.random() * 1000);
}

let history = []

while (answer != secrectNum) {
  answer = prompt('Guess a number: ');
  if (!Number(answer)) {
    console.log('Not a number! Try again!');
  }else if(history.includes(answer)){
    console.log('Already Guessed!');
  }else{
    if ( answer > secrectNum){
      console.log('Too High!');
    }else if (answer < secrectNum){
      console.log('Too Low!');
    }else{
      console.log(`You got it! You took ${history.length+1} attempts!`);
    }
    history.push(answer);
  }
}
