/*our rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.*/

// var room = "dining room";
// var suspect = "Mr. Parkes";
// var weapon = "";
// var solved = false;

// if (room === "ballroom" && suspect === "Mr. Kalehoff") {
//   weapon = "poison"
//   solved = true
// } else if (room === "gallery" && suspect === "Ms. Van Cleve") {
//   weapon = "trophy"
//   solved = true
// } else if (room === "billiards room" && suspect === "Mrs. Sparr") {
//   weapon = "pool stick"
//   solved = true
// } else if (room === "dining room" && suspect === "Mr. Parkes") {
//   weapon = "knife"
//   solved = true
// }
// if (solved) {
//   console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
// }

function verifyMurder(room, suspect) {
  let weapon = ''
  let solved = false

  if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison"
    solved = true
  } else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy"
    solved = true
  } else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick"
    solved = true
  } else if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife"
    solved = true
  }
  if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!")
  }
}
verifyMurder("gallery", 'Ms. Van Cleve')