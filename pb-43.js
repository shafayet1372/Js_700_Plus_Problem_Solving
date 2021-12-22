
/* Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady". */
function longestWord(text) {
let arr=text.split(/[-_,\s\[!\]]/g)
let num=0
let str
for(let i=0;i<arr.length;i++){
    if(arr[i].length >num){
        num=arr[i].length
        str=arr[i]
    }
}
return str
}
console.log(longestWord("ab-CDE-fg_hi"))