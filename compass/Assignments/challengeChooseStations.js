/*
In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  let goodStations = []
  for (stations of stations) {
    if (stations[1] >= 20) {
      if (stations[2] === 'school' || stations[2] === 'community centre') {
        goodStations.push(stations[0])
      }
    }
  } return goodStations
} console.log(chooseStations(stations))


// function chooseStations(stations) {
//   let goodStations = []
//   for (let i = 0; i < stations.length; i++) {
//     for (let j = 0; j < stations[i].length; j++) {
//       if (stations[i][j] > 20) {
//         // console.log(stations[i][j])
//         goodStations.push(stations[i])
//       }
//     }
//   }
//   return goodStations.map((e) => {
//     e = e[0]
//     return e
//   })
// }
// console.log(chooseStations(stations))