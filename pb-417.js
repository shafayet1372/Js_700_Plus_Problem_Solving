/* Filter Repeating Character Strings
Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

Examples
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "d", "eeee"]

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]

identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []
Notes
A string with a single character is trivially counted as a string with repeating identical characters.
If there are no strings with repeating identical characters, return an empty array (see example #3). */






function identicalFilter(arr) {
  /* 
  //shortway
  return arr.filter(val=>[...new Set(val.split(""))].length==1) */

  let result = []
  for (let i = 0; i < arr.length; i++) {
    let visited = []
    let val = arr[i].split('')
    for (let j = 0; j < val.length; j++) {
      if (visited.indexOf(val[j]) == -1) {
        visited.push(val[j])
      }
    }
    if (visited.length == 1) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]))