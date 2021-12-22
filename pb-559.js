/* Multiplication Table

Your task, is to create N x N multiplication table, of size n provided in parameter.

For example, when n is 5, the multiplication table is:

    1, 2, 3, 4, 5
    2, 4, 6, 8, 10
    3, 6, 9, 12, 15
    4, 8, 12, 16, 20
    5, 10, 15, 20, 25

This example will result in:

[[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]

Examples

multiplicationTable(1) ➞ [[1]]

multiplicationTable(3) ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

Notes

N/A */


function multiplicationTable(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    let sum = 0
    let group = []
    for (let j = 0; j < n; j++) {
      sum += i
      group[j] = sum
    }
    result.push(group)
  }
  return result
}
console.log(multiplicationTable(5))