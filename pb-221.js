/* 
Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions:

If a 1 is rolled, that is bad luck. The next roll counts as 0.
If a 6 is rolled, that is good luck. The next roll is multiplied by 2.
The array length will always be 3 or higher.
Examples
rolls([1, 2, 3]) ➞ 4
// The second roll, 2, counts as 0 as a result of rolling 1.

rolls([2, 6, 2, 5]) ➞ 17
// The 2 following the 6 was multiplied by 2.

rolls([6, 1, 1]) ➞ 8
// The first roll makes the second roll worth 2, but the
// second roll was still 1 so the third roll doesn't count.
Notes
Even if a 6 is rolled after a 1, 6 isn't summed but the 6's "effect" still takes place. */







function rolls(arr) {
    let newar = arr.slice()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1 && i != arr.length - 1) {
            newar[i + 1] = 0
        } else if (arr[i] == 6 && i != arr.length - 1) {
            newar[i + 1] = newar[i + 1] * 2
        }
    }
    console.log(newar)
    return newar.reduce((acc, val) => {
        return acc + val
    }, 0)
}

console.log(rolls([5, 1, 6, 1, 6]))