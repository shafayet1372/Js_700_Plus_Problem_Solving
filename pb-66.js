/* Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.

Example

For a = [2, 2, 1] and b = [10, 11], the output should be
concatenateArrays(a, b) = [2, 2, 1, 10, 11]. */

function concatenateArrays(a, b) {
return [...a,...b]
}

console.log(concatenateArrays([2,2,1],[4,5,6]))