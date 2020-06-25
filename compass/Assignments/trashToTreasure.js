const smartGarbage = function (trash, bins) {
  let recycling = new Object(bins)

  //or
  // let recycling = {
  //   waste: bins.waste,
  //   recycling: bins.recycling,
  //   compost: bins.compost,
  // }
  if (trash === "waste") {
    recycling.waste += 1
  } else if (trash === "recycling") {
    recycling.recycling += 1
  } else if (trash === "compost") {
    recycling.compost += 1
  }
  return recycling
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });