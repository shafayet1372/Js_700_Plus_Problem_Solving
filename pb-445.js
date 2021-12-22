/* Changing Mixed Types
Create a function that changes all the elements in an array as follows:

Add 1 to all even integers, nothing to odd integers.
Concatenates "!" to all strings and make the first letter of the word a capital letter.
Changes all boolean values to its opposite.
Examples
changeTypes(["a", 12, true]) ➞ ["A!", 13, false]

changeTypes([13, "13", "12", "twelve"]) ➞ [13, "13!", "12!", "Twelve!"]

changeTypes([false, "false", "true"]) ➞ [true, "False!", "True!"]
Notes
There won't be any float values.
You won't get strings with both numbers and letters in them.
Although the task may be easy, try keeping your code as clean and as readable as possible!
 */






function changeTypes(arr) {
  return arr.map((val, i) => {
    if (val % 2 == 0 && typeof val != 'string' && typeof val != "boolean") {
      return val + 1
    } else if (typeof val == 'string') {
      if (isNaN(val)) {
        let s = val.split('')
        s[0] = s[0].toUpperCase()
        return s.join("") + "!"
      }
      return val + "!"
    } else if (typeof val == "boolean") {
     
      return !val
    }
    return val
  })
}

console.log(changeTypes([false, "false", "true"]))