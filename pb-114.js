/* Write a function that returns the closest chapter to the current page you are at. If two chapters are similarly close, return whichever has the higher page.

Examples
closestToPage({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


closestToPage({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


closestToPage({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapt */

function closestToPage(chapters, page) {
  let chapter=[]
  let result=[]
  for(let v in chapters){
      let cmp=chapters[v]-page
      cmp=cmp<-1?cmp*(-1):cmp
      chapter.push(cmp) 
  }
  console.log(chapter)
 chapter=chapter.sort((a,b)=>a-b)
 let low=chapter[0]
 console.log(low)
 for(let m in chapters){
  let cmp=chapters[m]-page
  cmp=cmp<-1?cmp*(-1):cmp
  if(cmp==low){
    result.push(chapters[m])
  }
 }

 if(result.length>1){
  result=result.sort((a,b)=>a-b)
  let high=result[result.length-1]
  for(let i in chapters){
    if(chapters[i]==high){
      return i
    }
  }
 }else{
  for(let i in chapters){
    if(chapters[i]==result[0]){
      return i
    }
  }
 }
 
  
}

console.log(closestToPage({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200))