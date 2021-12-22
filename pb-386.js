/* Hitting the Jackpot
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise.
 The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
Notes
The elements must be exactly identical for there to be a jackp */



function testJackpot(result) {

  let val = result[0]
  for (let i = 0; i < result.length; i++) {
    if (result[i] != val) {
      return false
    }
  }
  return true
}

console.log(testJackpot(["SS", "SS", "SS", "Ss"]))