/* Reverse the Order of Words with Five Letters or More
Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples
reverse("Reverse") ➞ "esreveR"

reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"

reverse("The dog is big.") ➞ "The dog is big."
Notes
You can expect a valid string to be provided for each test case. */

function reverse(str) {
  let s = str.split(" ")
  for (let i = 0; i < s.length; i++) {
    if (s[i].length >= 5) {
      let val = s[i].split("").reverse().join("")
      s[i] = val
    }
  }
  return s.join(" ")
}

console.log(reverse("This is a typical sentence."))