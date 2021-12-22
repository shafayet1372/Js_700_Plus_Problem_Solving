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
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let uniVal = []
    let val = arr[i].split("")
    for (let j = 0; j < val.length; j++) {
      if (uniVal.indexOf(val[j]) == -1) {
        uniVal.push(val[j])
      }
    }
    /* another way
     let uniVal=[...new Set(arr[i].split(""))] */
    if (uniVal.length == 1) {
      result.push(arr[i])
    }
  }
  return result
}


console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]))