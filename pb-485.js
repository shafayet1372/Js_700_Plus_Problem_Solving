/* Stalactites or Stalagmites?
Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.

Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". 
Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.

Examples
mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]) ➞ "stalactites"

mineralFormation([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "stalagmites"

mineralFormation([
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "both"
Notes
There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
There won't be any example of neither stalactites nor stalagmites.
In other words, if the first array has 1s, return "stalactites". If the last array has 1s, return "stalagmites". If both have them, return "both". */


function mineralFormation(cave) {
  let result = []
  for (let i = 0; i < cave.length; i++) {
    if (i == 0 || i == cave.length - 1) {
      if (cave[i].indexOf(1) >= 0) {
        result.push(i)
      }
    }
  }
  if (result.length == 1 && result[0] == 0) {
    return "stalactites"
  } else if (result.length == 1 && result[0] == cave.length - 1) {
    return "stalagmites"
  }
  return 'both'
}

console.log(mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]))