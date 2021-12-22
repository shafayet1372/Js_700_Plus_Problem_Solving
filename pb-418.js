/* Measure the Depth of Emptiness
In this challenge you will receive an input of the form:

[[[[[[[[[[[]]]]]]]]]]]
In other words, an array containing an array containing an array containing... an array containing nothing.

Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

Examples
measureDepth([]) ➞ 1

measureDepth([[]]) ➞ 2

measureDepth([[[]]]) ➞ 3

measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11
Notes
For a bonus challenge, try to find a solution without recursion. */






function measureDepth(arr) {
  let v = JSON.stringify(arr).split("")
  let counter = 0
  for (let i = 0; i < v.length; i++) {
    if (v[i] != '[') {
      break
    }
    counter++
  }
  return counter
}

console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]))