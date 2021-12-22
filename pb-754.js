/* Express Number in Expanded Notation
Create a function that takes a number and return a string with the number in expanded notation (AKA expanded form). See the resources tab for details on expanded notation.

Examples
expand(13) ➞ "10 + 3"

expand(86) ➞ "80 + 6"

expand(17000000) ➞ "10000000 + 7000000"

expand(5325) ➞ "5000 + 300 + 20 + 5"
Notes
You can expect only whole numbers greater than 0 as test input. */

function expand(num) {
  let result = [];
  let nums = num.toString();
  for (let i = 0; i < nums.length; i++) {
    if (parseInt(nums[i]) != 0) {
      result.push(
        `${nums[i]}${"0".repeat(nums.slice(i + 1, nums.length).length)}`
      );
    }
  }
  return result.join(" + ");
}

console.log(expand(5325));
