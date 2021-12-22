/*  
 Create a function that takes a string (morse code) as an argument and returns an unencrypted string.

 Examples
 decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"
 
 decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"
 
 decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .") ➞ "EDABBIT CHALLENGE"
 The following object can be used for coding:
 
 morseToDots = {
   ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
   "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
   "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
   "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
   "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
   "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
   "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
   ".-.-.-":".", ".----.":""", "---...":":", "--..--":", ", " ":""
 }
 Notes
 Return values are all uppercase.
 Input string can have digits.
 Input string can have some special chararacters (e.g. comma, colon, apostrophe, period, question mark, exclamation mark). */
 
 
 
 
 
 
 
 
 
 let ref = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '.-.-.-': '.',
    '--..--':',',
    '..--..':"?",
    '-.-.--':"!",
    '-....-':'-',
    '-..-.':"/",
    '.--.-.':"@",
    '-.--.':"(",
    '-.--.-':")",
    "":" ",
    '---...':':',
    '.----.':"'",
  };

  function decodeMorse(str) {
  let newStr=str.split(" ")
  let result=newStr.reduce((acc,val,i,arr)=>{
    if(val=="" && arr[i+1]==""){
      acc=acc+''
    }else{
      acc=acc+ref[val].toUpperCase()
    }
    return acc
  },'')
 return result
  }

  console.log(decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."))