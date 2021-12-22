/* In this challenge, you have to verify if a number is exactly divisible by a combination of its digits. There are three possible conditions to test:

The given number is exactly divisible by each of its digits excluding the zeros.
The given number is exactly divisible by the sum of its digits.
The given number is exactly divisible by the product of its digits.
Given an integer n, implement a function that returns:

If every test is true, a string "Perfect".
If some test is true, the number of true tests (1 or 2).
If every test is false, a string "Indivisible".
Examples
digitalDivision(21) ➞ 1
// Exactly divisible only by the sum of its digits (2 + 1 = 3).

digitalDivision(128) ➞ 2
// Exactly divisible by each of its digits.
// Exactly divisible by the product of its digits (1 * 2 * 8 = 16).

digitalDivision(100) ➞ 2
// Exactly divisible by each of its digits (excluding zeros).
// Exactly divisible by the sum of its digits (1 + 0 + 0 = 1).

digitalDivision(12) ➞ "Perfect"
// Exactly divisible by each of its digits.
// Exactly divisible by 3 (sum of digits = 1 + 2).
// Exactly divisible by 2 (product of digits = 1 * 2).

digitalDivision(31) ➞ "Indivisible"
// Every testing condition is false.
Notes
Remember to exclude any 0-digit when testing if the given n is divisible by each of its digits (see example #3).
A number containing at least a 0-digit can't be exactly divided by the product of its digits (division by 0).
Trivially, every single-digit positive number greater than 0 is Perfect
Any given number will be a positive integer greater than 0. */







function digitalDivision(n) {
    let number = n.toString().split("")
    let sum = 0, product = 1, counter = 0, result = [], len = 0
    let i = 0, m = 0
    while (m < 1) {
        while (i < number.length) {
            sum = sum + parseInt(number[i])
            product = product * parseInt(number[i])
            if (n % parseInt(number[i]) == 0 && number[i] != '0') {
                counter++
            } else if (number[i] == '0') {
                len++
            }
            i++
        }
        if (counter == number.length - len) {
            result.push(true)
        }
        if (n % sum == 0) {
            result.push(true)
        }
        if (n % product == 0) {
            result.push(true)
        }
        m++
    }
   
    if (result.length == 0) {
        return "Indivisible"
    } else if (result.length == 3) {
        return "Perfect"
    }
    return result.length
}

console.log(digitalDivision(12))