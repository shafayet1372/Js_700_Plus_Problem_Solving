/* Check whether the given string is a subsequence of the plaintext alphabet.

Example

For s = "effg", the output should be
alphabetSubsequence(s) = false;
For s = "cdce", the output should be
alphabetSubsequence(s) = false;
For s = "ace", the output should be
alphabetSubsequence(s) = true;
For s = "bxz", the output should be
alphabetSubsequence(s) = true. */


function alphabetSubsequence(s) {

for(let i=0;i<s.length;i++){
  if(s.charCodeAt(i+1)<=s.charCodeAt(i)){
   return false
  }
}
return true
}


console.log(alphabetSubsequence('qa'))