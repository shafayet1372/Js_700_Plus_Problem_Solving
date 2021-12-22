/* Burglary Series (03): Is It Gone?
Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

Given an object of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:

"Rambo is gone..." if the name is on the list.
"Rambo is here!" if the name is not on the list.
Note that the first letter of the name in the return statement is capitalized.

Examples
const obj = {
  tv: 30,
  timmy: 20,
  stereo: 50,
} ➞ "Timmy is gone..."
// Timmy is in the object.


const obj = {
  tv: 30,
  stereo: 50,
} ➞ "Timmy is here!"
// Timmy is not in the stolen list object.


const obj = { } ➞ "Timmy is here!"
// Timmy is not in the object. */

function findIt(obj, name) {
  let copyName=name
  name = name.split("")
  name[0] = name[0].toUpperCase()
  return obj[copyName] ? `${name.join("")} is gone...` : `${name.join("")} is here!`
}

console.log(findIt({
  tv: 30,
  stereo: 50,
	julius: 100,											 
}, "julius"))