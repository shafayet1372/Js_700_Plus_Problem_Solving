/* Which Number Is Not like the Others?
Create a function that takes an array of numbers and returns the number that's unique.

Examples
unique([3, 3, 3, 7, 3, 3]) ➞ 7

unique([0, 0, 0.77, 0, 0]) ➞ 0.77

unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
Notes
Test cases will always have exactly one unique number while all others are the same. */


function unique(arr) {
  /*  
  shortway
  return arr.filter(val => {
     let counter = 0
     arr.forEach(x => {
       if (val == x) {
         counter++
       }
     })
     return counter == 1
   })[0] */
  let visited = []
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          counter++
        }
      }
    }
    if (counter == 1) {
      return arr[i]
    }
  }

}

console.log(unique([3, 3, 3, 7, 3, 3]))