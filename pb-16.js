/* Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar. */

function areSimilar(a, b) {

 let dif=[]
 for(let i=0;i<a.length;i++){
   if(a[i]!=b[i]){
     dif.push(i)
   }
 }
 if(dif.length==0){
   return true
 }else if(dif.length==2){
  if(a[dif[0]]==b[dif[1]] && a[dif[1]]==b[dif[0]]){
    return true
  }
 }

return false

}
console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  
  [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]))