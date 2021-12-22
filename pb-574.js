/* Vowel Families

Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
Examples

sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

Notes

    Words will contain only lowercase letters, and may contain whitespaces.
    Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, 
and not any other vowels). */

function sameVowelGroup(w) {
  let result = []
  let arr = w.slice()
  for (let i = 0; i < 1; i++) {
    result.push(arr[i])
    let vowel = [...new Set(arr[i].match(/[aeiou]/gi).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)))].join("")
    for (let j = i + 1; j < arr.length; j++) {
      let vowel2 = [...new Set(arr[j].match(/[aeiou]/gi).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)))].join("")
      if (vowel == vowel2) {
        result.push(arr[j])
      }
    }

  }
  return result
}
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]))