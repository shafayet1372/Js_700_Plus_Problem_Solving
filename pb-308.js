/* Is it True?
In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

Examples
isTrue("2=2") ➞ true

isTrue("8<7") ➞ false

isTrue("5=13") ➞ false

isTrue("15>4") ➞ true
Notes
Tests will only have three types of relations: =, >, and <
Many approaches work here, but the eval() function is particularly useful!
 */



function isTrue(relation) {
  let result = [], s = relation.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '=') {
      result.push('==')
    } else {
      result.push(s[i])
    }
  }

  return eval(result.join(""))
}

console.log(isTrue('2=2'))