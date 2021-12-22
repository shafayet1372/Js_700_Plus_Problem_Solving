/* Total Count of Numbers in a MultiDimensional Array
Create a function that takes a multidimensional array and return the total count of numbers in that array.

Examples
countNumber([["", 17.2, 5, "edabit"]]) ➞ 2
// 17.2 and 5.

countNumber([[[[[2, 14]]], 2, 3, 4]]) ➞ 5
// 2, 14, 2, 3 and 4.

countNumber([["balkot"]]) ➞ 0
Notes
Input may be array of numbers, strings and empty arrays */


const countNumber = arr => {
  let newar = arr.flat(Infinity)
  let counter = 0
  console.log(newar)
  for (let i = 0; i < newar.length; i++) {
    if (!isNaN(newar[i]) && newar[i]!=='')  {
      
      counter++
    }
  }
  return counter
};

console.log(countNumber([0, [12,"biratnagar",[[2]]]]))