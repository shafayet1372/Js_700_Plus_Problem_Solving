/* Spin Around, Touch The Ground
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the 
array counts as a 90° rotation in that direction.

Examples
spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

spinAround(["left", "right", "left", "right"]) ➞ 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2

spinAround(["left", "left", "left", "left"]) ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left".
 */





function spinAround(r) {
  let total = 0
  let first = r[0]
  for (let i = 0; i < r.length; i++) {
    if (r[i] == first) {
      total += 90
    } else {
      total -= 90
    }
  }
  return Math.floor(total / 360)
}

console.log(spinAround(['left', 'left', 'left', 'left']))