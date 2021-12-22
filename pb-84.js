/* 
When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, 
and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you
can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 
1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

Example

For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be
stolenLunch(note) = "you'll never guess it: 2390"
 */
function stolenLunch(note) {
    note=note.split('')
    


for(let i=0;i<note.length;i++){
let s=note.join("")
if(isNaN(parseInt(note[i])) && (s.charCodeAt(i)-97)>=0 && (s.charCodeAt(i)-97)<=9){
    note[i]=(s.charCodeAt(i)-97).toString()
    
}else if(!isNaN(parseInt(note[i]))){
   note[i]=(String.fromCharCode(97+parseInt(note[i]))).toString()
  
  
  
}

}
return note.join("")


}
console.log(stolenLunch("just 63jd73 some random note jkhdf83 ds823 that you, dfj238 dsf38 little one?, will abjk38 s83    skdu3 29never get!"))