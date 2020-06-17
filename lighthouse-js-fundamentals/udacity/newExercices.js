for (var t = 60; t >= 0; t--) {
  if (t === 50) {
    console.log("Orbiter transfers from ground to internal power")
  } else if (t === 31) {
    console.log("Ground launch sequencer is go for auto sequence start")
  } else if (t === 16) {
    console.log("Activate launch pad sound suppression system")
  } else if (t === 10) {
    console.log("Activate main engine hydrogen burnoff system")
  } else if (t === 6) {
    console.log("Main engine start")
  } else if (t === 0) {
    console.log("Solid rocket booster ignition and liftoff!")
  } else {
    console.log(`T-${t} seconds`)
  }
}

var i = 0;
var n = 0;
for (i = 0; i <= 25; i++) {
  for (n = 0; n <= 99; n++) {
    console.log(i + "-" + n)
  }
}


var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
for (row = 0; row <= 25; row++) {

  // Inner `for` loop, to iterate over the seats within a row
  // In this loop, the value of `row` variable would change only after 100 iterations
  for (seat = 0; seat <= 99; seat++) {
    console.log(row + "-" + seat);
  }
}

"five" !== "five"