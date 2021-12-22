/* Instances of the Fibonacci Sequence

Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden 
ratio. See the OEIS and Wikipedia links in the resources tab.
Examples

fibSeq(4) ➞ [0, 1, 1, 2]

fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]

fibSeq(0) ➞ []

Notes

    If 0 is given, return an empty array.
    If no argument is given, return undefined.
    The input will never be a negative integer */



function fibSeq(end) {
  if (!arguments.length) {
    return undefined
  } else if (!end) {
    return []
  }
  let result = [], l = 0
  for (let i = 0; i < end; i++) {
    if (i < 2) {
      result[i] = i
    } else {
      let sum = result[0 + l] + result[result.length - 1]
      first = result[result.length - 1]
      second = sum
      result = [...result, sum]
      l++
    }
  }
  return result
}

console.log(fibSeq(2))