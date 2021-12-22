/* 
You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary 
code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each
consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

Example

For code = "010010000110010101101100011011000110111100100001", the output should be
messageFromBinaryCode(code) = "Hello!".

The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.
Other letters can be obtained in the same manner */



let  binary=
"010001010110110001100101011011010110010101101110011101000110000101110010011110010010110000100000011011010111100100100000011001000110010101100001
011100100010000001010111011000010111010001110011011011110110111000100001"

function messageFromBinaryCode(code) {
    binary=code.split("")
    
  
    let str
    let newstr=""
    for(let i=0;i<binary.length;i=i+8){
        str=""
        for(let j=i;j<i+8;j++){
            
            str=str+binary[j]
        }
       newstr=newstr+String.fromCharCode(parseInt(str,2))
     
    }
    return newstr
}
console.log(messageFromBinaryCode('010010000110010101101100011011000110111100100001'))