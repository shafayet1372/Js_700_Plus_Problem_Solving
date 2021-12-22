/* Transform Upvotes
Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

Examples
transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
Notes
Return the upvotes as an array. */









function transformUpvotes(str) {
  let s = str.split(" ")

  for (let i = 0; i < s.length; i++) {
    if (s[i].includes('k')) {
      s[i] = parseInt(s[i].replace('.', ''))
      s[i] = parseInt(s[i] + '00')
    } else {
      s[i] = parseInt(s[i])
    }
  }
  return s
}

console.log(transformUpvotes("20.3k 3.8k 7.7k 992"))