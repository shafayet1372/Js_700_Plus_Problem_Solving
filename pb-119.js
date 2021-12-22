/* Given an array of words, return the longest word which can fit on a 7 segment display.

Image of a 7 segment display

Letters which do not fit on a 7 segment display are k, m, v, w and x.
Therefore, do not count words which include these letters.
Examples
longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]) ➞ "parental"

longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]) ➞ "celebration"

longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]) ➞ ""
Notes
All words will be given in lowercase.
Return an empty string if no words are eligible (see example #3).
If multiple valid words have the same length, return the first word that appears.

 */

function longest7SegmentWord(arr) {
	let result=""
  let num=-10000
  for(let i=0;i<arr.length;i++){
    if(/[kmvwx]/gi.test(arr[i])==false){
      if(arr[i].length>num){
        num=arr[i].length
        result=arr[i]
      }
    }
  }
  return result
}

console.log(longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm",'x']))