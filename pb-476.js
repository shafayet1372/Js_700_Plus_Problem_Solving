/* What Type of Triangle?
Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

No sides equal: "scalene"
Two sides equal: "isosceles"
All sides equal: "equilateral"
Less or more than 3 sides given: "not a triangle"
Examples
getTriangleType([2, 6, 5]) ➞ "scalene"

getTriangleType([4, 4, 7]) ➞ "isosceles"

getTriangleType([8, 8, 8]) ➞ "equilateral"

getTriangleType([3, 5, 5, 2]) ➞ "not a triangle"
Notes
You will be given an array of positive integers.
Check the Resources tab for more information on the types of triangles
 */





function getTriangleType(arr) {
  if (arr.length !=3) {
    return "not a triangle"
  }
  let counter = 0, visited = []
  for (let i = 0; i < arr.length; i++) {
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j] && i != j) {
          counter++
        }
      }
      visited.push(arr[i])
    }
  }
  if (!counter) {
    return 'scalene'
  } else if (counter == 1) {
    return 'isosceles'
  }
  return "equilateral"
}

console.log(getTriangleType([4, 4, 7]))