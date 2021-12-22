/* 

A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.

Nesting 3 times with the word "incredible":

start  = incredible
first  = incre(incredible)dible
second = increin(incredible)credibledible
third  = increinincr(incredible)ediblecredibledible
The final nest is increinincrincredibleediblecredibledible (depth = 3)

Valid word nests can always be collapsed to show the starting word, by reversing the process above:

word = "incredible"
nest = "increinincrincredibleediblecredibledible"

Steps:
=> "increinincrincredibleediblecredibledible"   # starting nest
=> "increinincr(incredible)ediblecredibledible" # find word in nest
=> "increinincr            ediblecredibledible" # remove word
=> "increinincrediblecredibledible"             # join remaining halves
=> "increin(incredible)credibledible"           # find word in nest...

... repeat steps until single word remains

=> "incredible" (return true as "incredible" = word)
When invalid word nests are collapsed, the starting word isn't found:

word = "spring"
nest = "sprspspspringringringg"

Steps:
=> "sprspspspringringringg"   # starting nest
=> "sprspsp(spring)ringringg" # find word in nest
=> "sprspsp        ringringg" # remove word
=> "sprspspringringg"         # join remaining halves
=> "sprsp(spring)ringg"       # find word in nest...

... repeat steps until single word remains

=> "sprg" (return false as "sprig" != "spring")
Given a starting word and a final word nest, return true if the word nest is valid. Return false otherwise.

Examples
validWordNest("deep", "deep") ➞ true

validWordNest("novel", "nonnonovnovnovelelelvelovelvel") ➞ true

validWordNest("painter", "ppaintppapaipainterinternteraintererainter") ➞ false
// Doesn't show starting word after being collapsed.

validWordNest("shape", "sssshapeshapehahapehpeape") ➞ false
// Word placed outside, not inside itself.
Notes
Valid word nests can only be created by repeatedly placing the word inside itself, so at any point when collapsing the nest, there 
should only be one instance of the word to be found.

 */







function validWordNest(word, nest) {
  let rege=new RegExp(`${word}`,'g')
  let s=nest
  if(s.match(rege).length==1){
  while(s.length>word.length){
    if(rege.test(s)){
      s=s.replace(rege,'')
    }else{
      break;
    }
    
   }
  
  return s==word 
  }
  return false
 
}

console.log(validWordNest("diet", "diet"))

// let s='hellomydear'
// let v=s.replace('my','')
// console.log(v)
