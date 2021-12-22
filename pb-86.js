/* Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

Example

For cipher = "10197115121", the output should be
decipher(cipher) = "easy".

Explanation: charCode('e') = 101, charCode('a') = 97, charCode('s') = 115 and charCode('y') = 121 */


function decipher(cipher) {
let newstr=""
let str=""

cipher=cipher.split("")
for(let i=0;i<cipher.length;i++){
    newstr=newstr+cipher[i]
    if(parseInt(newstr)>=97  && parseInt(newstr)<=122){
      str=str+String.fromCharCode(parseInt(newstr))
      newstr=""
    }
}
return str

}


console.log(decipher("10197115121"))