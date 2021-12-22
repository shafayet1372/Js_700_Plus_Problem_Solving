/* 
Unique Character Mapping
Write a function that returns a character mapping from a word.

Examples
characterMapping("abcd") ➞ [0, 1, 2, 3]

characterMapping("abb") ➞ [0, 1, 1]

characterMapping("babbcb") ➞ [0, 1, 0, 0, 2, 0]

characterMapping("hmmmmm") ➞ [0, 1, 1, 1, 1, 1]
Notes
Start your counter at 0, and increment by 1 each time you encounter a new character.
Identical characters should share the same number.
 */


function characterMapping(str) {
  let visited = [], result = []
  str = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (visited.indexOf(str[i]) == -1) {
      visited.push(str[i])

      result.push(visited.indexOf(str[i]))
    } else {
      result.push(visited.indexOf(str[i]))
    }
  }
  return result
}

console.log(characterMapping("abcd"))