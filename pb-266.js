/* Minimum Removals to Make Two Strings Anagrams
Create a function that returns the smallest number of letter removals so that two strings are anagrams of each other.

Examples
minRemovals("abcde", "cab") ➞ 2
// Remove "d", "e" to make "abc" and "cab".

minRemovals("deafk", "kfeap") ➞ 2
// Remove "d" and "p" from the first and second word, respectively.

minRemovals("acb", "ghi") ➞ 6
// Remove all letters from both words to get "" and "".
Notes
An anagram is any string that can be formed by shuffling the characters of the original string. For example: baedc is an anagram of abcde.
An empty string can be considered an anagram of itself.
Characters won't be used more than once per string. */







function minRemovals(str1, str2) {
  let s1 = str1.split("")
  let s2 = str2.split("")
  let cmpstr = [...s1, ...s2]
  let counter1 = 0

  for (let i = 0; i < cmpstr.length; i++) {
    let found1 = false, found2 = false
    for (let l = 0; l < s1.length; l++) {
      if (cmpstr[i] == s1[l]) {
        found1 = true
        break;
      }
    }
    for (let m = 0; m < s2.length; m++) {
      if (cmpstr[i] == s2[m]) {
        found2 = true
        break;
      }
    }
    if (!(found1 && found2)) {
      counter1++
    }
  }
  return counter1
}
console.log(minRemovals("abcde", "cab"))