/* Secret Society
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

Examples
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
Notes
The secret society's name should be entirely uppercased. */









function societyName(friends) {
  let str = ""
  for (let i = 0; i < friends.length; i++) {
    str = str + friends[i].charAt(0)
  }
  return str.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
}


console.log(societyName(["Adam", "Sarah", "Malcolm"]))