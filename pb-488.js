/* Longest Word
Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, 
return the word closest to the start of the sentence. Characters such as apostophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

Examples
longestWord("Hello darkness my old friend") ➞ "darkness"

longestWord("Hello there mate") ➞ "Hello"

longestWord("Kayla's toy is plastic") ➞ "Kayla's"
Notes
N/A
 */






function longestWord(sentence) {
  /*
  shortway
   let s=sentence.split(" ")
    return s.sort((a,b)=>b.length-a.length)[0] */
  let num = -1000
  let s = sentence.split(" ")
  let result
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > num) {
      num = s[i].length
      result = s[i]
    }
  }
  return result
}

console.log(longestWord("Hello darkness my old friend"))