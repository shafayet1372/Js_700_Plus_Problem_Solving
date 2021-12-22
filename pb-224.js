/* 
In this challenge, you have to establish if a given number is undulating. A number n is undulating when the following conditions are all true:

n has at least three digits.
n has exactly two different digits.
The two digits of n are alternating without repeating groups.
If we think at the first digit of an undulating number as an "A", and to its second digit as a "B", we can notice a sequence of the form "ABA", that can repeat 
infinite times and ends either with an "A" or with a "B", but without clusters of "AA" or "BB" into it.

Given a positive integer n, implement a function that returns true if n is an Undulating number, or false if it's not.

Examples
isUndulating(121) ➞ true
// A = 1, B = 2
// The sequence ABA is valid

isUndulating(373737) ➞ true
// A = 3, B = 7
// The sequence ABABABAB is valid

isUndulating(12) ➞ false
// Less than three digits

isUndulating(12122) ➞ false
// The sequence ABABB is not valid

isUndulating(85856) ➞ false
// More than two different digits
Notes
N/A
 */


function isUndulating(n) {
    let uniAr = [...new Set(n.toString().split(""))]
    if (uniAr.length == 2 && n.toString().length >= 3) {
        let counter = 0, number = n.toString().split("")
        for (let i = 0; i < number.length; i++) {

            if (uniAr[counter] == parseInt(number[i])) {
                counter = counter == 1 ? 0 : 1
            } else {
                return false
            }
        }
        return true
    }

    return false
}

console.log(isUndulating(85856))