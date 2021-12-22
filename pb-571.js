/* Modify Words

Create a function that takes an array of any length. Modify each element (capitalize, reverse, hyphenate).
Examples

editWords(["new york city"]) ➞ ["YTIC KR-OY WEN"]

editWords(["null", "undefined"]) ➞ ["LL-UN", "DENIF-EDNU"]

editWords(["hello", "", "world"]) ➞ ["OLL-EH", "-", "DLR-OW"]

editWords([""]) ➞ ["-"]

Notes

Input array values can be any type. */

function editWords(arr) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i].toUpperCase().split("").reverse()

    val.splice(Math.ceil(val.length / 2), 0, '-')

    arr[i] = val.join("")
  }
  return arr
}

console.log(editWords(["new york city"]))