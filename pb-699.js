/* Christmas Tree

Write a function to create a Christmas tree based on height h.
Examples

tree(1) ➞ [
  "#"
]

tree(2) ➞ [
  " # ",
  "###"
]

tree(5) ➞ [
  "    #    ",
  "   ###   ",
  "  #####  ",
  " ####### ",
  "#########"
]

tree(0) ➞ []

Notes

N/A */

function tree(h) {
  let l = 1
  let m = 1
  let result = []
  for (let i = h; i > 0; i--) {
    if (i == h) {
      result[i - 1] = "#".repeat((h * 2) - m)
    } else {

      result[i - 1] = ' '.repeat(l) + '#'.repeat((h * 2) - m) + " ".repeat(l)
      l++
    }

    m += 2
  }
  return result
}


console.log(tree(5))