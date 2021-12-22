/* Combine Arrays
Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".

Examples
combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], 
["Jill", "Silvia", "Riri"]]
Notes
N/A
 */




function combineArrays(arr1, arr2, arr3) {
  let ar = [arr1, arr2, arr3]
  let result = []
  let i = 0, m = 0
  while (i < 3) {
    let l = 0, g = []
    while (l < 3) {

      if (ar[l][m] == undefined) {
        g.push("*")
      } else {
        g.push(ar[l][m])
      }
      l++
    }

    result.push(g)
    m++
    i++
  }
  return result
}

console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]))