/* Check for Anagrams
Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

Examples
isAnagram("cristian", "Cristina") ➞ true

isAnagram("Dave Barry", "Ray Adverb") ➞ true

isAnagram("Nope", "Note") ➞ false
Notes
Should be case insensitive.
The two given strings can be of different lengths. */

function isAnagram(s1, s2) {
  let str1 = s1.toLowerCase().split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  let str2 = s2.toLowerCase().split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  return str1.join("") == str2.join("")

}

console.log(isAnagram("cristian", "Cristina"))