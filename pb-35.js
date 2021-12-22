/* Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
longestDigitsPrefix(inputString) = "123". */


function longestDigitsPrefix(inputString) {

  var str = inputString;
  var matches = str.match(/^\d+/);
  console.log(matches)
  if(matches==null){
    return ""
  }else{
    return matches[0]
  }

}

console.log(longestDigitsPrefix("123aaa"))
