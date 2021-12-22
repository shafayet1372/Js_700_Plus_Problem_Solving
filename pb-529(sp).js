/* Gold Distribution
Mubashir and his friend Matt found some gold piles. They decided to follow simple rules to distribute the gold among them.

Gold will be divided into n piles.
Each person will choose bigger gold pile either from far left or far right.
If the weight of both piles is equal then the person will choose left pile.
Help them by creating a function that takes an array of gold piles gold and returns a two-element array with [Mubashir's Gold, Matt's Gold].

Examples
goldDistribution([4, 2, 9, 5, 2, 7]) ➞ [14, 15]
// Mubashir will choose 7, Remaining piles = [4, 2, 9, 5, 2]
// Matt will choose 4, Remaining piles = [2, 9, 5, 2]
// Mubashir will choose 2, Remaining piles = [9, 5, 2]
// Matt will choose 9, Remaining piles = [5, 2]
// Mubashir will choose 5, Remaining piles = [2]
// Matt will choose 2
// Mubashir = 7+2+5 = 14, Matt = 4+9+2 = 15

goldDistribution([10, 1000, 2, 1]) ➞ [12, 1001]

goldDistribution([10, 9, 1, 2, 8, 4]) ➞ [16, 18]
Notes
Mubashir gets to pick his gold first! */

function goldDistribution(gold) {
  let mub = [], mat = []
  let golds = [...gold]
  let j = false, m = 0
  while (golds.length != 0) {
    let left = 0
    let right = golds.length - 1

    if (golds[left] > golds[right]) {
      !j == true ? mub.push(golds[left]) : mat.push(golds[left])
      j = !j
      golds.splice(left, 1)
    } else if (golds[left] < golds[right]) {
      !j == true ? mub.push(golds[right]) : mat.push(golds[right])
      j = !j
      golds.splice(right, 1)
    } else {
      !j == true ? mub.push(golds[left]) : mat.push(golds[left])
      j = !j
      golds.splice(left, 1)
    }
  }
  let mbTotal = mub.reduce((acc, b) => { return acc + b }, 0)
  let mtTotal = mat.reduce((acc, b) => { return acc + b }, 0)
  return [mbTotal, mtTotal]

}
console.log(goldDistribution([10, 9, 1, 2, 8, 4]))