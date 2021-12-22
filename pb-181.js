/* 

A group of n friends are going to see a movie. They would like to find a spot where they can sit 
next to each other in the same row. A movie theater's seat layout can be represented as a 2-D matrix, where 0s represent empty seats and 1s 
represent taken seats.

[[1, 0, 0, 0, 1, 1, 1],
[1, 1, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 1, 0, 1],
[1, 0, 1, 1, 1, 1, 1],
[1, 0, 1, 1, 0, 0, 0]]
Create a function that, given a seat layout and the number of friends n, returns the number of available spots for all n friends to sit together. 
In the above example, if n = 3, there would be 
2 spots (the first row and last row).

Examples
groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2) ➞ 3

groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4) ➞ 2
Notes
Multiple free arrangements that overlap still count as distinct arrangements (see example #2).
 */




function groupSeats(arr, n) {
    let reg=new RegExp(`[0]{${n}}`)
    let spot=0
	for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr[i].length;j++){
          if(arr[i][j]==0){
            let newstr=arr[i].slice(j,j+n)
            if(reg.test(newstr.join(""))){
               
                spot++
               
            }
           }
        }
        
    }
    return spot
}

console.log(groupSeats([
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ], 4))