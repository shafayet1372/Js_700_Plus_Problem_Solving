/* Find the Second Largest Number
Create a function that takes an array of numbers and returns the second largest number.

Examples
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23
Notes
There will be at least two numbers in the array. */


function secondLargest(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr[1]
}

console.log(secondLargest([10, 40, 30, 20, 50]))