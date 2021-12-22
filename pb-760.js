/* Building up a Word
You are given an input array of strings, ordered by ascending length.

Write a function that returns true if, for each pair of consecutive strings, the second string can be formed from the first by adding a single letter either at the beginning or end.

Examples
canBuild(["a", "at", "ate", "late", "plate", "plates"]) ➞ true

canBuild(["a", "at", "ate", "late", "plate", "plater", "platter"]) ➞ false
// "platter" is formed by adding "t" in the middle of "plater"

canBuild(["it", "bit", "bite", "biters"]) ➞ false
// "biters" is formed by adding two letters - we can only add one

canBuild(["mean", "meany"]) ➞ true
Notes
Return false if a word is NOT formed by adding only one letter.
Return false if the letter is added to the middle of the previous word.
Letters in tests will all be lower case. */

function canBuild(arr) {
  let result = null;
  for (let i = 0; i < arr.length - 1; i++) {
    let firstVal = arr[i + 1][0];
    let lastVal = arr[i + 1][arr[i + 1].length - 1];
    if (firstVal + arr[i] == arr[i + 1] || arr[i] + lastVal == arr[i + 1]) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

console.log(canBuild(["a", "at", "ate", "late", "plate", "plates"]));
