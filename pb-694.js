/* String Like Square

Create a function that takes a number and returns a string like square.
Examples

createSquare(-1) ➞ ""

createSquare(0) ➞ ""

createSquare(1) ➞ "#"

createSquare(2) ➞ "##\n##"

createSquare(3) ➞ "###\n# #\n###"

createSquare(4) ➞ "####\n#  #\n#  #\n####"

"####
#  #
#  #
####"

Notes

Square width <= 16383
 */
function createSquare(length) {
  if (length <= 0) {
    return ''
  }
  if (length == 1) {
    return '#'
  }
  let str = ""
  for (let i = 1; i <= length; i++) {
    if (i == 1 || i == length) {
      let newLine = i == 1 ? "\n" : ""
      str += '#'.repeat(length) + newLine
    } else {
      str += '#' + ' '.repeat(length - 2) + '#' + "\n"
    }
  }
  return str
}

console.log(createSquare(4))