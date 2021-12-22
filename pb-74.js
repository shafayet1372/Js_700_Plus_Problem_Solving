/* Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

Example

For noun = "pARiS", the output should be
properNounCorrection(noun) = "Paris";
For noun = "John", the output should be
properNounCorrection(noun) = "John" */

function properNounCorrection(noun) {
let ar=[]

for(let i=0;i<noun.length;i++){
  if(i==0){
    ar.push(noun[i].toUpperCase())
  }else{
    ar.push(noun[i].toLowerCase())
  }
}
return ar.join("")

}



console.log(properNounCorrection('pARis'))