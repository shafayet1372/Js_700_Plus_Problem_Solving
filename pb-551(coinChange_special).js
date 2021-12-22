/* Given an amount and the denominations of coins available, determine how many ways change can be made for amount. There is a limitless supply of each coin type.

Example


There are  ways to make change for : , , and .

Function Description

Complete the getWays function in the editor below.

getWays has the following parameter(s):

int n: the amount to make change for
int c[m]: the available coin denominations
Returns

int: the number of ways to make change
Input Format

The first line contains two space-separated integers  and , where:
 is the amount to change
 is the number of coin types
The second line contains  space-separated integers that describe the values of each coin type.

Constraints

Each  is guaranteed to be distinct.
Hints

Solve overlapping subproblems using Dynamic Programming (DP):
You can solve this problem recursively but will not pass all the test cases without optimizing to eliminate the overlapping subproblems. Think of a way to store 
and reference previously computed solutions to avoid solving the same subproblem multiple times. * Consider the degenerate cases:
- How many ways can you make change for  cents? - How many ways can you make change for  cents if you have no coins? * If you're having trouble defining your 
solutions store, then think about it in terms of the base case . - The answer may be larger than a -bit integer. */


function maximumCoinChange(coints,amount){

  let coint = [0,...coints]

  let num = -1000
  
  let amountRow = []
  for (let i = 0; i < coint.length; i++) {
    let group = []
    for (let j = 0; j <= amount; j++) {
      if (j == 0) {
        group[j] = 1
      } else if (i == 0) {
        group[j] = 0
      } else if (coint[i] > j) {
        group[j] = amountRow[i - 1][j]
      } else {
        let val = amountRow[i - 1][j] + group[j - coint[i]]
        group[j] = val
      }
      if (group[j] > num) {
        num = group[j]
      }
    }
    amountRow.push(group)
  
  }
  return num
}

console.log(maximumCoinChange([2,5,3,6],10))