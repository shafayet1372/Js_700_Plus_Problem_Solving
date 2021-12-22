/* 
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order
 must be the same as in the initial array.

Example

For

inputArray = ["abc",
              "",
              "aaa",
              "a",
              "zz"]
the output should be

sortByLength(inputArray) = ["",
                            "a",
                            "zz",
                            "abc",
                            "aaa"]
 */

function sortByLength(inputArray) {
   let input=inputArray.sort((a,b)=>a.length-b.length)
  
    return input
    }

    console.log(sortByLength(["abc",
    "",
    "aaa",
    "a",
    "zz"]))