/* Potential Friend?
Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests.
 Return true if there's a potential friend!

Examples
isPotentialFriend(
  ["sports", "music", "chess"],
  ["coding", "music", "netflix", "chess"]
) ➞ true

isPotentialFriend(
  ["cycling", "technology", "drawing"],
  ["dancing", "drawing"]
) ➞ false

isPotentialFriend(
  ["history"],
  ["history"]
) ➞ true
Notes
Arrays of interests may have varied lengths. */





function isPotentialFriend(set1, set2) {
  let result= set1.filter(x => {

    return set2.some(y => x == y)
  })
  if(set1.length==1 && set2.length==1){
    return set2[0]==set1[0]
  }else if(result.length>=2){
    return true
  }
  return false
}

console.log(isPotentialFriend(	["films"],
["films"]))