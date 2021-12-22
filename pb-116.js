/* Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

Examples
pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

pluralize(["table", "table", "table"]) ➞ ["tables"]

pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
Notes
This is an oversimplification of the English language so no edge cases will appear.
Only focus on whether or not to add an s to the ends of words.
All tests will be valid.
 */


function pluralize(arr) {
	let result=[]
  let cmp=[]
  let counter
  for(let i=0;i<arr.length;i++){
    counter=0
    if(!cmp.includes(arr[i])){
      for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
          counter++
        }
   }
   if(counter>=2){
    result.push(arr[i]+"s")
    cmp.push(arr[i])
  }else{
    result.push(arr[i])
  }
    }
  
  }
return result
}
	

console.log(pluralize(["table", "table", "table"]))