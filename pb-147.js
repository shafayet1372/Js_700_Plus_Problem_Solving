/* You will be given an array of dancing couples, with the woman first and man second, as well as a parameter "men" or "women".

If the parameter is "men", the men reverse their positions (first moves to last, last moves to first, etc), while women keep their positions.
If the parameter is "women", the women reverse their positions, while men keep their positions.
Examples
dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], men) ➞ [
  [Ana, Tim],
  [Amy, Josh],
  [Lisa, Bob]
]

dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], women) ➞ [
  [Lisa, Bob],
  [Amy, Josh],
  [Ana, Tim]
] */

function dance(arr, parameter) {
	const obj={men:1,women:0}
  let m=arr.length-1
  for(let i=0;i<Math.round(arr.length/2);i++){
    let swap=arr[i][obj[parameter]]
    arr[i][obj[parameter]]= arr[m][obj[parameter]]
    arr[m][obj[parameter]]=swap
    m--
  }
  
return arr
}

console.log(dance([
  ["Ana", "Bob"],
  ["Amy", "Josh"],
  ["Lisa", "Tim"]
], "men"))