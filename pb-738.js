/* Swapping Two by Two
Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.

Examples
swapTwo("ABCDEFGH") ➞ "CDABGHEF"

swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"

swapTwo("munchkins") ➞ "ncmuinhks"

swapTwo("FFGGHHI") ➞ "GGFFHHI"
Notes
Keep leftover strings in the same order. */

function swapTwo(s) {
  let str = ''

  for (let i = 0; i < s.length; i += 4) {
    let val1 = s.slice(i, i + 2)
    let val2 = s.slice(i + 2, (i + 2) + 2)

    if (val1.length == 2 && val2.length == 2) {
      str = str + val2 + val1
    } else {
      str += val1 + val2
    }
  }
  return str
}

console.log(swapTwo("FFGGHHI"))