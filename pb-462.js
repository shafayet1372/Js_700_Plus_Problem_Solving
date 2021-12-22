/* Hold Your Breath!
You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

Positive numbers represent height above the water.
0 is sea level.
Negative numbers represent depth below the water's surface.
Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.

Your character starts with a breath meter of 10, which is the maximum. When diving underwater, your breath meter decreases by 2 per item in 
the array. Watch out! If your breath diminishes to 0, your character dies!

To prevent this, you can replenish your breath by 4 (up to the maximum of 10) for each item in the array where you are at or above sea level.

Your function should return true if your character survives, and false if not.

Worked Example
divingMinigame([-5, -15, -4, 0, 5]) ➞ true

// Breath meter starts at 10.
// -5 is below water, so breath meter decreases to 8.
// -15 is below water, so breath meter decreases to 6.
// -4 is below water, so breath meter decreases to 4.
// 0 is at sea level, so breath meter increases to 8.
// 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// Character survives!
Examples
divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ true

divingMinigame([-3, -6, -2, -6, -2]) ➞ false

divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4]) ➞ false
Notes
Lists may be of any length.
All arrays are valid.

 */



function divingMinigame(arr) {
  let totalLife = 10
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      totalLife -= 2
    } else {
      totalLife += 4
      if(totalLife>=10){
        totalLife=10
      }
    }
    if (totalLife <= 0) {
      return false
    }
  }
  return true
}

console.log(divingMinigame([1, 2, 1, 2, 1, 2, 1, 2, 1, -3, -4, -5, -3, -4]))