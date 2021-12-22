/* Mirror Cipher
In Mirror Cipher, encoding is done by by switching message characters with its mirror opposite character of the key.

Create a function that takes two arguments; a message and an optional key, and returns the encoded message.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

message = "Mubashir Hassan"
key = "edabitisamazing"

mirrorCipher(message, key) ➞ "tuzishar hissid"
Step 1: Replace all characters of given message with mirror character in the key:

M = t, // 't' is mirror character of 'M'
u = u, // 'u' is not part of the key
b = z, // 'z' is mirror character of 'b'
a = i, and so on ...
Step 2: Return encoded message in lower case:

"tuzishar hissid"
If optional key is not given, consider the whole alphabet as a default (i.e. key = "abc..z").

Examples
mirrorCipher("Mubashir Hassan", "edabitisamazing") ➞ "tuzishar hissid"

mirrorCipher("Matt MacPherson") ➞ "nzgg nzxksvihlm"

mirrorCipher("Airforce is best", "pilot") ➞ "aorfirce os besp"
Notes
Ignore case of message and key, (e.g. "M" = "m"). */

function mirrorCipher(message, key) {
  if(key==''){
    return message
  }
  let str = message.toLowerCase()
  let s = str.split("")
  let k = key && key.toLowerCase().split("")
  for (let i = 0; i < s.length; i++) {
    if (key) {

      if (key.indexOf(s[i]) >= 0) {
        s[i] = key[(key.length - 1) - key.indexOf(s[i])]
      }
    } else {
      if (s[i] != ' ') {
        s[i] = String.fromCharCode(122 - ((str.charCodeAt(i) - 96) - 1))
      }

    }
  }
  return s.join("")
}

console.log(mirrorCipher("Matt MacPherson"))