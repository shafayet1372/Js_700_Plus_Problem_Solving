/* Find the Second Occurrence of "zip" in a String
Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. 
Your code should be general enough to pass every possible case where "zip" can occur in a string.

Examples
findZip("all zip files are zipped") ➞ 18

findZip("all zip files are compressed") ➞ -1
Notes
Uppercase "Zip" is not the same as lowercase "zip".
 */
function findZip(str) {
  let search = 'zip'
  let s = str.split("")
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'z') {
      if (s.slice(i, i + search.length).join("").includes(search)) {
        counter++
      }
      if (counter == 2) {
        return i
      }
    }
  }
  return -1
}

console.log(findZip("all zip files are zipped"))