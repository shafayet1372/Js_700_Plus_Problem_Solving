/* Merge Two Arrays
Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.

The arrays may be of different lengths, with at least one character / digit.
The first array will contain string characters (lowercase, a-z).
The second array will contain integers (all positive).
Examples
mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8])
➞ ["f", 5, "d", 3, "w", 7, "t", 8]

mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"])
➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]

mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])
➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
Notes
N/A */


function mergeArrays(a, b) {
  let i = 0, mergedAr = []
  while (i < 1) {
    let l = 0, index
    while (l < a.length) {
      mergedAr.push(a[l])
      if (b[l]) {
        mergedAr.push(b[l])
      }
      l++
      index = l
    }
    if (index < b.length) {
      while (index < b.length) {
        mergedAr.push(b[index])
        index++
      }
    }
    i++
  }
  return mergedAr
}
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]))