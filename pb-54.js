/* You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7, and c = 2, the output should be
extraNumber(a, b, c) = 7.
 */

function extraNumber(a, b, c) {

return a==b?c:a==c?b:a
}
console.log(extraNumber(2,7,2))