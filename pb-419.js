/* Find Unique Character Strings
Create a function that returns only strings with unique characters.

Examples
filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []

filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
Notes
N/A
 */



function filterUnique(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let visited = []
    let val = arr[i].split("")
    for (let j = 0; j < val.length; j++) {
      if (visited.indexOf(val[j]) == -1) {
        visited.push(val[j])
      }
    }
    if (val.length == visited.length) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]))