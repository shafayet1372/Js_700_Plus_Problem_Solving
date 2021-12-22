/* Sort Words by a String
Create a function that sorts words by a given string.

Examples
sortByString(["apple", "banana", "cherry", "date"], "dbca")
➞ ["date", "banana", "cherry", "apple"]

sortByString(["small", "big", "medium"], "sazymtb")
➞ ["small", "medium", "big"]

sortByString(["poof", "floof", "loop"], "flatp")
➞ ["floof", "loop", "poof"]
Notes
The string may have excess letters (see examples #1 and #2).
There will be unique starting letters in each array.
 */

function sortByString(arr, str) {
  return arr.sort(
    (a, b) => str.indexOf(a.charAt(0)) - str.indexOf(b.charAt(0))
  );
}

console.log(sortByString(["poof", "floof", "loop"], "flatp"));
