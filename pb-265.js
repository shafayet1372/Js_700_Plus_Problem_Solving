/* Letter Occurrences Per Word
Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the
 specified character as the value.

Examples
findOccurrences("Hello World", "o") ➞ {
  "hello" : 1,
  "world" : 1
}

findOccurrences("Create a nice JUICY function", "c") ➞  {
  "create" : 1,
  "a" : 0,
  "nice" : 1,
  "juicy" : 1,
  "function" : 1
}

findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
}
Notes
The function shouldn't be case sensitive.
Words in the dictionary should be in lowercase.
You may be required to find punctuation.
Duplicate words should be ignored (see example #3 for the word "an"). */






function findOccurrences(str, char) {
  let s = str.split(" ")
  const result = {}
  for (let i = 0; i < s.length; i++) {
    let counter = 0
    let word = s[i].split("")
    for (let j = 0; j < word.length; j++) {
      if (word[j].toLowerCase() == char.toLowerCase()) {
        counter++
      }
    }
    result[s[i].toLowerCase()] = counter
  }
  return result
}

console.log(findOccurrences("Hello World", "o"))