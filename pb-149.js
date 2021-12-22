/* Create a function that turns an array of words into a comma separated list, where the last word is separated by the word "and".

Examples
wordsToSentence(["edabit"]) ➞ "edabit"

wordsToSentence(["Hello", "", "Bye"]) ➞ "Hello and Bye"

wordsToSentence(["Hello", "Bye", "See you soon"]) ➞ "Hello, Bye and See you soon"
Notes
null values, empty arrays or arrays with only empty or null values should return an empty string (e.g. "" */


function wordsToSentence(words) {
if(words==null || words.length==0){
  return ""
}else{
  let newar=words.filter(val=>val!="")
 let cmplen=newar.length-2
 let result=newar.map((val,i)=>{
   if(i==cmplen){
     return val+" and "
   }else if(i!=newar.length-1){
    
     return val+", "
   }else{
     return val
   }
 })
 return result.join("")
}

}

console.log(wordsToSentence(["one"]))