/* Sales by Match
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three 
odd socks left, one of each color. The number of pairs is 2.

Create a function that returns an integer representing the number of matching pairs of socks that are available.

Examples
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) ➞ 3

sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]) ➞ 4

sockMerchant([]) ➞ 0
Notes
N/A */

function sockMerchant(arr) {
  let visited = [], sum = 0
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
          counter++
        }
      }
      visited.push(arr[i])
    }
    if (counter >= 2) {
      sum += (counter - counter % 2) / 2
    }
  }
  return sum
}

console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]))