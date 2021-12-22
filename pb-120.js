/* Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

findBrokenKeys(correct phrase, what you actually typed)
Examples
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
Notes
Broken keys should be ordered by when they first appear in the sentence.
Only one broken key per letter should be listed.
Letters will all be in lower case. */


function findBrokenKeys(str1, str2) {
	str1=str1.split("")
  str2=str2.split("")

  let result=[]
  for(let i=0;i<str1.length;i++){
    if(str1[i]!=str2[i]){
      result.push(str1[i])
    }
  }
  return [...new Set(result)]
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))