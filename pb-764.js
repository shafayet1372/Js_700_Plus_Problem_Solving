/* Numbers First, Letters Second
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5], [7, "d"],
  ["f", "e", 8]
]) ➞ [
  [1, 2, 3, 4, 5, 6],
  [7, 8, "a"],
  ["b", "c"], ["d", "e", "f"]
]

numThenChar([
  [1, 2, 4.4, "f", "a", "b"],
  [0], [0.5, "d","X",3,"s"],
  ["f", "e", 8],
  ["p","Y","Z"],
  [12,18]
]) ➞ [
  [0, 0.5, 1, 2, 3, 4.4],
  [8],
  [12, 18, "X", "Y", "Z"],
  ["a", "b", "d"],
  ["e", "f", "f"],
  ["p", "s"]
]
Notes
Test cases will contain integer and float numbers and single letters. */



function numThenChar(arr) {
  let len = []
  let flatAr = arr.reduce((acc, val) => {
    len.push(val.length)
    return [...acc, ...val]
  }, [])
  let numsAr = flatAr.filter(val => typeof val == 'number').sort((a, b) => a - b)
  let strAr = flatAr.filter(val => typeof val == 'string').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  let main = [...numsAr, ...strAr]
  let result = []

  let start = 0
  for (let i = 0; i < len.length; i++) {
    let g = main.slice(start, start + len[i])
    result.push(g)
    start = main.indexOf(g[g.length - 1]) + 1
    if (main[start] == main[start - 1]) {
      start = start + 1
    }
  }
  return result
}
console.log(numThenChar([
  [1, 2, 4.4, "f", "a", "b"],
  [0], [0.5, "d", "X", 3, "s"],
  ["f", "e", 8],
  ["p", "Y", "Z"],
  [12, 18]
]))