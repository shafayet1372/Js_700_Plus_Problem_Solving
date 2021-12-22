/* 
Simon asks you to perform operations on an array of numbers that only he tells you. You should ignore all other instructions 
given.
Create a function which evaluates an array of commands (written in plain English) if the command begins with Simon says.
Return the result as an integer.

Examples
simonSays([
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
]) ➞ 10

simonSays([
  "Susan says add 10",
  "Simon says add 3",
  "Simon says multiply by 8"
]) ➞ 24

simonSays([
  "Firstly, add 4",
  "Simeon says subtract 100"
]) ➞ 0



 */



function simonSays(arr) {
	let total=0
	for(let i=0;i<arr.length;i++){
		let name=arr[i].split(" ")
		if(name[0]=='Simon'){
            if(name[2]=='add'){
		total=total+parseInt(name[name.length-1])
	    }else if(name[2]=='multiply'){
		total=total*parseInt(name[name.length-1])
	    }else{
		total=total-parseInt(name[name.length-1])
			}
		}
	}
	return total
}

console.log(simonSays([
	"Firstly, add 4",
	"Simeon says subtract 100"
  ]))