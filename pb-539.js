/* Initialize
Create a function that takes in an array of full names and returns the initials.

Examples
initialize(["Stephen Hawking"]) ➞ ["S. H."]

initialize(["Harry Potter", "Ron Weasley"]) ➞ ["H. P.", "R. W."]

initialize(["Sherlock Holmes", "John Watson", "Irene Adler"]) ➞ ["S. H.", "J. W.", "I. A."]
Notes
Each initial is followed by a dot.
Names will always be made of two words, separated by a space. */

function initialize(names) {
  return names.map(x => {
    let val = x.match(/[A-Z]/g)
    return `${val[0]}. ${val[1]}.`
  })
}

console.log(initialize(["Harry Potter", "Ron Weasley"]))