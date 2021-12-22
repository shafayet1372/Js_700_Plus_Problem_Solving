/* Count the Towers
Create a function that counts the number of towers.

Examples
count_towers([
  ["     ##         "],
  ["##   ##        ##"],
  ["##   ##   ##   ##"],
  ["##   ##   ##   ##"]
]) ➞ 4

count_towers([
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
]) ➞ 6

count_towers([
  ["##"],
  ["##"]
]) ➞ 1
Notes
You are given a 2D matrix.
Towers are two characters in length.
Towers are made only of the character #.
Some tests have no towers, return 0. */




function countTowers(towers) {
  let counter = 0, visited = []

  for (let i = 0; i < towers.length; i++) {

    let str = towers[i].join("").split("")
    for (let j = 0; j < str.length; j++) {
      if (str[j] == '#' && visited.indexOf(j) == -1) {
        counter++
        visited.push(j, j + 1)

      }
    }

  }
  return counter
}

console.log(countTowers([
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
]))